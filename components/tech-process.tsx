"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Clock, FileText, Settings, Send, Users } from "lucide-react"

export default function TechProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("tech-process")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev < 4 ? prev + 1 : 0))
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  const steps = [
    {
      title: "Консультация",
      description: "Обсуждение требований проекта и определение оптимального решения",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "Планирование",
      description: "Разработка детального плана работы и согласование сроков",
      icon: <FileText className="h-6 w-6 text-primary" />,
    },
    {
      title: "Разработка",
      description: "Техническая реализация проекта согласно требованиям",
      icon: <Settings className="h-6 w-6 text-primary" />,
    },
    {
      title: "Тестирование",
      description: "Проверка работоспособности и устранение возможных ошибок",
      icon: <Clock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Запуск",
      description: "Финальный запуск проекта и передача клиенту",
      icon: <Send className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <section id="tech-process" className="py-20 bg-background relative overflow-hidden">
      <div className="tech-grid"></div>
      <div className="tech-dots" style={{ width: "40%", height: "40%", top: "10%", right: "5%" }}></div>
      <div className="tech-dots" style={{ width: "30%", height: "30%", bottom: "10%", left: "5%" }}></div>
      <div className="tech-line" style={{ top: "30%" }}></div>
      <div className="tech-line" style={{ bottom: "20%" }}></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="w-16 h-1 bg-primary rounded-full mb-4"></div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl tech-heading">
            Технический <span className="text-gradient">Процесс</span>
          </h2>
          <p className="max-w-[700px] text-foreground/80 md:text-xl">
            Структурированный подход к реализации ваших технических задач
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="tech-process">
              {steps.map((step, index) => (
                <div key={index} className={`tech-process-step ${activeStep === index ? "animate-pulse-soft" : ""}`}>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    {activeStep >= index ? (
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border border-primary mr-2"></div>
                    )}
                    {step.title}
                  </h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="terminal-card">
              <div className="terminal-content">
                <span className="terminal-line">Инициализация процесса...</span>
                <span className="terminal-line output">Процесс инициализирован успешно</span>
                {activeStep >= 0 && (
                  <>
                    <span className="terminal-line">Запуск этапа: Консультация</span>
                    <span className="terminal-line output">Сбор требований...</span>
                    <span className="terminal-line output">Анализ задачи...</span>
                    <span className="terminal-line output">Консультация завершена успешно</span>
                  </>
                )}
                {activeStep >= 1 && (
                  <>
                    <span className="terminal-line">Запуск этапа: Планирование</span>
                    <span className="terminal-line output">Создание плана работ...</span>
                    <span className="terminal-line output">Согласование сроков...</span>
                    <span className="terminal-line output">Планирование завершено успешно</span>
                  </>
                )}
                {activeStep >= 2 && (
                  <>
                    <span className="terminal-line">Запуск этапа: Разработка</span>
                    <span className="terminal-line output">Техническая реализация...</span>
                    <span className="terminal-line output">Разработка завершена успешно</span>
                  </>
                )}
                {activeStep >= 3 && (
                  <>
                    <span className="terminal-line">Запуск этапа: Тестирование</span>
                    <span className="terminal-line output">Проверка функциональности...</span>
                    <span className="terminal-line output">Исправление ошибок...</span>
                    <span className="terminal-line output">Тестирование завершено успешно</span>
                  </>
                )}
                {activeStep >= 4 && (
                  <>
                    <span className="terminal-line">Запуск этапа: Запуск</span>
                    <span className="terminal-line output">Финальная подготовка...</span>
                    <span className="terminal-line output">Передача проекта клиенту...</span>
                    <span className="terminal-line output">Запуск завершен успешно</span>
                    <span className="terminal-line">Процесс выполнен на 100%</span>
                  </>
                )}
                <span className="terminal-line">
                  {activeStep < 4 ? `Выполнение этапа: ${steps[activeStep].title}` : "Все этапы завершены"}
                  <span className="terminal-cursor"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="tech-metrics">
            <div className="tech-metric">
              <div className="tech-metric-value" data-value="100">
                100%
              </div>
              <div className="tech-metric-label">Удовлетворенность клиентов</div>
            </div>
            <div className="tech-metric">
              <div className="tech-metric-value" data-value="50">
                50+
              </div>
              <div className="tech-metric-label">Успешных проектов</div>
            </div>
            <div className="tech-metric">
              <div className="tech-metric-value" data-value="24">
                24/7
              </div>
              <div className="tech-metric-label">Техническая поддержка</div>
            </div>
            <div className="tech-metric">
              <div className="tech-metric-value" data-value="3">
                3 дня
              </div>
              <div className="tech-metric-label">Средний срок выполнения</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

