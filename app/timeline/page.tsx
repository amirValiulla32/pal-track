import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, FileText, Satellite, AlertTriangle } from "lucide-react"

export default function TimelinePage() {
  const timelineEvents = [
    {
      id: 1,
      date: "2024-01-20",
      title: "Rafah Border Crossing Destroyed",
      type: "Satellite",
      location: "Rafah",
      description:
        "Satellite imagery confirms complete destruction of Rafah border crossing infrastructure and surrounding residential areas.",
      tags: ["Infrastructure", "Border", "Destruction"],
      severity: "high",
    },
    {
      id: 2,
      date: "2024-01-18",
      title: "Outlet Underreports Jabalia Casualties",
      type: "Article",
      location: "Jabalia",
      description:
        "Outlet report significantly underreports casualty figures from Jabalia refugee camp attack, citing only Israeli military sources.",
      tags: ["Media Bias", "Underreporting", "BBC"],
      severity: "medium",
    },
    {
      id: 3,
      date: "2024-01-15",
      title: "Jabalia Refugee Camp Mass Destruction",
      type: "Event",
      location: "Jabalia",
      description:
        "Systematic bombing campaign targets residential buildings in Jabalia refugee camp, resulting in massive civilian casualties.",
      tags: ["Massacre", "Residential", "Civilians"],
      severity: "high",
    },
    {
      id: 4,
      date: "2024-01-12",
      title: "Outlet Employs 'Bothsidesism' in Rafah Coverage",
      type: "Article",
      location: "Rafah",
      description:
        "Outlet's coverage of Rafah operations presents false equivalency between military actions and civilian casualties.",
      tags: ["Outlet", "Bothsidesism", "False Equivalency"],
      severity: "medium",
    },
    {
      id: 5,
      date: "2024-01-10",
      title: "Hospital Complex Targeted in Gaza City",
      type: "Event",
      location: "Gaza City",
      description:
        "Al-Shifa Hospital complex targeted in coordinated strikes, violating international humanitarian law.",
      tags: ["Hospital", "War Crime", "Medical"],
      severity: "high",
    },
    {
      id: 6,
      date: "2024-01-08",
      title: "Outlet Omits Context in Casualty Reporting",
      type: "Article",
      location: "Gaza Strip",
      description:
        "Outlet report on casualty figures fails to provide historical context or mention disproportionate civilian impact.",
      tags: ["Outlet", "Context Omission", "Casualties"],
      severity: "low",
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Satellite":
        return <Satellite className="w-5 h-5" />
      case "Article":
        return <FileText className="w-5 h-5" />
      case "Event":
        return <AlertTriangle className="w-5 h-5" />
      default:
        return <Calendar className="w-5 h-5" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "border-red-500 bg-red-500/10"
      case "medium":
        return "border-yellow-500 bg-yellow-500/10"
      case "low":
        return "border-blue-500 bg-blue-500/10"
      default:
        return "border-gray-500 bg-gray-500/10"
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Timeline of Events</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Chronological documentation of events, media coverage, and satellite evidence. Each entry is verified and
            cross-referenced with multiple sources.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start gap-6">
                {/* Timeline Dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gray-900 border-2 border-gray-700 rounded-full">
                  {getTypeIcon(event.type)}
                </div>

                {/* Event Card */}
                <Card className={`flex-1 bg-gray-900 border-gray-800 ${getSeverityColor(event.severity)}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="border-red-500 text-red-400">
                          {event.type}
                        </Badge>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {event.date}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl leading-tight">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4 text-base leading-relaxed">
                      {event.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <Card className="mt-16 bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Satellite className="w-5 h-5 text-blue-400" />
                <span>Satellite Evidence</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-yellow-400" />
                <span>Media Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span>Documented Event</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
