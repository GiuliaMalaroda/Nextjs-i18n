import { useRouter } from 'next/router';
import Flag from '../../base/Flag/Flag';
import css from './Flags.module.scss';

const Flags = () => {
    const { locales } = useRouter();

    return (
        <ul className={css.Flags}>
            {locales.map((locale,i) => {
                return (
                    <li key={i}>
                        <Flag nextLocale={locale} />
                    </li>
                )
            })}
        </ul>
    )
}

export default Flags;