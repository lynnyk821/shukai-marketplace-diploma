import type { SVGProps } from 'react';

export function HugeIconUserAccount(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={30} height={30} viewBox="0 0 24 24" {...props}
        >
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} >
                <path d="M14 9h4m-4 3.5h3"></path>
                <rect width={20} height={18} x={2} y={3} rx={5}></rect>
                <path d="M5 16c1.208-2.581 5.712-2.75 7 0m-1.5-7a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
            </g>
        </svg>
    );
}