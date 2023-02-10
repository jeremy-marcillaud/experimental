import clsx from "clsx";
import { ReactElement, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className: string;
};

const GlassPane = ({ children, className }: ButtonProps): ReactElement => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
