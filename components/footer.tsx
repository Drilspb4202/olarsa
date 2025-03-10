import { Github, Linkedin, Twitter, Instagram, Heart, Code, Cpu, Server } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 dark:bg-secondary/10 border-t border-border relative">
      <div className="tech-grid"></div>
      <div className="tech-dots" style={{ width: "50%", height: "50%", top: "0", right: "0" }}></div>
      <div className="tech-dots" style={{ width: "30%", height: "30%", bottom: "0", left: "0" }}></div>
      <div className="tech-line" style={{ top: "0" }}></div>
      <div className="tech-line" style={{ bottom: "30%" }}></div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="text-xl font-bold flex items-center">
              <div className="tech-icon-container w-8 h-8 mr-2">
                <Code className="h-4 w-4 tech-icon" />
              </div>
              <span className="tech-heading">Ольга</span>
              <span className="text-foreground">.tech</span>
            </a>
            <p className="mt-4 text-foreground/70">
              Профессиональные технические услуги для улучшения вашего онлайн-присутствия и оптимизации
              бизнес-процессов.
            </p>
            <div className="mt-6">
              <p className="text-foreground/60 text-sm">
                Специализируюсь на разработке чат-ботов, настройке GetCourse и создании лендингов на Tilda.
              </p>
            </div>

            <div className="flex space-x-4 mt-6">
              <div className="tech-icon-container w-10 h-10">
                <Cpu className="h-4 w-4 tech-icon" />
              </div>
              <div className="tech-icon-container w-10 h-10">
                <Server className="h-4 w-4 tech-icon" />
              </div>
              <div className="tech-icon-container w-10 h-10">
                <Code className="h-4 w-4 tech-icon" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 tech-subheading">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors flex items-center">
                  <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/70 hover:text-primary transition-colors flex items-center"
                >
                  <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/70 hover:text-primary transition-colors flex items-center"
                >
                  <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 tech-subheading">Связаться</h3>
            <div className="flex space-x-4">
              <a href="#" className="tech-icon-container w-10 h-10 flex items-center justify-center">
                <Instagram className="h-4 w-4 tech-icon" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="tech-icon-container w-10 h-10 flex items-center justify-center">
                <Twitter className="h-4 w-4 tech-icon" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="tech-icon-container w-10 h-10 flex items-center justify-center">
                <Linkedin className="h-4 w-4 tech-icon" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="tech-icon-container w-10 h-10 flex items-center justify-center">
                <Github className="h-4 w-4 tech-icon" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
            <div className="mt-6">
              <p className="text-foreground/60 text-sm">
                Email: olya@example.com
                <br />
                Телефон: +7 (999) 123-4567
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-foreground/60 text-sm">© {currentYear} Ольга.tech. Все права защищены.</p>
          <div className="flex justify-center items-center mt-4 text-sm text-foreground/60">
            <p>Сделано с</p>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <p>в России</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

