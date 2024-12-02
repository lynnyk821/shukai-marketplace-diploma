import { useState, useEffect, useRef } from "react";
import DropdownIcon from "./DropdownIcon.tsx";
import {CATEGORIES} from "../../../../../globals-env.ts";

export default function HeaderDropdown() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className={"h-full relative"}>
            {/* Головний блок */}
            <div
                className={
                    "h-full w-44 rounded-l-[8px] flex " +
                    "border-r-[1px] border-solid border-[#eee] bg-white cursor-pointer"
                }
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={"w-4/5 h-full flex items-center px-2"}>
                    <p
                        className={"font-montserrat text-[14px]"}
                        style={{ userSelect: "none" }}
                    >
                        {selectedCategory || CATEGORIES[0]} {/* Відображення вибраної категорії */}
                    </p>
                </div>
                <div className={"w-1/5 centered"}>
                    <div className={"w-full h-2/3 flex items-center justify-center border-style-l"}>
                        <DropdownIcon isOpen={isOpen}></DropdownIcon>
                    </div>
                </div>
            </div>

            {/* Випадаючий список */}
            {isOpen && (
                <ul className={
                    "absolute w-full h-72 left-0 top-12 rounded-l-xl overflow-auto z-10 " +
                    "border-[1px] border-solid border-gray-300 bg-white "
                }>
                    {CATEGORIES.map((element, key) => (
                        <li
                            key={key}
                            className={
                                `h-9 flex items-center px-2 font-montserrat text-[14px] cursor-pointer 
                                ${selectedCategory === element ? "bg-gray-200" : "hover:bg-gray-100"}`
                            }
                            onClick={() => {
                                setSelectedCategory(element);
                                setIsOpen(false);
                            }}
                        >
                            {element}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
