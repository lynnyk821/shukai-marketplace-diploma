import FooterOtherLinksLayout from "./FooterOtherLinksLayout.tsx";
import FooterOtherLinkButton from "./FooterOtherLinkButton.tsx";

export default function FooterOtherLinks() {
    return (
        <FooterOtherLinksLayout>
            <FooterOtherLinkButton text={"Про нас"} />
            <FooterOtherLinkButton text={"Договір-оферта"} />
            <FooterOtherLinkButton text={"Для покупців"} />
            <FooterOtherLinkButton text={"Для продавців"} />
            <FooterOtherLinkButton text={"Контакти"} />
            <FooterOtherLinkButton text={"Політика конфіденційності"} />
            <FooterOtherLinkButton text={"Зворотній зв'язок"} />
            <FooterOtherLinkButton text={"Гарантії"} />
        </FooterOtherLinksLayout>
    );
};