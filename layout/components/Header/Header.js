import MainNav from '../../../components/compound/MainNav/MainNav';
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