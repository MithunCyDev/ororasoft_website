import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "OroraSoft delivered our project on time and exceeded our expectations. Their team was professional and responsive throughout the entire process.",
      author: "Sarah Johnson",
      role: "CTO, TechVision Inc.",
      rating: 5,
    },
    {
      quote:
        "Working with OroraSoft has been a game-changer for our business. Their custom software solution has streamlined our operations and increased productivity.",
      author: "Michael Chen",
      role: "Operations Director, GlobalTech",
      rating: 5,
    },
    {
      quote:
        "The team at OroraSoft truly understands our business needs. They've been a valuable partner in our digital transformation journey.",
      author: "Emily Rodriguez",
      role: "CEO, InnovateX",
      rating: 4,
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-muted-foreground">Don't just take our word for it</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-6 shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

