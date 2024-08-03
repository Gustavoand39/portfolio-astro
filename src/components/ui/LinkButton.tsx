import { type FC } from "react";

interface LinkButtonProps {
  ariaLabel: string;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children: string | JSX.Element;
}

const LinkButton: FC<LinkButtonProps> = ({
  ariaLabel,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  className,
  children,
}) => {
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      target={target}
      rel={rel}
      className={`bg-slate-800 hover:bg-gray-600 text-white text-center font-semibold py-1.5 px-4 transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
