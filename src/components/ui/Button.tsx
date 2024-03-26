import { cn } from "@/libs/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <button
        {...props}
        className={cn(
          "w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed text-white font-semibold hover:opacity-75 transition",
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default Button;
