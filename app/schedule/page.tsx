import type { Metadata } from "next";
import CalendlyEmbed from "@/components/calendly-embed";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Schedule a Consultation | Ororasoft",
  description:
    "Book a free consultation with our team to discuss your project needs.",
};

export default function SchedulePage() {
  const calendlyUsername = "ororasoft";

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Schedule a Consultation
          </h1>
          <p className="text-xl text-muted-foreground">
            Book a free consultation with our team to discuss your project needs
          </p>
        </div>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Choose a Time That Works for You</CardTitle>
              <CardDescription>
                Select a convenient time slot from our availability calendar.
                Consultations typically last 30 minutes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="min-h-[600px] w-full">
                <CalendlyEmbed username={calendlyUsername} />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Discuss Your Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We'll listen to your requirements and understand your business
                  goals to provide tailored solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Get Expert Advice</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our specialists will provide insights and recommendations
                  based on your specific project requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Plan Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We'll outline a clear path forward with a proposed timeline
                  and approach for your project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
