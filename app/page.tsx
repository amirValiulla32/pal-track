import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar } from "lucide-react"

export default function HomePage() {
  const recentEvents = [
    {
      id: 1,
      title: "Satellite Analysis: Jabalia Refugee Camp Destruction",
      type: "Satellite",
      date: "2024-01-15",
      description:
        "Before and after satellite imagery reveals systematic destruction of residential areas in Jabalia refugee camp.",
      tags: ["Jabalia", "Residential", "Destruction"],
    },
    {
      id: 2,
      title: "Media Bias Analysis: CNN Coverage of Rafah Operations",
      type: "Article",
      date: "2024-01-12",
      description: "Analysis of CNN's framing and language choices when reporting on military operations in Rafah.",
      tags: ["CNN", "Bias", "Rafah"],
    },
    {
      id: 3,
      title: "Timeline Update: January 2024 Escalation",
      type: "Event",
      date: "2024-01-10",
      description: "Comprehensive timeline of events during the January 2024 escalation period.",
      tags: ["Timeline", "Escalation"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="overflow-hidden -mt-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-none">
              Documenting the truth.
              <br />
              Tracking the genocide.
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            PalTrack is an open-source platform archiving the destruction in Gaza through articles, satellite images,
            and media analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <Link href="/timeline">View Timeline</Link>
            </Button>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <Link href="/satellite">See Satellite Proof</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recent Documentation</h2>
            <p className="text-gray-400 text-lg">Latest evidence and analysis from our investigation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentEvents.map((event) => (
              <Card key={event.id} className="bg-gray-900 border-gray-800 card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-red-500 text-red-400">
                      {event.type}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg leading-tight">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">{event.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Built to Bear Witness</h2>
          <p className="text-gray-300 text-lg mb-8">
            Every piece of evidence matters. Every story deserves to be told. Join us in documenting the truth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/articles">Explore Articles</Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
