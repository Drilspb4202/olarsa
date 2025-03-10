"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="tech-line" style={{ top: "0" }}></div>
      <div className="container flex items-center justify-between h-16 mx-auto">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold flex items-center">
            <div className="tech-icon-container w-8 h-8 mr-2">
              <Code className="h-4 w-4 tech-icon" />
            </div>
            <span className="tech-heading">Ольга</span>
            <span className="text-foreground">.tech</span>
          </a>
        </div>

        {/* Десктопная навигация */}
        <nav className="hidden md:flex md:gap-8">
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
            Главная
          </a>
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-full btn-modern">
            <a href="#contact">Начать сотрудничество</a>
          </Button>
        </div>

        {/* Кнопка мобильного меню */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Меню">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-md shadow-lg">
          <div className="tech-dots" style={{ width: "100%", height: "100%", top: "0", left: "0" }}></div>
          <div className="flex flex-col space-y-4 p-6">
            <a
              href="#"
              className="px-3 py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </a>
            <a
              href="#services"
              className="px-3 py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a
              href="#contact"
              className="px-3 py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button asChild className="w-full rounded-full btn-modern">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Начать сотрудничество
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

