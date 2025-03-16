"use client"

import { useState } from "react"
import { Search, Lightbulb, Code, CheckCircle, Rocket, RefreshCw, ArrowRight } from "lucide-react"

export function DevelopmentLifecycleSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: <Search className="size-6" />,
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business needs, gathering requirements, and creating a detailed project roadmap.",
      details: [
        "Requirements gathering",
        "Market research",
        "Project scope definition",
        "Timeline and budget planning",
      ],
    },
    {
      icon: <Lightbulb className="size-6" />,
      title: "Design & Prototyping",
      description:
        "Our design team creates intuitive user interfaces and experiences, with interactive prototypes for your feedback.",
      details: ["UI/UX design", "Wireframing", "Interactive prototyping", "Design system creation"],
    },
    {
      icon: <Code className="size-6" />,
      title: "Development",
      description:
        "Our engineers build your solution using modern technologies and best practices, with regular progress updates.",
      details: ["Frontend development", "Backend implementation", "API integration", "Database architecture"],
    },
    {
      icon: <CheckCircle className="size-6" />,
      title: "Testing & QA",
      description:
        "Rigorous testing ensures your product is bug-free, secure, and performs optimally across all devices.",
      details: ["Functional testing", "Performance optimization", "Security testing", "Cross-browser compatibility"],
    },
    {
      icon: <Rocket className="size-6" />,
      title: "Deployment",
      description:
        "We handle the smooth launch of your product, ensuring everything runs perfectly in the production environment.",
      details: ["Deployment strategy", "Infrastructure setup", "Data migration", "Launch monitoring"],
    },
    {
      icon: <RefreshCw className="size-6" />,
      title: "Maintenance & Support",
      description:
        "Our relationship continues with ongoing support, updates, and improvements to keep your product running smoothly.",
      details: ["Regular updates", "Performance monitoring", "Feature enhancements", "Technical support"],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/10">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-6">
            <RefreshCw className="size-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Development Life Cycle</h2>
          <div className="w-24 h-1 bg-primary rounded mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Our proven development methodology ensures consistent, high-quality results for every project
          </p>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="lg:hidden">
          <div className="relative border-l-2 border-primary/20 ml-6 pl-8 space-y-10">
            {steps.map((step, index) => (
              <div key={index} className={`relative ${index === steps.length - 1 ? "" : "pb-10"}`}>
                <div className="absolute -left-[42px] flex items-center justify-center size-8 rounded-full border-2 border-primary/20 bg-background">
                  <div className={`size-4 rounded-full ${index <= activeStep ? "bg-primary" : "bg-primary/20"}`}></div>
                </div>

                <div
                  className={`p-6 rounded-xl bg-white dark:bg-background border ${
                    index === activeStep ? "border-primary/30" : "border-primary/10"
                  } transition-all duration-300`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center mb-3">
                    <div
                      className={`flex items-center justify-center size-10 rounded-full ${
                        index === activeStep ? "bg-primary text-white" : "bg-primary/10 text-primary"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold ml-3">{step.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4">{step.description}</p>

                  {index === activeStep && (
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="size-4 text-primary mt-1 mr-2" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:block">
          {/* Step Indicators */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2"></div>

            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className="relative flex flex-col items-center"
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`size-10 rounded-full flex items-center justify-center z-10 ${
                      index <= activeStep
                        ? "bg-primary text-white"
                        : "bg-white dark:bg-background border-2 border-primary/20 text-primary"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div
                    className={`absolute top-12 whitespace-nowrap text-sm font-medium ${
                      index === activeStep ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="mt-16 p-8 rounded-xl bg-white dark:bg-background border border-primary/10">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary text-white mr-4">
                {steps[activeStep].icon}
              </div>
              <h3 className="text-2xl font-bold">{steps[activeStep].title}</h3>
            </div>

            <p className="text-lg text-muted-foreground mb-8">{steps[activeStep].description}</p>

            <div className="grid grid-cols-2 gap-6">
              {steps[activeStep].details.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="size-3 text-primary" />
                    </div>
                  </div>
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="flex items-center text-primary disabled:text-primary/40 disabled:cursor-not-allowed"
            >
              <ArrowRight className="size-4 mr-2 rotate-180" />
              Previous Step
            </button>

            <button
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className="flex items-center text-primary disabled:text-primary/40 disabled:cursor-not-allowed"
            >
              Next Step
              <ArrowRight className="size-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

