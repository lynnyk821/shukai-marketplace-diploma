import SocialMediaLayout from "./SocialMediaLayout.tsx";
import SocialMediaButton from "./SocialMediaButton.tsx";

export default function SocialMedia() {
    return (
        <SocialMediaLayout>
            <SocialMediaButton
                icon={"line-md:youtube-filled"}
                className={`text-[#414141] hover:text-[#e53935]`}
            />
            <SocialMediaButton
                icon={"line-md:telegram"}
                className={`text-[#414141] hover:text-[#3390ec]`}
            />
            <SocialMediaButton
                icon={"line-md:instagram"}
                className={`text-[#414141] hover:text-[#d81b60]`}
            />
            <SocialMediaButton
                icon={"line-md:facebook"}
                className={"text-[#414141] hover:text-blue-500"}
            />
        </SocialMediaLayout>
    );
};