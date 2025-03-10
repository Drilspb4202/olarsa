"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, Database, Server, ArrowDown } from "lucide-react"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      const moveX = (x - 0.5) * 30
      const moveY = (y - 0.5) * 30

      const elements = sectionRef.current.querySelectorAll(".parallax")
      elements.forEach((el) => {
        const speed = Number.parseFloat(el.getAttribute("data-speed") || "1")
        const htmlEl = el as HTMLElement
        htmlEl.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 hero-gradient relative overflow-hidden tech-section">
      <div className="tech-grid"></div>
      <div className="scanline"></div>

      <div className="tech-circle" style={{ width: "300px", height: "300px", top: "10%", right: "5%" }}></div>
      <div className="tech-circle" style={{ width: "200px", height: "200px", bottom: "10%", left: "5%" }}></div>
      <div className="tech-dots" style={{ width: "40%", height: "40%", top: "10%", left: "5%" }}></div>
      <div className="tech-dots" style={{ width: "30%", height: "30%", bottom: "10%", right: "5%" }}></div>
      <div className="tech-line" style={{ top: "30%" }}></div>
      <div className="tech-line" style={{ bottom: "20%" }}></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 animate-in">
                <div className="tech-indicator"></div>
                <span className="text-sm font-medium text-foreground/80 ml-2 tech-subheading">
                  Профессиональные технические решения
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-in tech-heading">
              <span className="text-gradient bg-gradient-to-r from-purple-400 to-violet-600">Технические решения</span> от{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient bg-gradient-to-r from-violet-500 to-purple-300 font-extrabold">Ольги</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-primary/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 C25,5 75,5 100,0 L100,10 L0,10 Z" fill="currentColor" />
                </svg>
                <div className="absolute -inset-2 bg-primary/5 blur-lg rounded-lg z-0"></div>
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl animate-in stagger-1">
              Профессиональные технические услуги для улучшения вашего онлайн-присутствия и автоматизации
              бизнес-процессов.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl animate-in stagger-2">
            <div className="modern-card p-6 flex flex-col items-center text-center">
              <div className="tech-icon-container mb-4">
                <Code className="h-6 w-6 tech-icon" />
              </div>
              <h3 className="font-semibold mb-2">Разработка ботов</h3>
              <p className="text-sm text-foreground/70">Автоматизация взаимодействия с клиентами</p>
            </div>
            <div className="modern-card p-6 flex flex-col items-center text-center">
              <div className="tech-icon-container mb-4">
                <Database className="h-6 w-6 tech-icon" />
              </div>
              <h3 className="font-semibold mb-2">GetCourse</h3>
              <p className="text-sm text-foreground/70">Полная техническая настройка платформы</p>
            </div>
            <div className="modern-card p-6 flex flex-col items-center text-center">
              <div className="tech-icon-container mb-4">
                <Server className="h-6 w-6 tech-icon" />
              </div>
              <h3 className="font-semibold mb-2">Домены и Tilda</h3>
              <p className="text-sm text-foreground/70">Интеграция и настройка лендингов</p>
            </div>
          </div>

          <div className="space-x-4 animate-in stagger-3 mt-6">
            <Button asChild size="lg" className="rounded-full btn-modern">
              <a href="#services">
                Изучить услуги <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#contact">Связаться со мной</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="tech-counter">
              <span className="text-xs text-foreground/60">Успешных проектов:</span>
              <span className="ml-2 font-mono text-primary">50+</span>
            </div>
            <div className="tech-counter">
              <span className="text-xs text-foreground/60">Время работы:</span>
              <span className="ml-2 font-mono text-primary">5+ лет</span>
            </div>
            <div className="tech-counter">
              <span className="text-xs text-foreground/60">Клиентов:</span>
              <span className="ml-2 font-mono text-primary">100+</span>
            </div>
          </div>

          <div
            className="absolute -bottom-10 -right-10 md:right-10 md:bottom-10 opacity-10 md:opacity-20 w-64 h-64 parallax"
            data-speed="2"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                className="text-primary"
                d="M45.3,-59.1C58.9,-51.1,70.2,-37.8,76.1,-22.1C82,-6.4,82.5,11.7,75.8,26.1C69.1,40.5,55.3,51.2,40.3,58.4C25.4,65.6,9.3,69.3,-5.9,67.1C-21.2,64.9,-35.6,56.8,-48.2,45.7C-60.8,34.6,-71.5,20.5,-74.3,4.9C-77.1,-10.7,-72,-27.9,-61.6,-39.6C-51.2,-51.3,-35.6,-57.5,-21.2,-65.1C-6.8,-72.7,6.4,-81.7,21.1,-79.7C35.8,-77.7,51.9,-64.7,45.3,-59.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div
            className="absolute top-20 -left-10 md:left-20 opacity-10 md:opacity-20 w-40 h-40 parallax"
            data-speed="1.5"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                className="text-primary"
                d="M47.7,-57.2C59.5,-47.3,65.8,-30.9,68.2,-14.2C70.6,2.4,69.1,19.4,61.1,32.5C53.1,45.6,38.7,54.8,23.4,60.3C8.1,65.9,-8.1,67.8,-22.1,63C-36.1,58.2,-47.9,46.7,-56.3,33.1C-64.7,19.5,-69.7,3.8,-67.2,-11.1C-64.7,-26,-54.7,-40.1,-42.1,-50C-29.5,-59.9,-14.7,-65.6,1.3,-67.2C17.4,-68.8,34.8,-66.3,47.7,-57.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="absolute top-1/3 right-1/4 opacity-10 md:opacity-20 w-32 h-32 parallax" data-speed="1.2">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                className="text-primary"
                d="M39.9,-51.6C50.1,-42.8,55.9,-29.1,59.5,-14.9C63.2,-0.7,64.7,14,59.3,25.5C53.9,37,41.5,45.4,28.3,51.6C15.1,57.8,1.1,61.9,-13.4,60.7C-27.9,59.6,-42.9,53.2,-53.1,41.9C-63.3,30.6,-68.7,14.3,-67.8,-1.5C-66.9,-17.3,-59.6,-32.6,-48.4,-41.4C-37.2,-50.2,-22.1,-52.5,-7.5,-53.3C7.1,-54.1,29.7,-60.4,39.9,-51.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="scroll-indicator hidden md:block"></div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-float">
        <p className="text-sm text-foreground/60">Прокрутите вниз</p>
        <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
      </div>
    </section>
  )
}

