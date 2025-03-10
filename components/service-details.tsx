"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Zap,
  Bell,
  FileText,
  Users,
  Mail,
  Award,
  PieChart,
  MessageSquare,
  MessageCircle,
  UserCheck,
  FileDown,
  MousePointer,
  CreditCard,
  BarChart,
  TestTube,
  Globe,
  Lock,
  Server,
  AtSign,
  Smartphone,
  ArrowRight,
  Layout,
} from "lucide-react"

interface ServiceDetailsProps {
  serviceId: string
}

export default function ServiceDetails({ serviceId }: ServiceDetailsProps) {
  const [activeTab, setActiveTab] = useState<string>("overview")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Добавляем небольшую задержку для анимации
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [serviceId])

  const serviceDetails = {
    domain: {
      title: "Покупка и интеграция домена",
      description: "Полный комплекс услуг по выбору, приобретению и настройке доменного имени для вашего проекта.",
      tabs: {
        overview: {
          title: "Обзор",
          content: (
            <div className="space-y-6">
              <p className="text-foreground/80">
                Доменное имя — это ваш уникальный адрес в интернете. Правильно подобранный и настроенный домен является
                важной частью вашего онлайн-присутствия и бренда.
              </p>
              <p className="text-foreground/80">
                Я предлагаю полный комплекс услуг по выбору, приобретению и настройке доменного имени, включая
                интеграцию с различными сервисами и платформами.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="function-item">
                  <Globe className="h-5 w-5 function-icon" />
                  <span className="function-text">Подбор оптимального доменного имени</span>
                </div>
                <div className="function-item">
                  <CreditCard className="h-5 w-5 function-icon" />
                  <span className="function-text">Сопровождение процесса покупки</span>
                </div>
                <div className="function-item">
                  <Server className="h-5 w-5 function-icon" />
                  <span className="function-text">Настройка DNS-записей</span>
                </div>
                <div className="function-item">
                  <Lock className="h-5 w-5 function-icon" />
                  <span className="function-text">Установка SSL-сертификата</span>
                </div>
              </div>
            </div>
          ),
        },
        features: {
          title: "Возможности",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-primary" />
                    Консультация по выбору домена
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Помогу выбрать доменное имя, которое будет соответствовать вашему бренду, легко запоминаться и
                    положительно влиять на SEO.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Server className="h-5 w-5 mr-2 text-primary" />
                    Настройка DNS и конфигурация
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Профессиональная настройка DNS-записей для корректной работы вашего сайта, почты и других сервисов.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <AtSign className="h-5 w-5 mr-2 text-primary" />
                    Интеграция с почтовыми сервисами
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Настройка корпоративной почты на вашем домене для профессионального общения с клиентами и
                    партнерами.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-primary" />
                    Установка SSL-сертификата
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Обеспечение безопасного соединения с вашим сайтом через HTTPS, что повышает доверие пользователей и
                    улучшает позиции в поисковых системах.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
        benefits: {
          title: "Преимущества",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Профессиональный подход</h4>
                  <p className="text-foreground/70 text-sm">
                    Все настройки выполняются с учетом лучших практик и требований безопасности.
                  </p>
                </div>
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Экономия времени</h4>
                  <p className="text-foreground/70 text-sm">
                    Не тратьте время на изучение технических нюансов — доверьте это профессионалу.
                  </p>
                </div>
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <Bell className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Долгосрочная поддержка</h4>
                  <p className="text-foreground/70 text-sm">
                    Помощь с продлением домена и обновлением настроек при необходимости.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
      },
    },
    "telegram-bot": {
      title: "Разработка чат-ботов Telegram",
      description: "Автоматизируйте взаимодействие с вашей аудиторией с помощью функциональных чат-ботов для Telegram.",
      tabs: {
        overview: {
          title: "Обзор",
          content: (
            <div className="space-y-6">
              <p className="text-foreground/80">
                Чат-боты для Telegram — это мощный инструмент для автоматизации взаимодействия с вашей аудиторией, сбора
                лидов и продаж. Они работают 24/7, обеспечивая мгновенную реакцию на запросы пользователей.
              </p>
              <p className="text-foreground/80">
                Я создаю функциональных ботов, которые помогут вам автоматизировать рутинные задачи, увеличить конверсию
                и улучшить пользовательский опыт.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="function-item">
                  <Zap className="h-5 w-5 function-icon" />
                  <span className="function-text">Создание автоматических воронок</span>
                </div>
                <div className="function-item">
                  <UserCheck className="h-5 w-5 function-icon" />
                  <span className="function-text">Проверка подписки на канал</span>
                </div>
                <div className="function-item">
                  <FileDown className="h-5 w-5 function-icon" />
                  <span className="function-text">Автоматическая выдача материалов</span>
                </div>
                <div className="function-item">
                  <MousePointer className="h-5 w-5 function-icon" />
                  <span className="function-text">Интерактивные кнопки и меню</span>
                </div>
              </div>
            </div>
          ),
        },
        features: {
          title: "Возможности",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Создание воронки продаж
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Разработка автоматической воронки продаж с этапами знакомства, вовлечения, продажи и удержания
                    клиентов.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <UserCheck className="h-5 w-5 mr-2 text-primary" />
                    Проверка подписки на канал
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Автоматическая проверка подписки пользователя на ваш канал перед предоставлением доступа к контенту
                    или функциям.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <FileDown className="h-5 w-5 mr-2 text-primary" />
                    Выдача материалов
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Автоматическая выдача файлов, ссылок, инструкций и других материалов по запросу пользователя или по
                    расписанию.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <MousePointer className="h-5 w-5 mr-2 text-primary" />
                    Интерактивные кнопки
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Создание удобного интерфейса с кнопками, инлайн-клавиатурами и меню для простой навигации и
                    взаимодействия.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-primary" />
                    Система дожимов и напоминаний
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Автоматические напоминания и дожимы для пользователей, которые не завершили целевое действие или
                    покупку.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                    Интеграция платежных систем
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Подключение платежных систем для приема оплаты прямо в боте, с автоматической выдачей доступа после
                    оплаты.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
        benefits: {
          title: "Преимущества",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Автоматизация 24/7</h4>
                  <p className="text-foreground/70 text-sm">
                    Бот работает круглосуточно, обеспечивая мгновенную реакцию на запросы пользователей.
                  </p>
                </div>
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Увеличение конверсии</h4>
                  <p className="text-foreground/70 text-sm">
                    Автоматические воронки и дожимы значительно повышают конверсию в продажи.
                  </p>
                </div>
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Аналитика и статистика</h4>
                  <p className="text-foreground/70 text-sm">
                    Сбор и анализ данных о взаимодействии пользователей с ботом для оптимизации процессов.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
      },
    },
    "instagram-bot": {
      title: "Разработка чат-ботов Instagram",
      description: "Автоматизируйте взаимодействие с аудиторией в Instagram с помощью интеллектуальных ботов.",
      tabs: {
        overview: {
          title: "Обзор",
          content: (
            <div className="space-y-6">
              <p className="text-foreground/80">
                Автоматизация взаимодействия в Instagram позволяет значительно увеличить эффективность вашего
                присутствия в этой социальной сети, экономя время и ресурсы.
              </p>
              <p className="text-foreground/80">
                Я создаю интеллектуальных ботов для Instagram, которые помогут вам автоматизировать общение с
                подписчиками, собирать лиды и увеличивать конверсию.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="function-item">
                  <MessageCircle className="h-5 w-5 function-icon" />
                  <span className="function-text">Отправка сообщений по кодовому слову</span>
                </div>
                <div className="function-item">
                  <MessageSquare className="h-5 w-5 function-icon" />
                  <span className="function-text">Реакция на комментарии под постами</span>
                </div>
                <div className="function-item">
                  <UserCheck className="h-5 w-5 function-icon" />
                  <span className="function-text">Проверка подписки на страницу</span>
                </div>
                <div className="function-item">
                  <FileDown className="h-5 w-5 function-icon" />
                  <span className="function-text">Выдача материалов в Telegram</span>
                </div>
              </div>
            </div>
          ),
        },
        features: {
          title: "Возможности",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                    Отправка сообщений в директ
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Автоматическая отправка сообщений в директ Instagram по кодовому слову или другому триггеру.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                    Реакция на комментарии
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Настройка автоматической реакции бота на определенные слова или фразы в комментариях под вашими
                    постами.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <UserCheck className="h-5 w-5 mr-2 text-primary" />
                    Проверка подписки
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Автоматическая проверка подписки пользователя на вашу страницу Instagram перед предоставлением
                    доступа к контенту.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <FileDown className="h-5 w-5 mr-2 text-primary" />
                    Выдача материалов в Telegram
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Интеграция с Telegram для автоматической выдачи материалов пользователям после выполнения
                    определенных действий в Instagram.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <MousePointer className="h-5 w-5 mr-2 text-primary" />
                    Интерактивные кнопки
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Создание интерактивных элементов для взаимодействия с пользователями в сообщениях Instagram.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Сбор данных о пользователях
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Автоматический сбор и структурирование данных о пользователях для дальнейшего использования в
                    маркетинговых кампаниях.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
        benefits: {
          title: "Преимущества",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Экономия времени</h4>
                  <p className="text-foreground/70 text-sm">
                    Автоматизация рутинных задач позволяет сосредоточиться на создании качественного контента.
                  </p>
                </div>
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Увеличение вовлеченности</h4>
                  <p className="text-foreground/70 text-sm">
                    Мгновенная реакция на действия пользователей повышает их вовлеченность и лояльность.
                  </p>
                </div>
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Рост конверсии</h4>
                  <p className="text-foreground/70 text-sm">
                    Автоматизированные воронки и персонализированные сообщения значительно повышают конверсию.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
      },
    },
    getcourse: {
      title: "Техническая настройка GetCourse",
      description:
        "Полная настройка платформы GetCourse для эффективного проведения онлайн-курсов и автоматизации бизнес-процессов.",
      tabs: {
        overview: {
          title: "Обзор",
          content: (
            <div className="space-y-6">
              <p className="text-foreground/80">
                GetCourse — это мощная платформа для создания и продажи онлайн-курсов. Правильная настройка GetCourse
                позволяет автоматизировать большинство процессов и сосредоточиться на создании качественного контента.
              </p>
              <p className="text-foreground/80">
                Я предлагаю полную техническую настройку GetCourse, включая создание структуры курсов, настройку
                автоматизаций, интеграцию платежных систем и многое другое включая создание структуры курсов, настройку
                автоматизаций, интеграцию платежных систем и многое другое.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="function-item">
                  <Globe className="h-5 w-5 function-icon" />
                  <span className="function-text">Подключение домена и корпоративной почты</span>
                </div>
                <div className="function-item">
                  <FileText className="h-5 w-5 function-icon" />
                  <span className="function-text">Создание уроков и их наполнение</span>
                </div>
                <div className="function-item">
                  <CreditCard className="h-5 w-5 function-icon" />
                  <span className="function-text">Настройка частичной оплаты и скидок</span>
                </div>
                <div className="function-item">
                  <Mail className="h-5 w-5 function-icon" />
                  <span className="function-text">Рассылка по сегментам</span>
                </div>
              </div>
            </div>
          ),
        },
        features: {
          title: "Возможности",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-primary" />
                    Подключение домена и почты
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Настройка вашего домена для работы с GetCourse и создание корпоративной почты для профессионального
                    общения с клиентами.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Создание уроков и наполнение
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Создание структуры курса, уроков и их наполнение контентом (видео, текст, файлы) с оптимальной
                    организацией материалов.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                    Частичная оплата и скидки
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Настройка возможности частичной оплаты курсов, создание системы скидок и промокодов для увеличения
                    продаж.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    Рассылка по сегментам
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Настройка автоматических email-рассылок по различным сегментам аудитории для повышения эффективности
                    коммуникации.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Уроки с заданиями
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Создание интерактивных уроков с заданиями, проверкой и обратной связью для повышения вовлеченности
                    учеников.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <TestTube className="h-5 w-5 mr-2 text-primary" />
                    Уроки с тестированием
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Разработка тестов для проверки знаний учеников с автоматической оценкой результатов и выдачей
                    сертификатов.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Автоматическая выдача дипломов
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Настройка автоматической выдачи дипломов и сертификатов после успешного прохождения курса или
                    тестирования.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-primary" />
                    Настройка виджетов
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Добавление и настройка различных виджетов для улучшения пользовательского опыта и функциональности
                    вашего курса.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
        benefits: {
          title: "Преимущества",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Автоматизация процессов</h4>
                  <p className="text-foreground/70 text-sm">
                    Освободите время от рутинных задач благодаря автоматизации большинства процессов.
                  </p>
                </div>
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Улучшение обучения</h4>
                  <p className="text-foreground/70 text-sm">
                    Интерактивные элементы и структурированные материалы повышают эффективность обучения.
                  </p>
                </div>
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Увеличение продаж</h4>
                  <p className="text-foreground/70 text-sm">
                    Гибкие варианты оплаты, скидки и автоматические рассылки значительно повышают конверсию.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
      },
    },
    tilda: {
      title: "Настройка лендинга на Tilda",
      description: "Создание эффективных лендингов на платформе Tilda для привлечения клиентов и увеличения конверсии.",
      tabs: {
        overview: {
          title: "Обзор",
          content: (
            <div className="space-y-6">
              <p className="text-foreground/80">
                Tilda — это популярная платформа для создания современных и эффективных лендингов без необходимости
                знания программирования. Правильно настроенный лендинг на Tilda может значительно повысить конверсию и
                привлечь новых клиентов.
              </p>
              <p className="text-foreground/80">
                Я предлагаю полную настройку лендинга на Tilda, включая дизайн, подключение домена, интеграцию платежных
                систем и аналитики.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="function-item">
                  <Layout className="h-5 w-5 function-icon" />
                  <span className="function-text">Индивидуальный дизайн лендинга</span>
                </div>
                <div className="function-item">
                  <Globe className="h-5 w-5 function-icon" />
                  <span className="function-text">Подключение домена</span>
                </div>
                <div className="function-item">
                  <CreditCard className="h-5 w-5 function-icon" />
                  <span className="function-text">Интеграция платежных кнопок</span>
                </div>
                <div className="function-item">
                  <Users className="h-5 w-5 function-icon" />
                  <span className="function-text">Настройка форм регистрации</span>
                </div>
              </div>
            </div>
          ),
        },
        features: {
          title: "Возможности",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Layout className="h-5 w-5 mr-2 text-primary" />
                    Индивидуальный дизайн
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Создание уникального дизайна лендинга, соответствующего вашему бренду и целевой аудитории.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-primary" />
                    Подключение домена
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Настройка вашего домена для работы с лендингом на Tilda для профессионального представления вашего
                    бренда.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                    Интеграция платежных кнопок
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Подключение различных платежных систем и настройка кнопок оплаты для удобства ваших клиентов.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Настройка форм регистрации
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Создание и настройка форм для сбора контактных данных посетителей и регистрации на мероприятия.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-primary" />
                    Подключение аналитики
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Интеграция систем аналитики для отслеживания поведения посетителей и эффективности лендинга.
                  </p>
                </div>
                <div className="service-detail-card p-6 glassmorphism">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Smartphone className="h-5 w-5 mr-2 text-primary" />
                    Оптимизация для мобильных устройств
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Адаптация лендинга для корректного отображения на всех типах устройств, включая смартфоны и
                    планшеты.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
        benefits: {
          title: "Преимущества",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Быстрый запуск</h4>
                  <p className="text-foreground/70 text-sm">
                    Создание и запуск профессионального лендинга в кратчайшие сроки.
                  </p>
                </div>
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Высокая конверсия</h4>
                  <p className="text-foreground/70 text-sm">
                    Оптимизированная структура и дизайн лендинга для максимальной конверсии посетителей в клиентов.
                  </p>
                </div>
                <div className="service-detail-card p-6 flex flex-col items-center text-center neomorphic">
                  <div className="icon-modern mb-4">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Аналитика и улучшения</h4>
                  <p className="text-foreground/70 text-sm">
                    Возможность отслеживать эффективность лендинга и вносить улучшения на основе данных.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
      },
    },
  }

  const currentService = serviceDetails[serviceId]

  if (!currentService) {
    return null
  }

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="mb-10 text-center">
        <h3 className="text-3xl font-bold mb-4 heading-modern">{currentService.title}</h3>
        <p className="text-foreground/70 max-w-3xl mx-auto subheading-modern">{currentService.description}</p>
      </div>

      <div className="tech-tabs mb-8">
        {Object.entries(currentService.tabs).map(([key, tab]) => (
          <button
            key={key}
            className={`tech-tab ${activeTab === key ? "active" : ""}`}
            onClick={() => setActiveTab(key)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">{currentService.tabs[activeTab]?.content}</div>

      <div className="mt-12 flex justify-center">
        <Button asChild size="lg" className="rounded-full btn-modern">
          <a href="#contact">
            Заказать услугу <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}

