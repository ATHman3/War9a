"use client";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const getClassStyle = (
    currentTheme: string,
  propClassName: string | undefined
) =>
  cn(
    "cursor-pointer transition duration-300 ease-in-out rotate-0 h-5 w-5",
    {
      "rotate-180": currentTheme === "light",
    },
    propClassName
  );

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const onClickSwitch = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  if (theme === "dark")
    return (
      <Moon
        className={getClassStyle(theme, className)}
        onClick={onClickSwitch}
      />
    );

  if (theme === "light")
    return (
      <Sun
        className={getClassStyle(theme, className)}
        onClick={onClickSwitch}
      />
    );
};

export default ThemeSwitcher;