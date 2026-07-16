import { forwardRef } from "react";
import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className="bg-purple-600 hover:bg-purple-700 text-white"
        {...props}
      >
        {children}
      </Button>
    );
  },
);
PrimaryButton.displayName = "PrimaryButton";
