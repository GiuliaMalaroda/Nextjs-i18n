import { useRouter } from 'next/router';
import I18nLink from '../hoc/I18nLink';

const LanguageNav = ({ slugs = [] }) => {
    const { locales, pathname, query, asPath } = useRouter();

    return (
        <ul>
            {locales.map((locale,i) => {
                return (
                    <li key={i}>
                        <I18nLink 
                            slugs={slugs}
                            href={{
                                pathname: pathname,
                                query: query
                            }} 
                            asPath={asPath}
                            locale={locale} >
                            <a>{locale}</a>
                        </I18nLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default LanguageNav;