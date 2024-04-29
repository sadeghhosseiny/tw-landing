import { twMerge } from "tailwind-merge";

type PProps = JSX.IntrinsicElements["p"];
interface ITextProps extends PProps {
  children: string;
  className?: string;
}

const Text = ({ children, className = "", ...otherProps }: ITextProps) => {
  const defaultStyle = "text-primary text-xs sm:text-base";

  return (
    <p {...otherProps} className={twMerge(defaultStyle, className)}>
      {children}
    </p>
  );
};

export default Text;
