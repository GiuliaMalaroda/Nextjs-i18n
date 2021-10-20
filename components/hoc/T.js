import useTranslation from 'next-translate/useTranslation';

const T = (category, key) => {
    const { t } = useTranslation();

    //console.log(t(`${category}:${key}`));

    return t(`${category}:${key}`);
}

export default T;