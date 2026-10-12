import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return <Tag className={className ? `${styles.wrap} ${className}` : styles.wrap}>{children}</Tag>;
}
