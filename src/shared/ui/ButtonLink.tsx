import type { ReactNode } from "react";
import styles from "./ButtonLink.module.css";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "outline" | "glass";
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ href, variant = "primary", external = false, className, children }: ButtonLinkProps) {
  const classes = [styles.btn, styles[variant], className].filter(Boolean).join(" ");
  return (
    <a
      className={classes}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
