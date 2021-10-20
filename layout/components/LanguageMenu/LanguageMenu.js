import T from '../../../components/hoc/T';
import css from './LanguageMenu.module.scss';
import Flags from '../../../components/compound/Flags/Flags';

const LanguageMenu = () => {
    return (
        <div className={css.LanguageMenu}>
            <div className={css.LanguageMenu_Label}>{T('common','switch_language')}</div>
            <Flags />
        </div>
    )
}

export default LanguageMenu;