"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, ExternalLink, Search, Filter } from "lucide-react"

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSource, setSelectedSource] = useState("all")
  const [selectedBias, setSelectedBias] = useState("all")

  const articles = [
    {
      id: 1,
      headline: "Gaza Health Ministry Reports 500 Dead in Hospital Strike",
      source: "BBC",
      date: "2024-01-18",
      summary:
        "BBC report significantly underreports casualty figures and relies primarily on Israeli military sources without independent verification.",
      biasScore: "Underreporting",
      biasLevel: "high",
      url: "#",
      tags: ["Hospital", "Casualties", "Verification"],
      campaign: "Hospital Attacks",
    },
    {
      id: 2,
      headline: "Both Sides Suffer Losses in Gaza Conflict",
      source: "CNN",
      date: "2024-01-15",
      summary:
        "CNN employs false equivalency between military casualties and civilian deaths, presenting disproportionate impacts as equal.",
      biasScore: "Bothsidesism",
      biasLevel: "high",
      url: "#",
      tags: ["False Equivalency", "Casualties", "Framing"],
      campaign: "False Balance",
    },
    {
      id: 3,
      headline: "Israeli Forces Respond to Security Threats in Gaza",
      source: "Reuters",
      date: "2024-01-12",
      summary:
        "Reuters frames military operations as defensive responses while omitting context about civilian infrastructure targeting.",
      biasScore: "Context Omission",
      biasLevel: "medium",
      url: "#",
      tags: ["Framing", "Context", "Military"],
      campaign: "Defensive Framing",
    },
    {
      id: 4,
      headline: "Humanitarian Crisis Deepens in Gaza Strip",
      source: "Al Jazeera",
      date: "2024-01-10",
      summary: "Comprehensive reporting on humanitarian impact with proper context and multiple source verification.",
      biasScore: "Balanced",
      biasLevel: "low",
      url: "#",
      tags: ["Humanitarian", "Context", "Verification"],
      campaign: "Humanitarian Focus",
    },
    {
      id: 5,
      headline: "Gaza Conflict: Complex Situation Requires Nuanced Understanding",
      source: "The Guardian",
      date: "2024-01-08",
      summary:
        "While attempting balance, article obscures clear patterns of disproportionate civilian targeting through excessive nuance.",
      biasScore: "False Nuance",
      biasLevel: "medium",
      url: "#",
      tags: ["Nuance", "Obfuscation", "Patterns"],
      campaign: "Complexity Framing",
    },
    {
      id: 6,
      headline: "International Law Experts Condemn Gaza Hospital Attacks",
      source: "The Intercept",
      date: "2024-01-05",
      summary:
        "Detailed legal analysis with expert sources clearly identifying violations of international humanitarian law.",
      biasScore: "Factual",
      biasLevel: "low",
      url: "#",
      tags: ["Legal", "Expert Sources", "International Law"],
      campaign: "Legal Analysis",
    },
  ]

  const getBiasColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-red-500/20 text-red-400 border-red-500"
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500"
      case "low":
        return "bg-green-500/20 text-green-400 border-green-500"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500"
    }
  }

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSource = selectedSource === "all" || article.source === selectedSource
    const matchesBias = selectedBias === "all" || article.biasLevel === selectedBias

    return matchesSearch && matchesSource && matchesBias
  })

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Article Explorer</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Analysis of media coverage patterns, bias detection, and source verification. Each article is evaluated for
            accuracy, framing, and adherence to journalistic standards.
          </p>
        </div>

        {/* Filters */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700"
                />
              </div>
              <Select value={selectedSource} onValueChange={setSelectedSource}>
                <SelectTrigger className="bg-gray-800 border-gray-700">
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="BBC">BBC</SelectItem>
                  <SelectItem value="CNN">CNN</SelectItem>
                  <SelectItem value="Reuters">Reuters</SelectItem>
                  <SelectItem value="Al Jazeera">Al Jazeera</SelectItem>
                  <SelectItem value="The Guardian">The Guardian</SelectItem>
                  <SelectItem value="The Intercept">The Intercept</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedBias} onValueChange={setSelectedBias}>
                <SelectTrigger className="bg-gray-800 border-gray-700">
                  <SelectValue placeholder="Bias level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Bias Levels</SelectItem>
                  <SelectItem value="high">High Bias</SelectItem>
                  <SelectItem value="medium">Medium Bias</SelectItem>
                  <SelectItem value="low">Low Bias</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-blue-500 text-blue-400">
                    {article.source}
                  </Badge>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <CardTitle className="text-white text-lg leading-tight hover:text-gray-300 transition-colors">
                  <a href={article.url} className="flex items-start justify-between gap-2">
                    {article.headline}
                    <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4 leading-relaxed">{article.summary}</CardDescription>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm">Bias Analysis:</span>
                    <Badge className={getBiasColor(article.biasLevel)}>{article.biasScore}</Badge>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="text-xs text-gray-500">Campaign: {article.campaign}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <Card className="bg-gray-900 border-gray-800 py-12">
            <CardContent className="text-center">
              <p className="text-gray-400 text-lg">No articles match your current filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedSource("all")
                  setSelectedBias("all")
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
