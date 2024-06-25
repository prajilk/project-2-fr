import { cn } from "@/lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    endIcon: React.ReactNode;
  };

const buttonVariants = cva(
  "rounded-full border group flex items-center gap-3",
  {
    variants: {
      size: {
        default: "px-5 py-2.5 text-base font-medium",
        sm: "px-4 py-2.5 text-xs font-semibold",
        lg: "px-6 py-3.5 text-lg font-bold",
        icon: "size-10 rounded-full after:rounded-full",
      },
      color: {
        default:
          "bg-secondary border-primary text-primary fill-primary hover:bg-primary hover:text-secondary hover:fill-secondary",
        secondary:
          "bg-[#0D0F09] text-primary fill-primary hover:bg-primary hover:text-secondary hover:fill-secondary",
      },
    },
    defaultVariants: {
      size: "default",
      color: "default",
    },
  },
);

const Button = ({
  children,
  endIcon,
  size,
  color,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({
          size,
          className,
          color,
        }),
      )}
      {...props}
    >
      <span>{children}</span>
      {endIcon}
    </button>
  );
};

export default Button;
