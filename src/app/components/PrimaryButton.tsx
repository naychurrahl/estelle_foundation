import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <Button
      className="bg-purple-600 hover:bg-purple-700 text-white"
      {...props}
    >
      {children}
    </Button>
  );
}
