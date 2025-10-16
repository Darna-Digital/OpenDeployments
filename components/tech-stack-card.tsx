import StackIcon from "tech-stack-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  href: string;
  icon: string;
  linkTarget?: string;
  className?: string;
  iconClassName?: string;
}

export default function TechStack({
  title,
  href,
  icon,
  linkTarget,
  className,
  iconClassName,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "flex border border-border items-center gap-4 transition hover:bg-card rounded-lg p-4",
        className
      )}
      target={linkTarget ? linkTarget : undefined}
    >
      <div className="flex items-center justify-center">
        <StackIcon
          variant="dark"
          name={icon!}
          className={cn("size-[3rem] hidden! dark:block!", iconClassName)}
        />

        <StackIcon
          variant="light"
          name={icon!}
          className={cn("size-[3rem] block dark:hidden!", iconClassName)}
        />
      </div>

      <h3 className="font-medium">{title}</h3>
    </Link>
  );
}
