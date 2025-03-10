"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, CheckCircle, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Устанавливаем флаг монтирования для предотвращения проблем с гидратацией
    setIsMounted(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Добавляем технический эффект "загрузки"
    const formElement = e.target as HTMLFormElement
    formElement.classList.add("opacity-50")

    // Добавляем терминальный эффект
    const terminalElement = document.createElement("div")
    terminalElement.className = "terminal-card mt-4"
    terminalElement.innerHTML = `
    <div class="terminal-content">
      <span class="terminal-line">Отправка данных...</span>
      <span class="terminal-line output">Проверка формы...</span>
      <span class="terminal-line output">Подготовка данных...</span>
      <span class="terminal-line output">Отправка на сервер...</span>
    </div>
  `
    formElement.parentNode?.appendChild(terminalElement)

    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Обновляем терминал
    terminalElement.innerHTML = `
    <div class="terminal-content">
      <span class="terminal-line">Отправка данных...</span>
      <span class="terminal-line output">Проверка формы... OK</span>
      <span class="terminal-line output">Подготовка данных... OK</span>
      <span class="terminal-line output">Отправка на сервер... OK</span>
      <span class="terminal-line output">Сообщение успешно отправлено!</span>
    </div>
  `

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", service: "", message: "" })

    // Удаляем терминал через некоторое время
    setTimeout(() => {
      terminalElement.remove()
      formElement.classList.remove("opacity-50")
    }, 2000)

    // Сброс сообщения об успешной отправке через 5 секунд
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl reveal tech-heading">
            Давайте <span className="relative">Сотрудничать</span>
          </h2>
          <p className="max-w-[600px] text-foreground/80 md:text-xl reveal stagger-1">
            Готовы вывести ваше онлайн-присутствие на новый уровень? Свяжитесь со мной, чтобы обсудить ваш проект.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {isMounted && (
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >
              <div className="space-y-8 reveal stagger-2">
                <div className="modern-card p-8 relative">
                  <div className="tech-dots" style={{ width: "100%", height: "100%", top: "0", left: "0" }}></div>
                  <div className="tech-line" style={{ top: "10%" }}></div>
                  <div className="tech-line" style={{ bottom: "10%" }}></div>

                  <h3 className="text-2xl font-bold mb-4 tech-heading">Контактная информация</h3>
                  <p className="text-foreground/70 mb-6">
                    Не стесняйтесь обращаться для обсуждения требований вашего проекта. Я здесь, чтобы помочь вам добиться
                    успеха.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center group">
                      <div className="tech-icon-container mr-4 w-12 h-12">
                        <Mail className="h-5 w-5 tech-icon" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 tech-subheading">Email</p>
                        <p className="text-foreground/80 group-hover:text-primary transition-colors">olya@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center group">
                      <div className="tech-icon-container mr-4 w-12 h-12">
                        <Phone className="h-5 w-5 tech-icon" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 tech-subheading">Телефон</p>
                        <p className="text-foreground/80 group-hover:text-primary transition-colors">+7 (999) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center group">
                      <div className="tech-icon-container mr-4 w-12 h-12">
                        <MapPin className="h-5 w-5 tech-icon" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 tech-subheading">Локация</p>
                        <p className="text-foreground/80 group-hover:text-primary transition-colors">Москва, Россия</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modern-card p-8 relative">
                  <div className="tech-dots" style={{ width: "100%", height: "100%", top: "0", left: "0" }}></div>

                  <div className="flex items-center mb-4">
                    <div className="tech-icon-container mr-4 w-10 h-10">
                      <Clock className="h-4 w-4 tech-icon" />
                    </div>
                    <h4 className="font-semibold text-lg">Рабочие часы</h4>
                  </div>
                  <div className="space-y-2 text-foreground/70">
                    <div className="flex justify-between">
                      <span>Понедельник - Пятница:</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота:</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье:</span>
                      <span className="font-medium">Выходной</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isMounted && (
            <div
              className={`glassmorphism p-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            >
              <h3 className="text-2xl font-bold mb-6 heading-modern">Отправьте мне сообщение</h3>

              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 p-6 rounded-xl flex items-center justify-center flex-col space-y-4">
                  <CheckCircle className="h-12 w-12 text-green-500 animate-pulse-soft" />
                  <p className="text-lg">Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Введите ваше имя"
                      className="rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                      Электронная почта
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Введите вашу почту"
                      className="rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground/80 mb-2">
                      Интересующая услуга
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="" disabled>
                        Выберите услугу
                      </option>
                      <option value="domain">Покупка и интеграция домена</option>
                      <option value="telegram-bot">Разработка чат-ботов Telegram</option>
                      <option value="instagram-bot">Разработка чат-ботов Instagram</option>
                      <option value="getcourse">Техническая настройка GetCourse</option>
                      <option value="tilda">Настройка лендинга на Tilda</option>
                      <option value="other">Другой запрос</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                      Ваше сообщение
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите о вашем проекте..."
                      className="rounded-lg"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full btn-modern" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Отправка..."
                    ) : (
                      <>
                        Отправить сообщение <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

