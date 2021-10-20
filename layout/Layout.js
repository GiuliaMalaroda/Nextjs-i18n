import Header from "./components/Header/Header";
import LanguageMenu from "./components/LanguageMenu/LanguageMenu";
import MetaHead from "./components/MetaHead";

const Layout = ({ title, description, children }) => {
    return (
        <>
            <MetaHead
                title={title}
                description={description} />

            <LanguageMenu />

            <Header />

            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;