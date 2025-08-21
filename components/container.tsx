import { ReactNode } from "react";
interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

export default function Container({ className, children }: ContainerProps)
{
    return (
        <div 
            className={`
            dark:bg-neutral-900 
            dark:text-white
            dark:shadow-neutral-md
            bg-white 
            text-gra
            rounded-2xl 
            p-4 
            shadow-md
            ${className || ""}`}
            >
            {children}
        </div>
    )
}