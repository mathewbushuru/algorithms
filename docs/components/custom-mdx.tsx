import Link from "next/link";
import Image from "next/image";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const components = {
  Image,
  Link,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
};

export default function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [rehypeHighlight],
        },
      }}
      {...props}
    />
  );
}
