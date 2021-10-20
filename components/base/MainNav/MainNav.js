import { useRouter } from 'next/router';
import { Link } from 'next-translate-routes';
import T from '../../hoc/T';
import css from './MainNav.module.scss';

const links = [
    { label: "homepage", url: "/" },
    { label: "news", url: "/news" },
    { label: "about_us", url: "/about-us" }
]

const MainNav = () => {
    const { locale, defaultLocale, pathname } = useRouter(); 

    return (
        <nav className={css.MainNav}>
            <ul className={css.MainNav_List}>
                {links.map((link, i) => {
                    let url = link.url === "/" ? (locale === defaultLocale ? "/" : `/${locale}`) : link.url;

                    return (
                        <li key={i} className={css.MainNav_Item}>
                            <Link 
                                href={{ pathname: url }}
                                locale={locale} >
                                <a className={css.MainNav_Link}>
                                    {T("pages", link.label)}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default MainNav;