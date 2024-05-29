import React, { useRef, useEffect } from "react";
import "./menu.scss";

const Menu = ({
  children,
  isOpen,
  className,
  onOpenChange,
  styleDiv,
}: Menu) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as any)) {
      if(onOpenChange)
      onOpenChange(false);
    }
  };
  useEffect(() => {
    const handleEscape = (event: any) => {
      if (event.key === "Escape" && isOpen) {
        onOpenChange(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onOpenChange]);

  return (
    <div
      ref={menuRef}
      className={`react-menu ${isOpen && "open"} ${className}`}
      style={{ ...styleDiv }}
    >
      {children}
    </div>
  );
};

export default Menu;

interface Menu {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  className?: string;
  styleDiv?: React.CSSProperties;
}
