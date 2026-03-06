"use client"

import { useState } from "react"
import StudentLayout from "@/components/layouts/student-layout"
import { FileText, CheckCircle, AlertCircle, Clock, TrendingUp } from "lucide-react"

export default function StudentDashboard() {
  const [applications] = useState([
    {
      id: 1,
      program: "BS Computer Science",
      status: "submitted",
      submittedDate: "2025-02-15",
      merit: 87.5,
    },
    {
      id: 2,
      program: "BS Software Engineering",
      status: "under-review",
      submittedDate: "2025-02-16",
      merit: 85.2,
    },
    {
      id: 3,
      program: "BS Information Technology",
      status: "eligible",
      submittedDate: "2025-02-17",
      merit: 82.1,
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20"
      case "under-review":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
      case "eligible":
        return "bg-green-500/10 text-green-400 border-green-500/20"
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <Clock className="w-4 h-4" />
      case "under-review":
        return <AlertCircle className="w-4 h-4" />
      case "eligible":
        return <CheckCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome Back, Student</h1>
          <p className="text-muted-foreground mt-2">Track your admission applications and check eligibility</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Applications</p>
                <p className="text-3xl font-bold text-foreground mt-2">3</p>
              </div>
              <FileText className="w-10 h-10 text-primary opacity-20" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Eligible Programs</p>
                <p className="text-3xl font-bold text-accent mt-2">1</p>
              </div>
              <CheckCircle className="w-10 h-10 text-accent opacity-20" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Average Merit</p>
                <p className="text-3xl font-bold text-foreground mt-2">84.9%</p>
              </div>
              <TrendingUp className="w-10 h-10 text-primary opacity-20" />
            </div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-semibold text-foreground">Your Applications</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-background/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Program</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Submitted</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Merit Score</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="border-b border-border hover:bg-background/30 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">{app.program}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(app.status)}`}
                      >
                        {getStatusIcon(app.status)}
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1).replace("-", " ")}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">{app.submittedDate}</td>
                    <td className="px-6 py-4 text-foreground font-semibold">{app.merit}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-6 bg-card border border-border rounded-lg hover:border-primary hover:bg-card/80 transition-all text-left group">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              Upload Documents
            </h3>
            <p className="text-sm text-muted-foreground mt-2">Submit CNIC and certificates for verification</p>
          </button>

          <button className="p-6 bg-card border border-border rounded-lg hover:border-accent hover:bg-card/80 transition-all text-left group">
            <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
              Check Eligibility
            </h3>
            <p className="text-sm text-muted-foreground mt-2">View program eligibility and recommendations</p>
          </button>
        </div>
      </div>
    </StudentLayout>
  )
}
