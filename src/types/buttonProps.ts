import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ButtonProps {
  children: string | ReactNode;
  ariaLabel?: string;
  className?: string;
  type?: "submit" | "button";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  isLoading?: boolean;
  id?: string;
  onClick?: () => void | Dispatch<SetStateAction<boolean>> | Promise<void>;
}
