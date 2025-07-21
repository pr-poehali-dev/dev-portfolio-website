import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const skills = [
    { name: "React", level: "Эксперт", icon: "Code" },
    { name: "TypeScript", level: "Эксперт", icon: "FileCode" },
    { name: "Node.js", level: "Продвинутый", icon: "Server" },
    { name: "Next.js", level: "Продвинутый", icon: "Globe" },
    { name: "PostgreSQL", level: "Средний", icon: "Database" },
    { name: "Docker", level: "Средний", icon: "Container" }
  ];

  const projects = [
    {
      title: "E-commerce платформа",
      description: "Полнофункциональный интернет-магазин с корзиной, платежами и админ-панелью",
      tech: ["React", "Node.js", "PostgreSQL"],
      demo: "Демо",
      code: "GitHub"
    },
    {
      title: "Task Management App",
      description: "Приложение для управления проектами с командной работой в реальном времени",
      tech: ["Next.js", "TypeScript", "Prisma"],
      demo: "Демо",
      code: "GitHub"
    },
    {
      title: "Analytics Dashboard",
      description: "Дашборд с интерактивными графиками и визуализацией данных",
      tech: ["React", "D3.js", "Express"],
      demo: "Демо",
      code: "GitHub"
    }
  ];

  const services = [
    {
      title: "Frontend разработка",
      description: "Современные React приложения с TypeScript и адаптивным дизайном",
      icon: "Monitor"
    },
    {
      title: "Backend разработка", 
      description: "API, базы данных и серверная логика на Node.js",
      icon: "Server"
    },
    {
      title: "Full-stack решения",
      description: "Комплексная разработка от дизайна до деплоя",
      icon: "Code"
    },
    {
      title: "Консультации",
      description: "Аудит кода, архитектурные решения и оптимизация",
      icon: "MessageSquare"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Алексей Петров</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Связаться</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Web Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body">
              Создаю современные веб-приложения с фокусом на производительность и пользовательский опыт
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Mail" className="mr-2" size={20} />
                Обсудить проект
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Обо мне</h2>
            <p className="text-lg text-muted-foreground mb-12 font-body leading-relaxed">
              Веб-разработчик с 5+ летним опытом создания современных приложений. 
              Специализируюсь на React экосистеме и full-stack разработке. 
              Увлечен новыми технологиями и постоянно изучаю передовые подходы в разработке.
            </p>
            
            {/* Skills */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <Icon name={skill.icon as any} size={32} className="text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{skill.name}</h3>
                    <Badge variant="secondary">{skill.level}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Портфолио</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="font-body">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="flex-1 group relative overflow-hidden"
                        onClick={() => {
                          // Интерактивное демо - показываем код
                          alert(`// ${project.title} Demo\nconst app = {\n  framework: '${project.tech[0]}',\n  features: ['responsive', 'modern UI'],\n  status: 'running'\n};`);
                        }}
                      >
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        {project.demo}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-primary/5 transition-colors"
                        onClick={() => {
                          // Показываем структуру проекта
                          alert(`// ${project.title} Structure\n├── src/\n│   ├── components/\n│   ├── pages/\n│   └── utils/\n├── public/\n└── package.json\n\nTech Stack: ${project.tech.join(', ')}`);
                        }}
                      >
                        <Icon name="Github" size={16} className="mr-2" />
                        {project.code}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Услуги</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name={service.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground font-body">{service.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Свяжитесь со мной</h2>
            <p className="text-lg text-muted-foreground mb-12 font-body">
              Готов обсудить ваш проект и найти лучшее решение для ваших задач
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <Icon name="Mail" size={32} className="text-primary mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">alex@example.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="Phone" size={32} className="text-primary mb-3" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="MapPin" size={32} className="text-primary mb-3" />
                <h3 className="font-semibold mb-2">Локация</h3>
                <p className="text-muted-foreground">Москва, Россия</p>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <Button size="lg" className="px-8">
                <Icon name="Mail" className="mr-2" size={20} />
                Написать письмо
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Github" className="mr-2" size={20} />
                GitHub
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Linkedin" className="mr-2" size={20} />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Алексей Петров. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;