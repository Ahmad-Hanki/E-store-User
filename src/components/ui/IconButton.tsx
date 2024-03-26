import { cn } from "@/libs/utils";
import { MouseEventHandler, ReactElement } from "react";

interface IconButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: ReactElement;
}

const IconButton = ({ className, onClick, icon }: IconButtonProps) => {
  return (
    <button
      className={
        (cn(
          "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
        ),
        className)
      }
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
