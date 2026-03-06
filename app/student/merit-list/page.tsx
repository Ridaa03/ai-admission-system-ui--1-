"use client"

import { useState } from "react"
import StudentLayout from "@/components/layouts/student-layout"
import { Award, AlertCircle, CheckCircle, Clock, Download } from "lucide-react"

interface MeritListEntry {
  rank: number
  name: string
  merit: number
  program: string
  status: "admitted" | "waitlist" | "pending"
  category: string
}

export default function MeritListPage() {
  const [meritListPublished] = useState(false)
  const [studentRank] = useState<MeritListEntry | null>(null)

  const [timelineEvents] = useState([
    {
      date: "March 10, 2025",
      event: "Applications Close",
      completed: false,
      current: false,
    },
    {
      date: "March 15, 2025",
      event: "Merit List Published",
      completed: false,
      current: true,
    },
    {
      date: "March 20-25, 2025",
      event: "Admission Confirmation",
      completed: false,
      current: false,
    },
    {
      date: "April 1, 2025",
      event: "Classes Begin",
      completed: false,
      current: false,
    },
  ])

  const [sampleMeritList] = useState<MeritListEntry[]>([
    {
      rank: 1,
      name: "Ahmed Ali",
      merit: 92.5,
      program: "BS Computer Science",
      status: "admitted",
      category: "Merit",
    },
    {
      rank: 2,
      name: "Fatima Khan",
      merit: 91.2,
      program: "BS Computer Science",
      status: "admitted",
      category: "Merit",
    },
    {
      rank: 3,
      name: "Hassan Raza",
      merit: 89.8,
      program: "BS Software Engineering",
      status: "admitted",
      category: "Merit",
    },
    {
      rank: 4,
      name: "Ayesha Malik",
      merit: 88.5,
      program: "BS Computer Science",
      status: "waitlist",
      category: "Quota",
    },
    {
      rank: 5,
      name: "Muhammad Usman",
      merit: 87.3,
      program: "BS Information Technology",
      status: "pending",
      category: "Merit",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "admitted":
        return "bg-green-500/10 text-green-400 border-green-500/20"
      case "waitlist":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
      case "pending":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20"
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "admitted":
        return <CheckCircle className="w-4 h-4" />
      case "waitlist":
        return <Clock className="w-4 h-4" />
      case "pending":
        return <AlertCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Merit List Status</h1>
          <p className="text-muted-foreground mt-2">Check your admission status and ranking</p>
        </div>

        {/* Timeline */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">Admission Timeline</h2>
          <div className="space-y-4">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      event.completed
                        ? "bg-accent border-accent"
                        : event.current
                          ? "bg-primary border-primary"
                          : "border-border"
                    }`}
                  />
                  {idx < timelineEvents.length - 1 && (
                    <div className={`w-0.5 h-12 ${event.completed ? "bg-accent" : "bg-border"}`} />
                  )}
                </div>
                <div className="pb-4">
                  <p className="font-semibold text-foreground">{event.event}</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!meritListPublished ? (
          <>
            {/* Status Card - Coming Soon */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-12 h-12 text-primary" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Merit List Coming Soon</h2>
                  <p className="text-muted-foreground">Merit lists will be published on March 15, 2025</p>
                </div>
              </div>

              <div className="bg-background/50 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-2">What to Expect</p>
                  <ul className="space-y-1">
                    <li>• Your ranking among all applicants for each program</li>
                    <li>• Admission status (Admitted, Waitlist, or Pending)</li>
                    <li>• Confirmation deadline for your admission</li>
                    <li>• Next steps for enrollment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Placeholder */}
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <Award className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No Merit List Available Yet</h3>
              <p className="text-muted-foreground">Check back after March 15, 2025 for your admission status</p>
            </div>
          </>
        ) : (
          <>
            {/* Your Status Card */}
            {studentRank && (
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-12 h-12 text-accent" />
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Congratulations!</h2>
                      <p className="text-muted-foreground">You have been admitted to your program</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                    <Download className="w-4 h-4" />
                    Download Admission Letter
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">Your Rank</p>
                    <p className="text-2xl font-bold text-foreground">#{studentRank.rank}</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">Program</p>
                    <p className="text-lg font-bold text-foreground">{studentRank.program}</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">Merit Score</p>
                    <p className="text-2xl font-bold text-foreground">{studentRank.merit}%</p>
                  </div>
                </div>
              </div>
            )}

            {/* Merit List Table */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Merit List</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-background/50">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Rank</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Merit Score</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Program</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleMeritList.map((entry) => (
                      <tr key={entry.rank} className="border-b border-border hover:bg-background/30 transition-colors">
                        <td className="px-6 py-4 text-foreground font-bold">#{entry.rank}</td>
                        <td className="px-6 py-4 text-foreground font-medium">{entry.name}</td>
                        <td className="px-6 py-4 text-foreground font-semibold">{entry.merit}%</td>
                        <td className="px-6 py-4 text-muted-foreground text-sm">{entry.program}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                              entry.status,
                            )}`}
                          >
                            {getStatusIcon(entry.status)}
                            {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Info Box */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">Important Information</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Merit lists are generated based on your merit score and program preferences</li>
              <li>• Admission is subject to document verification and seat availability</li>
              <li>• You must confirm your admission within the specified deadline</li>
              <li>• Waitlisted students may be admitted if seats become available</li>
            </ul>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
