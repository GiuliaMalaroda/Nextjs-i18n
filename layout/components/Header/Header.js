import MainNav from '../../../components/base/MainNav/MainNav';
import css from './Header.module.scss';

const Header = () => {
    return (
        <header className={css.Header}>
            <h1>Next.js + i18n</h1>
            <MainNav />
        </header>
    )
}

export default Header;