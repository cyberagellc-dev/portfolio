import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">DevPortfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button asChild variant="outline" size="sm" className="ml-auto hidden md:flex bg-transparent">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
            <nav className="flex items-center">
              <Link href="https://github.com/cyberagellc-dev" target="_blank" rel="noreferrer">
                <div className="w-9 px-0 flex items-center justify-center">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/william-averill-31860b2bb/" target="_blank" rel="noreferrer">
                <div className="w-9 px-0 flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm William Averill
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A passionate web developer building modern, responsive websites and applications.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#projects">
                    <Button>
                      View My Work
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline">Contact Me</Button>
                  </Link>
                </div>
              </div>
              <Image
                src="https://res.cloudinary.com/dwcc4zkfp/image/upload/v1753801058/IMG_0215_uo8khs.jpg"
                width={550}
                height={550}
                alt="William Averill - Web Developer"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a web developer with a passion for creating beautiful, functional websites. I
                  completed my education in web development and I'm eager to apply my skills in a professional
                  setting.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="https://res.cloudinary.com/dwcc4zkfp/image/upload/v1753801079/react_nanodegree_udacity_vp17yk.png"
                width={600}
                height={400}
                alt="William Averill's React Nanodegree Certificate from Udacity"
                className="mx-auto overflow-hidden rounded-xl object-contain bg-white shadow-lg border"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Background</h3>
                      <p className="text-muted-foreground">
                        I have a background in Computer Science and am seeking a position in web development because of my
                        passion for creating digital experiences.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Education</h3>
                      <p className="text-muted-foreground">
                        I completed the React Nanodegree Program from Udacity where I learned the fundamentals of web
                        development and modern frameworks.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Goals</h3>
                      <p className="text-muted-foreground">
                        My goal is to work with a team where I can continue to learn and grow while contributing to
                        meaningful projects.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These are the technologies and tools I work with.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="p-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    width={48}
                    height={48}
                    alt="HTML5"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-medium">HTML5</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="p-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    width={48}
                    height={48}
                    alt="CSS3"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-medium">CSS3</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="p-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    width={48}
                    height={48}
                    alt="JavaScript"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-medium">JavaScript</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="p-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    width={48}
                    height={48}
                    alt="React"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-medium">React</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="p-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    width={48}
                    height={48}
                    alt="Next.js"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-medium">Next.js</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="p-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    width={48}
                    height={48}
                    alt="Node.js"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-medium">Node.js</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="p-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    width={48}
                    height={48}
                    alt="Git"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-medium">Git</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="p-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    width={48}
                    height={48}
                    alt="Figma"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="font-medium">Figma</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent work.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                  </div>
                  <h3 className="text-2xl font-bold">Task Manager App</h3>
                  <p className="text-muted-foreground mt-2">
                    A task management application with features like task creation, due dates, and priority levels.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://github.com/cyberagellc-dev/todo" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href="https://cyberagellc-dev-todo.vercel.app" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                  </div>
                  <h3 className="text-2xl font-bold">Weather App</h3>
                  <p className="text-muted-foreground mt-2">
                    A weather application that fetches real-time weather data from an API and displays forecasts.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://github.com/cyberagellc-dev/weather" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href="https://cyberagellc-dev-weather.vercel.app/" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to chat? Feel free to reach out!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">Feel free to reach out through any of these channels:</p>
                <div className="mt-4 grid gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>cyberagellc@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    <Link href="https://www.linkedin.com/in/william-averill-31860b2bb/" className="hover:underline">
                      LinkedIn
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    <Link href="https://github.com/cyberagellc-dev" className="hover:underline">
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Send Me a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} William Averill. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/cyberagellc-dev" target="_blank" rel="noreferrer">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/william-averill-31860b2bb/" target="_blank" rel="noreferrer">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
