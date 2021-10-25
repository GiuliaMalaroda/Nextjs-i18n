import I18n from "../components/hoc/I18n";
import LanguageNav from "../components/layout/LanguageNav";
import MainNav from "../components/layout/MainNav";

const AboutUs = () => {
    return (
        <>
        <LanguageNav />
        <hr />
        <MainNav />
        <hr />
        <h1>{I18n("pages","about_us")}</h1>
        </>
    )
}

export default AboutUs;