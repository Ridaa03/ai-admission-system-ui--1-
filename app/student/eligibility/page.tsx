"use client"

import { useState } from "react"
import StudentLayout from "@/components/layouts/student-layout"
import { CheckCircle, AlertCircle, TrendingUp, Users, BookOpen } from "lucide-react"

interface EligibilityResult {
  program: string
  eligible: boolean
  merit: number
  required: number
  category: string
  seats: number
  filled: number
  description: string
}

export default function EligibilityPage() {
  const [eligibilityResults] = useState<EligibilityResult[]>([
    {
      program: "BS Computer Science",
      eligible: true,
      merit: 87.5,
      required: 80,
      category: "Merit",
      seats: 45,
      filled: 32,
      description: "Excellent match for your profile. High demand program with strong career prospects.",
    },
    {
      program: "BS Software Engineering",
      eligible: true,
      merit: 85.2,
      required: 82,
      category: "Merit",
      seats: 30,
      filled: 24,
      description: "Good match. Slightly lower competition than CS. Strong industry demand.",
    },
    {
      program: "BS Information Technology",
      eligible: false,
      merit: 82.1,
      required: 85,
      category: "Merit",
      seats: 25,
      filled: 23,
      description: "You are 2.9 points below the required merit. Consider applying for quota category.",
    },
    {
      program: "BS Data Science",
      eligible: true,
      merit: 87.5,
      required: 84,
      category: "Merit",
      seats: 20,
      filled: 15,
      description: "Emerging program with excellent career opportunities. Less competition.",
    },
  ])

  const [selectedProgram, setSelectedProgram] = useState<EligibilityResult | null>(null)

  const eligibleCount = eligibilityResults.filter((r) => r.eligible).length
  const totalPrograms = eligibilityResults.length

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Eligibility Check</h1>
          <p className="text-muted-foreground mt-2">View your eligibility for available programs</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Eligible Programs</p>
                <p className="text-3xl font-bold text-accent mt-2">{eligibleCount}</p>
              </div>
              <CheckCircle className="w-10 h-10 text-accent opacity-20" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Your Merit Score</p>
                <p className="text-3xl font-bold text-primary mt-2">87.5%</p>
              </div>
              <TrendingUp className="w-10 h-10 text-primary opacity-20" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Programs</p>
                <p className="text-3xl font-bold text-foreground mt-2">{totalPrograms}</p>
              </div>
              <BookOpen className="w-10 h-10 text-foreground opacity-20" />
            </div>
          </div>
        </div>

        {/* Eligibility Results */}
        <div className="space-y-4">
          {eligibilityResults.map((result, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProgram(selectedProgram?.program === result.program ? null : result)}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{result.program}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Category: {result.category}</p>
                </div>
                {result.eligible ? (
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Your Merit</p>
                  <p className="text-xl font-bold text-foreground">{result.merit}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Required</p>
                  <p className="text-xl font-bold text-foreground">{result.required}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Available Seats</p>
                  <p className="text-xl font-bold text-foreground">{result.seats}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Filled</p>
                  <p className="text-xl font-bold text-foreground">{result.filled}</p>
                </div>
              </div>

              {/* Merit Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-background rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${result.eligible ? "bg-accent" : "bg-destructive"}`}
                    style={{ width: `${Math.min((result.merit / result.required) * 100, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {result.eligible
                    ? `You are ${(result.merit - result.required).toFixed(1)} points above required`
                    : `You are ${(result.required - result.merit).toFixed(1)} points below required`}
                </p>
              </div>

              {/* Seat Availability */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">Seat Availability</p>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: `${(result.filled / result.seats) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {result.seats - result.filled} of {result.seats} seats available
                </p>
              </div>

              {/* Expandable Details */}
              {selectedProgram?.program === result.program && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">{result.description}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm">
                      View Details
                    </button>
                    {result.eligible && (
                      <button className="flex-1 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-dark transition-colors text-sm">
                        Apply Now
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">About Eligibility</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Eligibility is based on your merit score and program requirements</li>
              <li>• Merit score is calculated from your academic performance</li>
              <li>• Seat availability may change as applications are processed</li>
              <li>• You can apply for multiple programs in order of preference</li>
              <li>• Final admission depends on merit list ranking and seat availability</li>
            </ul>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
