import { forwardRef } from "react";
import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        className="border-purple-600 text-purple-600 hover:bg-purple-50"
        {...props}
      >
        {children}
      </Button>
    );
  },
);
OutlineButton.displayName = "OutlineButton";
