import { Post } from "../../types";
import { useQuery } from "react-query";
import { api } from "../../../../technical/httpClient";
import { Layout } from "../../../../ui/Layout";
import { Title } from "../../../../ui/Title";
import { useTranslation } from "react-i18next";
import { PostList } from "../../components/PostList";
import { Loader } from "../../../../ui/Loader";

export function Posts() {
  const { t } = useTranslation();
  const { data: posts = [], isLoading } = useQuery(
    "getPosts",
    async () => await api.get<Post[]>("/posts")
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout>
      <Title>{t("pages.posts.title")}</Title>
      <PostList posts={posts} className="mt-4" />
    </Layout>
  );
}
