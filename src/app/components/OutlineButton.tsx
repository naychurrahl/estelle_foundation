import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function OutlineButton({ children, ...props }: OutlineButtonProps) {
  return (
    <Button
      variant="outline"
      className="border-blue-600 text-blue-600 hover:bg-blue-50"
      {...props}
    >
      {children}
    </Button>
  );
}
