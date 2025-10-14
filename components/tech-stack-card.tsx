import StackIcon from "tech-stack-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  href: string;
  icon: string;
  className?: string;
}

export default function TechStack({ title, href, icon, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "flex border border-border items-center gap-4 bg-card rounded-lg p-4",
        className
      )}
    >
      <div className="flex items-center justify-center">
        <StackIcon
          variant="dark"
          name={icon!}
          className="size-[3rem] hidden! dark:block!"
        />

        <StackIcon
          variant="light"
          name={icon!}
          className="size-[3rem] block dark:hidden!"
        />
      </div>

      <h3 className="font-medium">{title}</h3>
    </Link>
  );
}
