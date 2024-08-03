import type { FC } from "react";

interface CloseIconProps {
  className?: string;
}

const CloseIcon: FC<CloseIconProps> = ({ className }) => {
  return (
    <svg width="512" height="512" viewBox="0 0 512 512" className={className}>
      <line
        x1="368"
        y1="368"
        x2="144"
        y2="144"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <line
        x1="368"
        y1="144"
        x2="144"
        y2="368"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </svg>
  );
};

export default CloseIcon;
