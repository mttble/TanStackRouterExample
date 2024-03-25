import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="relative">
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </div>
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}