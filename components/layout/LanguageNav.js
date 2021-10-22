import { useRouter } from 'next/router';
import I18nLink from '../hoc/I18nLink';

const LanguageNav = () => {
    const { locales, pathname } = useRouter();

    return (
        <ul>
            {locales.map((locale,i) => {
                return (
                    <li key={i}>
                        <I18nLink href={pathname} locale={locale}>
                            <a>{locale}</a>
                        </I18nLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default LanguageNav;