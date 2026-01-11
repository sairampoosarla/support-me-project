"use client";

import * as React from "react";

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon } from "lucide-react";

//we are omitting type because we want to set it to password or text
type PasswordInputProps = Omit<React.ComponentProps<"input">, "type">;

function PasswordInput({ className, ...props }: PasswordInputProps) {

    const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="relative">
        <Input type={showPassword ? "text" : "password"} className={cn("pr-10", className)} {...props}/>
        <span className="absolute top-1.75 right-1 cursor-pointer select-none">
            {showPassword ? <EyeIcon onClick={() => setShowPassword(!showPassword)} /> : <EyeOffIcon onClick={() => setShowPassword(!showPassword)} />}
        </span>
    </div>
    
  )
}

export { PasswordInput }
