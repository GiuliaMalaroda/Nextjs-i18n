import { useRouter } from 'next/router';
import I18n from "../hoc/I18n";
import I18nLink from '../hoc/I18nLink';

const MainNav = () => {
    const { locale } = useRouter();

    return (
        <ul>
            <li>
                <I18nLink href="/" locale={locale}>
                    {I18n("pages","homepage")}
                </I18nLink>
            </li>
            <li>
                <I18nLink href="/about-us" locale={locale}>
                    {I18n("pages","about_us")}
                </I18nLink>
            </li>
            <li>
                <I18nLink href="/news" locale={locale}>
                    {I18n("pages","news")}
                </I18nLink>
            </li>
        </ul>
    )
}

export default MainNav;