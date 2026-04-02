"use client";

import { ReactNode, useRef, MouseEvent, CSSProperties } from "react";
import { motion } from "framer-motion";
import { btnTap } from "@/lib/motion";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline-white";
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  style,
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  function handleRipple(e: MouseEvent<HTMLElement>) {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX - rect.left - 20}px`;
    ripple.style.top = `${e.clientY - rect.top - 20}px`;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }

  const cls = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <motion.div whileTap={disabled ? undefined : btnTap} style={{ display: "inline-flex" }}>
        <Link href={href} className={cls} style={style} onClick={handleRipple}>
          <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            {children}
          </span>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={btnRef}
      whileTap={disabled ? undefined : btnTap}
      className={cls}
      style={style}
      onClick={(e) => {
        if (!disabled) {
          handleRipple(e);
          onClick?.();
        }
      }}
      disabled={disabled}
      type={type}
    >
      <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
        {children}
      </span>
    </motion.button>
  );
}
