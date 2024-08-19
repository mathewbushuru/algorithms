import { redirect } from "next/navigation";

import { ArticleLink } from "@/components/article-link";

import { getArticles } from "@/lib/writing-utils";

export default function Home() {
  redirect("/data-structures-and-algorithms")
  const allArticles = getArticles();
  return (
    <div className="my-8 flex flex-col items-center gap-8">
      <div className="flex flex-col gap-1">
        {allArticles
          .sort((a, b) => {
            if (
              new Date(a.metadata.lastModified) >
              new Date(b.metadata.lastModified)
            ) {
              return -1;
            } else {
              return 1;
            }
          })
          .map((post) => (
            <ArticleLink
              key={post.slug}
              title={post.metadata.title}
              href={`/${post.slug}`}
              formattedDate={post.metadata.lastModified}
              contentPreview={post.metadata.preview}
            />
          ))}
      </div>
    </div>
  );
}
