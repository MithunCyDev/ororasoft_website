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
    <section>
      <div className="bg-[#111827] py-16 ">
        <div className="container z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white">
              Schedule a Consultation<span className="text-[#3EC9FF]">.</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Book a free consultation with our team to discuss your project
              needs
            </p>
          </div>
        </div>
        {/* <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}
      </div>

      <div className="mx-auto max-w-4xl space-y-8 my-12 border-none">
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
              <div className="min-h-[300px] w-full">
                <CalendlyEmbed username={calendlyUsername} />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">
                  Discuss Your Needs
                </CardTitle>
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
                <CardTitle className="text-primary">
                  Get Expert Advice
                </CardTitle>
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
                <CardTitle className="text-primary">Plan Next Steps</CardTitle>
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
    </section>
  );
}
