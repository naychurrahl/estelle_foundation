import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function OutlineButton({ children, ...props }: OutlineButtonProps) {
  return (
    <Button
      variant="outline"
      className="border-purple-600 text-purple-600 hover:bg-purple-50"
      {...props}
    >
      {children}
    </Button>
  );
}
