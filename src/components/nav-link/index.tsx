'use client';

import type {
  AnchorHTMLAttributes,
  PropsWithChildren,
  RefAttributes
} from 'react';
import { usePathname } from 'next/navigation';
import Link, { type LinkProps } from 'next/link';

interface Props
  extends LinkProps,
    PropsWithChildren,
    Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof LinkProps | 'className'
    >,
    RefAttributes<HTMLAnchorElement> {
  className?: string | string[];
  activeClassName: string;
}

export default function NavLink({
  href,
  className,
  activeClassName,
  children,
  ...props
}: Props) {
  const pathname: string = usePathname();
  const classes: string[] = [];

  if (Array.isArray(className)) {
    classes.push(...className);
  } else if (className) {
    classes.push(className);
  }

  if (href === pathname) {
    classes.push(activeClassName);
  }

  return (
    <Link href={href} className={classes.join(' ')} {...props}>
      {children}
    </Link>
  );
}
