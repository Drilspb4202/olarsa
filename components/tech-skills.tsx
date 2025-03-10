"use client"

import { useEffect, useRef } from "react"
import { Code, Database, Server, Globe, MessageSquare, BarChart3, Layout } from "lucide-react"

export default function TechSkills() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const bars = document.querySelectorAll(".tech-diagram-bar")
          bars.forEach((bar) => {
            const height = bar.getAttribute("data-height")
            if (height) {
              ;(bar as HTMLElement).style.height = height
            }
          })
        }
      },
      { threshold: 0.1 },
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  const skills = [
    { name: "Telegram Боты", level: 95, icon: <MessageSquare className="h-6 w-6" /> },
    { name: "GetCourse", level: 90, icon: <Database className="h-6 w-6" /> },
    { name: "Tilda", level: 85, icon: <Layout className="h-6 w-6" /> },
    { name: "Домены", level: 98, icon: <Globe className="h-6 w-6" /> },
    { name: "Instagram Боты", level: 88, icon: <MessageSquare className="h-6 w-6" /> },
    { name: "Аналитика", level: 80, icon: <BarChart3 className="h-6 w-6" /> },
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="tech-grid"></div>
      <div className="tech-dots" style={{ width: "40%", height: "40%", top: "10%", right: "5%" }}></div>
      <div className="tech-dots" style={{ width: "30%", height: "30%", bottom: "10%", left: "5%" }}></div>
      <div className="tech-line" style={{ top: "30%" }}></div>
      <div className="tech-line" style={{ bottom: "20%" }}></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="w-16 h-1 bg-primary rounded-full mb-4"></div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl tech-heading">
            Технические <span className="text-gradient">компетенции</span>
          </h2>
          <p className="max-w-[700px] text-foreground/80 md:text-xl">
            Профессиональные компетенции для решения ваших технических задач
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="tech-diagram" style={{ height: "300px" }}>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="tech-diagram-bar"
                  style={{
                    left: `${index * (100 / skills.length)}%`,
                    width: `${80 / skills.length}%`,
                    height: "0%",
                  }}
                  data-height={`${skill.level}%`}
                >
                  <div className="tech-diagram-value">{skill.level}%</div>
                  <div className="tech-diagram-label">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="tech-icon-container mr-4">{skill.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="tech-progress">
                    <div className="tech-progress-bar" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="tech-card-3d p-6 bg-background/50 backdrop-blur-sm border border-primary/10 rounded-lg">
            <div className="tech-animated-icon mx-auto mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Разработка</h3>
            <p className="text-foreground/70 text-center">
              Профессиональная разработка чат-ботов и технических решений для вашего бизнеса
            </p>
          </div>
          <div className="tech-card-3d p-6 bg-background/50 backdrop-blur-sm border border-primary/10 rounded-lg">
            <div className="tech-animated-icon mx-auto mb-4">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Интеграция</h3>
            <p className="text-foreground/70 text-center">
              Интеграция различных сервисов и платформ для создания единой экосистемы
            </p>
          </div>
          <div className="tech-card-3d p-6 bg-background/50 backdrop-blur-sm border border-primary/10 rounded-lg">
            <div className="tech-animated-icon mx-auto mb-4">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Автоматизация</h3>
            <p className="text-foreground/70 text-center">
              Автоматизация бизнес-процессов для повышения эффективности и снижения затрат
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

