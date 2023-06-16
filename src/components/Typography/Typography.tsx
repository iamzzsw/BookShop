import React from "react";
import cn from "classnames";

import styles from "./Typography.module.css";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "p" | "span";
  color?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  color = "primary",
  className,
  children,
}) => {
  const Tag = variant;
  return <Tag className={cn(styles[variant], styles[color], className)}>{children}</Tag>;
};

export default Typography;
