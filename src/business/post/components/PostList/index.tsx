import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Route } from "../../../../common/types";
import { Card } from "../../../../ui/Card";
import { Post } from "../../types";

interface PostListProps {
  posts: Post[];
  className?: string;
}

export function PostList({ posts, className }: PostListProps) {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-4 justify-between",
        "sm:grid-cols-2",
        "md:grid-cols-3",
        className
      )}
    >
      {posts.map(({ id, title, body }) => (
        <Card key={id} title={title}>
          {body}
          <div className="mt-2">
            <Link
              to={Route.SinglePost.replace(":id", id.toString())}
              className="text-blue-600"
            >
              {t("components.postList.more")}
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
