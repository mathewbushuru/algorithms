import Link from "next/link";
import { CalendarDaysIcon } from "lucide-react";

export function ArticleLink({
  title,
  href,
  formattedDate,
  contentPreview,
}: {
  title: string;
  href: string;
  formattedDate: string;
  contentPreview: string;
}) {
  return (
    <Link href={href}>
      <div className="group max-w-xs rounded-sm py-4 transition-all duration-300 sm:max-w-xl sm:hover:cursor-pointer sm:hover:bg-popover sm:hover:px-4 sm:hover:shadow-md lg:max-w-4xl">
        <h3 className="mb-1 text-lg font-semibold sm:text-xl lg:mb-2">
          {title}
        </h3>
        <p className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground group-hover:text-foreground lg:mb-2">
          {contentPreview}
        </p>
      </div>
    </Link>
  );
}
