import type { FC } from "react";

interface MenuIconProps {
  className?: string;
}

const MenuIcon: FC<MenuIconProps> = ({ className }) => {
  return (
    <svg width="512" height="512" viewBox="0 0 512 512" className={className}>
      <line
        x1="80"
        y1="160"
        x2="432"
        y2="160"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={24}
      />
      <line
        x1="80"
        y1="256"
        x2="432"
        y2="256"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={24}
      />
      <line
        x1="80"
        y1="352"
        x2="432"
        y2="352"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={24}
      />
    </svg>
  );
};

export default MenuIcon;
