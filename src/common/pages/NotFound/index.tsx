import { useTranslation } from "react-i18next";
import { Layout } from "../../../ui/Layout";
import { Title } from "../../../ui/Title";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Title>{t("pages.notFound.title")}</Title>
    </Layout>
  );
}
