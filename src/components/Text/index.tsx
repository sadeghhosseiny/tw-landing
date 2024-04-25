import { twMerge } from "tailwind-merge";

interface ITextProps {
  children: React.ReactNode;
  className?: string;
}

const Text = ({ children, className = "", ...otherProps }: ITextProps) => {
  const defaultStyle = "text-primary text-lg";

  return (
    <p {...otherProps} className={twMerge(defaultStyle, className)}>
      {children}
    </p>
  );
};

export default Text;
