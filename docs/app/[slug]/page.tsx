import { notFound } from "next/navigation";

import { getArticles } from "@/lib/writing-utils";

import CustomMDX from "@/components/custom-mdx";

import "@/app/github-code.css";

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: any) {
  const article = getArticles().find(
    (article) => article.slug === params.slug,
  );

  if (!article) return { title: "Mathew Bushuru | Blog" };

  return {
    title: `Mathew Bushuru | dsa - ${article.metadata.title}`,
    description: article.metadata.summary,
  };
}

export default function ArticlePage({ params }: any) {
  const article = getArticles().find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="p-4 pb-8 sm:px-8">
        <div className="prose dark:prose-invert mb-2">
          <h1>{article.metadata.title}</h1>
        </div>

        <article className="prose dark:prose-invert max-w-none">
          <CustomMDX source={article.content} />
        </article>
      </div>
    </>
  );
}
