"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export default function TechFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "Какие сроки выполнения технических задач?",
      answer:
        "Сроки выполнения зависят от сложности задачи. Обычно настройка домена занимает 1-2 дня, разработка чат-бота - 3-5 дней, настройка GetCourse или лендинга на Tilda - 5-7 дней. Точные сроки обсуждаются индивидуально после анализа требований проекта.",
    },
    {
      question: "Какие платежные системы вы поддерживаете?",
      answer:
        "Я работаю со всеми популярными платежными системами, включая банковские карты, ЮMoney, WebMoney, PayPal и другие. При настройке GetCourse или лендинга на Tilda могу интегрировать любую платежную систему по вашему выбору.",
    },
    {
      question: "Предоставляете ли вы техническую поддержку после завершения проекта?",
      answer:
        "Да, я предоставляю техническую поддержку в течение 30 дней после завершения проекта бесплатно. После этого периода поддержка осуществляется на основе отдельного соглашения или почасовой оплаты.",
    },
    {
      question: "Можно ли интегрировать чат-бот с CRM-системой?",
      answer:
        "Да, чат-боты для Telegram и Instagram могут быть интегрированы с популярными CRM-системами, такими как AmoCRM, Bitrix24, GetCourse и другими. Это позволяет автоматизировать сбор лидов и улучшить взаимодействие с клиентами.",
    },
    {
      question: "Какие функции можно реализовать в чат-боте?",
      answer:
        "В чат-боте можно реализовать множество функций, включая автоматические ответы на вопросы, сбор контактных данных, проверку подписки на канал, выдачу материалов, прием оплаты, интеграцию с внешними сервисами, рассылку уведомлений и многое другое.",
    },
  ]

  return (
    <section className="py-20 bg-secondary/50 dark:bg-secondary/10 relative overflow-hidden">
      <div className="tech-grid"></div>
      <div className="tech-dots" style={{ width: "40%", height: "40%", top: "10%", left: "5%" }}></div>
      <div className="tech-dots" style={{ width: "30%", height: "30%", bottom: "10%", right: "5%" }}></div>
      <div className="tech-line" style={{ top: "30%" }}></div>
      <div className="tech-line" style={{ bottom: "20%" }}></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="w-16 h-1 bg-primary rounded-full mb-4"></div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl tech-heading">
            Технические <span className="text-gradient">FAQ</span>
          </h2>
          <p className="max-w-[700px] text-foreground/80 md:text-xl">
            Ответы на часто задаваемые вопросы о технических услугах
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="tech-accordion">
              <div
                className={`tech-accordion-header ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-primary mr-3" />
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                </div>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </div>
              <div className={`tech-accordion-content ${activeIndex === index ? "active" : ""}`}>
                <p className="text-foreground/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-6">Не нашли ответ на свой вопрос?</p>
          <a href="#contact" className="glitch-button" data-text="Задать вопрос">
            Задать вопрос
          </a>
        </div>
      </div>
    </section>
  )
}

