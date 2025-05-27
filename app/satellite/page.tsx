"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowLeftRight } from "lucide-react"
import Image from "next/image"

export default function SatellitePage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"before" | "after" | "split">("split")

  const locations = [
    {
      id: "jabalia",
      name: "Jabalia Refugee Camp",
      coordinates: "31.5342° N, 34.4831° E",
      beforeDate: "2023-10-01",
      afterDate: "2024-01-15",
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      description: "Systematic destruction of residential buildings and infrastructure in Jabalia refugee camp.",
      casualties: "2,847 confirmed",
      buildingsDestroyed: "1,234",
      tags: ["Residential", "Refugee Camp", "Mass Destruction"],
    },
    {
      id: "rafah",
      name: "Rafah Border Area",
      coordinates: "31.2856° N, 34.2458° E",
      beforeDate: "2023-09-15",
      afterDate: "2024-01-20",
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      description: "Complete demolition of border infrastructure and surrounding residential areas.",
      casualties: "1,523 confirmed",
      buildingsDestroyed: "892",
      tags: ["Border", "Infrastructure", "Residential"],
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Satellite Evidence</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Before and after satellite imagery documenting the systematic destruction across Gaza. Each location shows
            verifiable evidence of targeted demolition.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location List */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Documented Locations</h2>
            <div className="space-y-4">
              {locations.map((location) => (
                <Card
                  key={location.id}
                  className={`bg-gray-900 border-gray-800 cursor-pointer transition-all duration-300 ${
                    selectedLocation === location.id ? "border-red-500 bg-gray-800" : "hover:border-gray-600"
                  }`}
                  onClick={() => setSelectedLocation(location.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{location.name}</CardTitle>
                      <MapPin className="w-5 h-5 text-red-400" />
                    </div>
                    <CardDescription className="text-gray-400 text-sm">{location.coordinates}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Buildings Destroyed:</span>
                        <span className="text-red-400 font-semibold">{location.buildingsDestroyed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Casualties:</span>
                        <span className="text-red-400 font-semibold">{location.casualties}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {location.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image Viewer */}
          <div className="lg:col-span-2">
            {selectedLocation ? (
              <div className="space-y-6">
                {(() => {
                  const location = locations.find((l) => l.id === selectedLocation)!
                  return (
                    <>
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">{location.name}</h2>
                        <div className="flex gap-2">
                          <Button
                            variant={viewMode === "before" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setViewMode("before")}
                            className={viewMode === "before" ? "bg-red-600" : ""}
                          >
                            Before
                          </Button>
                          <Button
                            variant={viewMode === "split" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setViewMode("split")}
                            className={viewMode === "split" ? "bg-red-600" : ""}
                          >
                            <ArrowLeftRight className="w-4 h-4" />
                          </Button>
                          <Button
                            variant={viewMode === "after" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setViewMode("after")}
                            className={viewMode === "after" ? "bg-red-600" : ""}
                          >
                            After
                          </Button>
                        </div>
                      </div>

                      <Card className="bg-gray-900 border-gray-800">
                        <CardContent className="p-0">
                          {viewMode === "split" ? (
                            <div className="grid grid-cols-2 gap-0">
                              <div className="relative">
                                <Image
                                  src={location.beforeImage || "/placeholder.svg"}
                                  alt={`${location.name} before`}
                                  width={600}
                                  height={400}
                                  className="w-full h-80 object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded">
                                  <div className="flex items-center gap-2 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    Before: {location.beforeDate}
                                  </div>
                                </div>
                              </div>
                              <div className="relative">
                                <Image
                                  src={location.afterImage || "/placeholder.svg"}
                                  alt={`${location.name} after`}
                                  width={600}
                                  height={400}
                                  className="w-full h-80 object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded">
                                  <div className="flex items-center gap-2 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    After: {location.afterDate}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="relative">
                              <Image
                                src={viewMode === "before" ? location.beforeImage : location.afterImage}
                                alt={`${location.name} ${viewMode}`}
                                width={1200}
                                height={400}
                                className="w-full h-80 object-cover"
                              />
                              <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded">
                                <div className="flex items-center gap-2 text-sm">
                                  <Calendar className="w-4 h-4" />
                                  {viewMode === "before"
                                    ? `Before: ${location.beforeDate}`
                                    : `After: ${location.afterDate}`}
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                          <CardTitle>Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 mb-4">{location.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">Coordinates:</span>
                              <p className="font-mono">{location.coordinates}</p>
                            </div>
                            <div>
                              <span className="text-gray-400">Time Period:</span>
                              <p>
                                {location.beforeDate} to {location.afterDate}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  )
                })()}
              </div>
            ) : (
              <Card className="bg-gray-900 border-gray-800 h-96 flex items-center justify-center">
                <CardContent className="text-center">
                  <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">Select a location to view satellite evidence</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
