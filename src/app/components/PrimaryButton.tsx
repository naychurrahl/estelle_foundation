import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <Button
      className="bg-blue-600 hover:bg-blue-700 text-white"
      {...props}
    >
      {children}
    </Button>
  );
}
