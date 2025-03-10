"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TechProcess from "@/components/tech-process"
import TechSkills from "@/components/tech-skills"
import TechFAQ from "@/components/tech-faq"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Устанавливаем флаг монтирования для предотвращения проблем с гидратацией
    setIsMounted(true)
    
    // Функция для анимации элементов при прокрутке
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".reveal")

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-in")
        }
      })
    }

    // Создаем технические декоративные элементы
    const createTechElements = () => {
      // Очищаем существующие элементы перед созданием новых во избежание дублирования
      document.querySelectorAll(".tech-circle, .tech-line").forEach(el => el.remove())
      
      // Создаем случайные технические круги
      for (let i = 0; i < 5; i++) {
        const circle = document.createElement("div")
        circle.className = "tech-circle"
        circle.style.width = `${Math.random() * 100 + 50}px`
        circle.style.height = circle.style.width
        circle.style.top = `${Math.random() * 100}%`
        circle.style.left = `${Math.random() * 100}%`
        document.querySelector("main")?.appendChild(circle)
      }

      // Создаем случайные линии
      for (let i = 0; i < 3; i++) {
        const line = document.createElement("div")
        line.className = "tech-line"
        line.style.top = `${Math.random() * 100}%`
        document.querySelector("main")?.appendChild(line)
      }
    }

    // Анимация счетчиков
    const animateCounters = () => {
      const counters = document.querySelectorAll(".tech-metric-value")

      counters.forEach((counter) => {
        const target = counter.getAttribute("data-value")
        if (!target) return

        const updateCounter = () => {
          const value = Number.parseInt(counter.textContent || "0")
          const targetValue = Number.parseInt(target)

          if (value < targetValue) {
            counter.textContent = `${Math.ceil(value + targetValue / 20)}`
            setTimeout(updateCounter, 50)
          } else {
            counter.textContent = target.includes("/") ? target : `${targetValue}`
          }
        }

        updateCounter()
      })
    }

    window.addEventListener("scroll", animateOnScroll)
    // Запустить один раз для элементов, которые видны при загрузке
    animateOnScroll()
    createTechElements()

    // Запустить анимацию счетчиков через небольшую задержку
    setTimeout(animateCounters, 1000)

    return () => window.removeEventListener("scroll", animateOnScroll)
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden tech-section">
      {isMounted && (
        <>
          <div className="blob top-0 left-0"></div>
          <div className="blob bottom-0 right-0"></div>
          <div className="tech-grid"></div>
          <div className="scanline"></div>
        </>
      )}
      <ThemeToggle />
      <Header />
      <HeroSection />
      <ServicesSection />
      <TechProcess />
      <TechSkills />
      <TechFAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}

