import { Code, Cpu, Globe, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to meet your specific business needs and challenges.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Application Development",
      description: "Responsive, scalable web applications built with modern technologies and frameworks.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that leverage the latest advancements in artificial intelligence.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Cybersecurity Solutions",
      description: "Protect your business with our comprehensive security services and solutions.",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mt-4 text-xl text-muted-foreground">Comprehensive solutions for your business needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

