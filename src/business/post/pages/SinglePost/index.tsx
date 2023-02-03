import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { api } from "../../../../technical/httpClient";
import { Layout } from "../../../../ui/Layout";
import { Loader } from "../../../../ui/Loader";
import { Title } from "../../../../ui/Title";
import { Post } from "../../types";

export function SinglePost() {
  const { id } = useParams();
  const { t } = useTranslation();

  const { data: post, isLoading } = useQuery(
    "getPost",
    async () => await api.get<Post>(`/posts/${id}`),
    { cacheTime: 0 }
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout>
      <Title>{t("pages.post.title")}</Title>
      <div className="mt-4 font-semibold">{post?.title}</div>
      <p>{post?.body}</p>
    </Layout>
  );

  return <Loader />;
}
