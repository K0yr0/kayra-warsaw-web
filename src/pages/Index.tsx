
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Mail, Github, Linkedin, Code, GraduationCap, Globe, Coffee } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java", 
    "HTML/CSS", "Git", "SQL", "Docker", "Linux", "AWS"
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Task Management App",
      description: "Mobile-responsive task manager with real-time updates",
      tech: ["TypeScript", "React", "Firebase", "Tailwind CSS"]
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with data visualization",
      tech: ["JavaScript", "Chart.js", "API Integration", "CSS3"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Kayra Çelikoğlu</h1>
            <div className="hidden md:flex space-x-6">
              {['about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <Avatar className="w-32 h-32">
                    <AvatarImage 
                      src="/lovable-uploads/0e6a51a2-2094-4ee3-947f-c6725afad98b.png" 
                      alt="Kayra Çelikoğlu" 
                    />
                    <AvatarFallback className="text-2xl">KC</AvatarFallback>
                  </Avatar>
                  <div className="text-center md:text-left flex-1">
                    <h2 className="text-4xl font-bold text-slate-800 mb-2">
                      Kayra Çelikoğlu
                    </h2>
                    <p className="text-xl text-slate-600 mb-4">IT Student & Aspiring Developer</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>Warsaw, Poland</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Globe className="w-4 h-4" />
                        <span>From Türkiye</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <GraduationCap className="w-4 h-4" />
                        <span>IT Student</span>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      Passionate IT student from Türkiye, currently studying and living in Warsaw. 
                      I'm dedicated to learning cutting-edge technologies and building innovative 
                      solutions. Always eager to take on new challenges and collaborate on exciting projects.
                    </p>
                    <div className="flex gap-3">
                      <Button className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Get in Touch
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Skills & Technologies
            </h3>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Technical Skills
                </CardTitle>
                <CardDescription>
                  Technologies and tools I work with
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Featured Projects
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>
            <p className="text-slate-300 mb-8 text-lg">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Me
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-slate-800">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-slate-800">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Coffee className="w-4 h-4" />
            <span>Made with passion in Warsaw</span>
          </div>
          <p>&copy; 2024 Kayra Çelikoğlu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
