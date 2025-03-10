"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Проверяем предпочтения пользователя при загрузке
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed right-4 top-4 z-50 rounded-full bg-background/80 backdrop-blur-sm border shadow-md tech-icon-container"
      onClick={toggleTheme}
      aria-label="Переключить тему"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400 tech-icon" />
      ) : (
        <Moon className="h-5 w-5 text-primary tech-icon" />
      )}
    </Button>
  )
}

