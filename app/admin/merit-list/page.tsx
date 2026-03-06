"use client"

import { useState } from "react"
import AdminLayout from "@/components/layouts/admin-layout"
import { Play, Download, AlertCircle } from "lucide-react"

export default function MeritListPage() {
  const [meritList] = useState([
    { rank: 1, name: "Ahmed Ali", merit: 92.5, category: "Merit", program: "BS Computer Science" },
    { rank: 2, name: "Fatima Khan", merit: 91.2, category: "Merit", program: "BS Computer Science" },
    { rank: 3, name: "Hassan Raza", merit: 89.8, category: "Merit", program: "BS Software Engineering" },
    { rank: 4, name: "Ayesha Malik", merit: 88.5, category: "Quota", program: "BS Computer Science" },
    { rank: 5, name: "Muhammad Usman", merit: 87.3, category: "Merit", program: "BS Information Technology" },
  ])

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Merit List Generation</h1>
          <p className="text-muted-foreground mt-2">Generate and manage merit lists for all programs</p>
        </div>

        {/* Generation Controls */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Generate Merit List</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Program</label>
              <select className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary">
                <option>All Programs</option>
                <option>BS Computer Science</option>
                <option>BS Software Engineering</option>
                <option>BS Information Technology</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <select className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary">
                <option>All Categories</option>
                <option>Merit</option>
                <option>Quota</option>
                <option>Self-Finance</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-dark transition-colors flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Generate
              </button>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">Note</p>
              <p>
                Merit list generation uses AI-based logic to ensure fairness and transparency. All calculations are
                based on student merit scores and program requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Merit List Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Generated Merit List</h2>
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
                  <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Category</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Program</th>
                </tr>
              </thead>
              <tbody>
                {meritList.map((student) => (
                  <tr key={student.rank} className="border-b border-border hover:bg-background/30 transition-colors">
                    <td className="px-6 py-4 text-foreground font-bold">#{student.rank}</td>
                    <td className="px-6 py-4 text-foreground font-medium">{student.name}</td>
                    <td className="px-6 py-4 text-foreground font-semibold">{student.merit}%</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          student.category === "Merit"
                            ? "bg-primary/10 text-primary"
                            : student.category === "Quota"
                              ? "bg-accent/10 text-accent"
                              : "bg-warning/10 text-warning"
                        }`}
                      >
                        {student.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">{student.program}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
