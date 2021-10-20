import Image from 'next/image';
import { useRouter } from 'next/router';
import { Link } from 'next-translate-routes';
import css from './Flag.module.scss';

const Flag = ({ nextLocale }) => {
    const { locale, defaultLocale, pathname } = useRouter();
    let classes = `${css.Flag} ${locale === nextLocale ? css.active : ""}`;

    let url = pathname === "/" ? (nextLocale === defaultLocale ? "/" : `/${nextLocale}`) : pathname;

    return (
        <Link
            href={{ pathname: url }}
            locale={nextLocale} >
            <button 
                className={classes}
                type="button" >
                <Image src={`/images/flags/${nextLocale}.png`} layout="fill"/>
            </button>
        </Link>
    )
}

export default Flag;