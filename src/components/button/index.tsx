import { twMerge } from "tailwind-merge";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | React.ReactNode;
  className?: string;
}

const Button = ({ children, className = "", ...otherProps }: IButtonProps) => {
  const defaultStyle = "text-primary text-base p-3 cursor-pointer";

  return (
    <button {...otherProps} className={twMerge(defaultStyle, className)}>
      {children}
    </button>
  );
};

export default Button;
