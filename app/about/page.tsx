import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, FileText, Search, Shield } from "lucide-react"

export default function AboutPage() {
  const features = [
    {
      icon: <Satellite className="w-8 h-8 text-blue-400" />,
      title: "Satellite Analysis",
      description:
        "High-resolution before and after satellite imagery analysis to document systematic destruction and verify ground reports.",
    },
    {
      icon: <FileText className="w-8 h-8 text-yellow-400" />,
      title: "Media Bias Detection",
      description: "Systematic analysis of media coverage patterns, framing techniques, and bias in reporting on Gaza.",
    },
    {
      icon: <Search className="w-8 h-8 text-green-400" />,
      title: "Source Verification",
      description: "Cross-referencing multiple sources and fact-checking claims to ensure accuracy and reliability.",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Open Source",
      description: "All methodologies, data sources, and analysis techniques are transparent and publicly available.",
    },
  ]

  const principles = [
    "Evidence-based documentation using verifiable sources",
    "Transparent methodology and open-source approach",
    "Systematic bias detection in media coverage",
    "Respect for victims and survivors",
    "Commitment to accuracy and fact-checking",
    "Independence from political and financial interests",
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About PalTrack</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            An open-source platform dedicated to documenting and archiving evidence of systematic destruction in Gaza
            through rigorous analysis and verification.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gray-900 border-gray-800 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              PalTrack exists to create a comprehensive, verifiable record of events in Gaza through the systematic
              collection and analysis of satellite imagery, media coverage, and documented events. We believe that truth
              and accountability require meticulous documentation and transparent methodology.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our platform serves researchers, journalists, legal professionals, and anyone seeking to understand the
              scope and scale of destruction through evidence-based analysis rather than rhetoric or opinion.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Principles */}
        <Card className="bg-gray-900 border-gray-800 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Our Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {principles.map((principle, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{principle}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card className="bg-gray-900 border-gray-800 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Methodology</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Satellite Analysis</h3>
                <p className="text-gray-300">
                  We use high-resolution satellite imagery from multiple providers to create before and after
                  comparisons. All coordinates and timestamps are verified and cross-referenced with ground reports.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Media Bias Detection</h3>
                <p className="text-gray-300">
                  Our media analysis framework evaluates framing, source selection, context provision, and language
                  choices. We identify patterns of underreporting, false equivalency, and omission of crucial context.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Source Verification</h3>
                <p className="text-gray-300">
                  Every piece of information is cross-referenced with multiple independent sources. We maintain a
                  transparent chain of evidence and clearly mark the confidence level of each claim.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl">Get Involved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              PalTrack is a collaborative effort. We welcome contributions from researchers, journalists, developers,
              and anyone committed to documenting truth through rigorous analysis. 
            </p>
            <p className="text-gray-300 mb-4">
              If you have expertise in satellite imagery, media analysis, or data verification, consider joining our
              community. Together, we can create a more accurate and comprehensive record of events. Contact us at contact@paltrack.dev
              </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-blue-500 text-blue-400">
                Researchers
              </Badge>
              <Badge variant="outline" className="border-green-500 text-green-400">
                Developers
              </Badge>
              <Badge variant="outline" className="border-yellow-500 text-yellow-400">
                Journalists
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                Legal Experts
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
