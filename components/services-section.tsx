"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe, MessageSquare, BarChart3, Layout, Instagram, ChevronRight, Clock } from "lucide-react"
import ServiceDetails from "@/components/service-details"

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Устанавливаем флаг монтирования для предотвращения проблем с гидратацией
    setIsMounted(true)
    
    // Инициализация массива видимости карточек
    setVisibleCards(new Array(5).fill(false))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const cards = document.querySelectorAll(".service-card")
    cards.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  const services = [
    {
      id: "domain",
      title: "Покупка и интеграция домена",
      description: "Безупречное приобретение домена и интеграция с нужными вам сервисами",
      icon: <Globe className="h-12 w-12 text-primary service-icon" />,
      details: [
        "Консультация по выбору доменного имени",
        "Сопровождение процесса покупки",
        "Настройка DNS и конфигурация",
        "Интеграция с почтовыми сервисами",
        "Установка SSL-сертификата",
        "Интеграция с хостинг-платформами",
      ],
    },
    {
      id: "telegram-bot",
      title: "Разработка чат-ботов Telegram",
      description: "Индивидуальные чат-боты для Telegram для взаимодействия с вашей аудиторией",
      icon: <MessageSquare className="h-12 w-12 text-primary service-icon" />,
      details: [
        "Создание и настройка бота Telegram",
        "Внедрение автоматических воронок",
        "Проверка подписки на канал",
        "Автоматическая выдача материалов",
        "Настройка интерактивных кнопок",
        "Система дожимов и автоматических напоминаний",
      ],
    },
    {
      id: "instagram-bot",
      title: "Разработка чат-ботов Instagram",
      description: "Автоматизированные решения для взаимодействия с аудиторией в Instagram",
      icon: <Instagram className="h-12 w-12 text-primary service-icon" />,
      details: [
        "Отправка сообщений в директ по кодовому слову",
        "Реакция бота на определённые слова под постами",
        "Проверка подписки на страницу Instagram",
        "Выдача материалов в Telegram",
        "Настройка интерактивных кнопок",
        "Интеграция с CRM-системами",
      ],
    },
    {
      id: "getcourse",
      title: "Техническая настройка GetCourse",
      description: "Комплексная настройка платформы GetCourse для эффективного проведения курсов",
      icon: <BarChart3 className="h-12 w-12 text-primary service-icon" />,
      details: [
        "Подключение домена и корпоративной почты",
        "Создание уроков и их наполнение",
        "Настройка частичной оплаты и скидок",
        "Рассылка по сегментам",
        "Уроки с заданиями и тестированием",
        "Автоматическая выдача дипломов",
        "Настройка виджетов",
      ],
    },
    {
      id: "tilda",
      title: "Настройка лендинга на Tilda",
      description: "Профессиональные лендинги на Tilda для конвертации посетителей в клиентов",
      icon: <Layout className="h-12 w-12 text-primary service-icon" />,
      details: [
        "Индивидуальный дизайн лендинга в Tilda",
        "Подключение домена",
        "Интеграция платежных кнопок",
        "Настройка форм регистрации",
        "Интеграция платежных систем",
        "Подключение аналитики",
        "Оптимизация для мобильных устройств",
      ],
    },
  ]

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId)

    // Плавная прокрутка к деталям услуги
    setTimeout(() => {
      const detailsElement = document.getElementById("service-details")
      if (detailsElement) {
        detailsElement.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-secondary/50 dark:bg-secondary/10 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 fade-up visible">
          <div className="w-16 h-1 bg-primary rounded-full mb-4"></div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl heading-modern">
            Технические <span className="text-gradient">Услуги</span>
          </h2>
          <p className="max-w-[700px] text-foreground/80 md:text-xl subheading-modern">
            Профессиональные решения для развития вашего бизнеса в цифровой среде
          </p>
        </div>

        {/* Блок специалиста - всегда отображается без условий */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16 specialist-block">
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary/50 shadow-glow relative">
            <img 
              src="https://i.ibb.co/Y576NZf/photo-2025-03-10-03-13-00.jpg" 
              alt="Специалист" 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 border-2 border-primary/10 rounded-full shadow-glow animate-pulse-slow"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
              <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border border-primary/50 animate-spin" style={{ animationDuration: '10s' }}></div>
            </div>
          </div>
          
          <div className="md:text-left text-center max-w-md">
            <h3 className="text-2xl font-bold tech-heading mb-2">Ольга</h3>
            <p className="text-primary font-medium mb-3">Технический специалист</p>
            <div className="flex flex-wrap gap-2 mb-4 md:justify-start justify-center">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Онлайн</span>
              <span className="px-3 py-1 bg-secondary/80 text-secondary-foreground text-sm rounded-full">5+ лет опыта</span>
              <span className="px-3 py-1 bg-accent/80 text-accent-foreground text-sm rounded-full">200+ проектов</span>
            </div>
            <p className="text-foreground/70">
              Я специализируюсь на создании надежных технических решений, которые помогут вашему бизнесу расти и развиваться. 
              Моя цель — сделать технологии доступными и эффективными для вас.
            </p>
            <Button 
              variant="outline" 
              className="mt-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Связаться со мной
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isMounted && services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`modern-card reveal stagger-${(index % 4) + 1} transition-all duration-300 cursor-pointer service-card`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="relative p-6">
                <div className="tech-dots" style={{ width: "100%", height: "100%", top: "0", left: "0" }}></div>
                <div className="tech-line" style={{ top: "0" }}></div>
                <div className="tech-line" style={{ bottom: "0" }}></div>

                <div className="flex flex-col items-center text-center">
                  <div className="tech-icon-container mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-foreground/70 text-sm mb-6">{service.description}</p>

                  <div className="flex flex-wrap mt-3 mb-4">
                    <span className="tech-badge">
                      <span className="tech-badge-icon">{service.icon}</span>
                      Техническое решение
                    </span>
                    <span className="tech-badge">
                      <Clock className="h-3 w-3 tech-badge-icon" />
                      {service.id === "domain"
                        ? "1-2 дня"
                        : service.id === "telegram-bot" || service.id === "instagram-bot"
                          ? "3-5 дней"
                          : "5-7 дней"}
                    </span>
                  </div>

                  <ul className="space-y-3 text-left w-full mb-6">
                    {service.details.slice(0, 3).map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-foreground/80 text-sm">{detail}</span>
                      </li>
                    ))}
                    {service.details.length > 3 && (
                      <li className="flex items-center justify-center mt-2 text-primary text-sm">
                        <span>И еще {service.details.length - 3} функций</span>
                      </li>
                    )}
                  </ul>

                  <Button
                    variant="outline"
                    className="rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
                  >
                    Подробнее
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isMounted && selectedService && (
          <div id="service-details" className="mt-20 pt-10 border-t border-primary/10">
            <ServiceDetails serviceId={selectedService} />
          </div>
        )}
      </div>
    </section>
  )
}

