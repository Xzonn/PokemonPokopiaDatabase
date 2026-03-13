"use client";

import NextLink, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren, forwardRef } from "react";

type CustomLinkProps = LinkProps & PropsWithChildren & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export const Link: FC<CustomLinkProps> = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ href, children, ...rest }, ref) => {
    const pathname = usePathname();

    if (href.toString().startsWith("https://")) {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={href.toString()}
          {...rest}
          ref={ref}
        >
          {children}
        </a>
      );
    }

    const current = decodeURIComponent(pathname);

    if (href === current || (typeof href === "string" && decodeURIComponent(href) === current)) {
      return (
        <span
          aria-current="page"
          {...rest}
        >
          {children}
        </span>
      );
    }

    return (
      <NextLink
        href={href}
        {...rest}
      >
        {children}
      </NextLink>
    );
  },
);
Link.displayName = "Link";
