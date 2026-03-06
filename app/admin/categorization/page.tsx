"use client"

import { useState } from "react"
import AdminLayout from "@/components/layouts/admin-layout"
import { Search, Filter, Download, Edit2, Trash2, Eye } from "lucide-react"

interface Student {
  id: number
  name: string
  merit: number
  program: string
  email: string
  status: "verified" | "pending" | "rejected"
}

interface Category {
  name: string
  count: number
  percentage: number
  color: string
  description: string
}

export default function CategorizationPage() {
  const [categories] = useState<Category[]>([
    {
      name: "Merit",
      count: 245,
      percentage: 53.2,
      color: "bg-primary",
      description: "Students admitted based on merit score",
    },
    {
      name: "Quota",
      count: 128,
      percentage: 27.8,
      color: "bg-accent",
      description: "Students admitted under quota system",
    },
    {
      name: "Self-Finance",
      count: 87,
      percentage: 18.9,
      color: "bg-warning",
      description: "Self-financed students",
    },
  ])

  const [studentsByCategory] = useState([
    {
      category: "Merit",
      students: [
        {
          id: 1,
          name: "Ahmed Ali",
          merit: 92.5,
          program: "BS Computer Science",
          email: "ahmed@university.edu",
          status: "verified",
        },
        {
          id: 2,
          name: "Fatima Khan",
          merit: 91.2,
          program: "BS Computer Science",
          email: "fatima@university.edu",
          status: "verified",
        },
        {
          id: 3,
          name: "Hassan Raza",
          merit: 89.8,
          program: "BS Software Engineering",
          email: "hassan@university.edu",
          status: "pending",
        },
      ],
    },
    {
      category: "Quota",
      students: [
        {
          id: 4,
          name: "Ayesha Malik",
          merit: 88.5,
          program: "BS Computer Science",
          email: "ayesha@university.edu",
          status: "verified",
        },
        {
          id: 5,
          name: "Ali Hassan",
          merit: 86.2,
          program: "BS Information Technology",
          email: "ali@university.edu",
          status: "verified",
        },
      ],
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-500/10 text-green-400 border-green-500/20"
      case "pending":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
      case "rejected":
        return "bg-red-500/10 text-red-400 border-red-500/20"
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20"
    }
  }

  const filteredStudents = studentsByCategory
    .filter((section) => selectedCategory === "all" || section.category === selectedCategory)
    .map((section) => ({
      ...section,
      students: section.students.filter(
        (student) =>
          (selectedStatus === "all" || student.status === selectedStatus) &&
          (searchTerm === "" ||
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase())),
      ),
    }))
    .filter((section) => section.students.length > 0)

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Student Categorization</h1>
            <p className="text-muted-foreground mt-2">View students grouped by admission category</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">{cat.name}</h3>
                <div className={`w-3 h-3 rounded-full ${cat.color}`} />
              </div>
              <p className="text-3xl font-bold text-foreground mb-2">{cat.count}</p>
              <p className="text-sm text-accent font-semibold mb-3">{cat.percentage}% of total</p>
              <p className="text-xs text-muted-foreground">{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-4 flex flex-wrap items-center gap-4">
          <Filter className="w-5 h-5 text-muted-foreground" />
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary text-sm"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
          >
            <option value="all">All Categories</option>
            <option value="Merit">Merit</option>
            <option value="Quota">Quota</option>
            <option value="Self-Finance">Self-Finance</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
          >
            <option value="all">All Status</option>
            <option value="verified">Verified</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Students by Category */}
        <div className="space-y-6">
          {filteredStudents.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <p className="text-muted-foreground">No students found matching your filters</p>
            </div>
          ) : (
            filteredStudents.map((section) => (
              <div key={section.category} className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">{section.category} Category</h2>
                  <p className="text-sm text-muted-foreground mt-1">{section.students.length} students</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-background/50">
                        <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Name</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Email</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Merit Score</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Program</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.students.map((student) => (
                        <tr
                          key={student.id}
                          className="border-b border-border hover:bg-background/30 transition-colors"
                        >
                          <td className="px-6 py-4 text-foreground font-medium">{student.name}</td>
                          <td className="px-6 py-4 text-muted-foreground text-sm">{student.email}</td>
                          <td className="px-6 py-4 text-foreground font-semibold">{student.merit}%</td>
                          <td className="px-6 py-4 text-muted-foreground text-sm">{student.program}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                                student.status,
                              )}`}
                            >
                              {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                                <Eye className="w-4 h-4 text-primary" />
                              </button>
                              <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                                <Edit2 className="w-4 h-4 text-primary" />
                              </button>
                              <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </AdminLayout>
  )
}
