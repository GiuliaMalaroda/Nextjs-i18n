import useTranslation from 'next-translate/useTranslation';

const I18n = (category = "common", key, variables) => {
    const { t } = useTranslation();
    return t(`${category}:${key}`);
}

export default I18n;