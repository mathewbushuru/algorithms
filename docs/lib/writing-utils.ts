import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  summary: string;
  lastModified: string;
  preview: string;
};

function parseFrontMatter(rawFileContent: string) {
  const frontMatterRegex = /---\s*([\s\S]*?)\s*---/;

  const frontMatterFound = frontMatterRegex.exec(rawFileContent)!;
  const frontMatterBlock = frontMatterFound[1];
  const frontMatterLines = frontMatterBlock.trim().split("\n");

  const content = rawFileContent.replace(frontMatterRegex, "").trim();

  const metadata: Partial<Metadata> = {};
  frontMatterLines.forEach((line) => {
    const [key, ...valuesArr] = line.split(": ");
    let value = valuesArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { content, metadata: metadata as Metadata };
}

function getMdxFiles(dir: string) {
  const filesArr = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");
  return filesArr;
}

function readMdxFile(filepath: string) {
  const rawFileContent = fs.readFileSync(filepath, "utf-8");
  return rawFileContent;
}

function getMdxData(dir: string) {
  const mdxFiles = getMdxFiles(dir);

  const mdxDataArr = mdxFiles.map((file) => {
    const fileContent = readMdxFile(path.join(dir, file));
    const { content, metadata } = parseFrontMatter(fileContent);
    const slug = path.basename(file, path.extname(file));
    return { slug, metadata, content };
  });

  return mdxDataArr;
}

export function getArticles() {
  return getMdxData(path.join(process.cwd(), "app", "_articles"));
}
