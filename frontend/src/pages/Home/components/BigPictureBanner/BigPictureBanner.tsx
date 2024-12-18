import BigPictureBannerLayout from "./BigPictureBannerLayout.tsx";


export default function BigPictureBanner() {
    return (
        <BigPictureBannerLayout>
            {/*<div
                className={"w-full h-[22rem] centered"}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: `center ${position}%`,
                    backgroundRepeat: "no-repeat",
                    userSelect: "none"
                }}
            />*/}
            <div className={"w-full h-[22rem] centered font-monserrat bg-[#eee]"}>Banner</div>
        </BigPictureBannerLayout>
    );
}