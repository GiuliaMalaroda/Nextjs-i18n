import { useEffect } from 'react';
import I18n from '../components/hoc/I18n';

const Homepage = () => {

    return (
        <h1>{I18n("pages","homepage")}</h1>
    )
}

export default Homepage;