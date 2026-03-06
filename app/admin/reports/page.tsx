"use client"

import { useState } from "react"
import AdminLayout from "@/components/layouts/admin-layout"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Download, Filter, TrendingUp, Users, BookOpen, Award } from "lucide-react"

export default function ReportsPage() {
  const [reportType, setReportType] = useState("overview")
  const [dateRange, setDateRange] = useState("month")

  const [subjectPerformance] = useState([
    { subject: "Mathematics", passRate: 87, failRate: 13 },
    { subject: "Physics", passRate: 82, failRate: 18 },
    { subject: "Chemistry", passRate: 85, failRate: 15 },
    { subject: "English", passRate: 90, failRate: 10 },
    { subject: "Urdu", passRate: 92, failRate: 8 },
  ])

  const [percentageDistribution] = useState([
    { range: "90-100", count: 45 },
    { range: "80-89", count: 128 },
    { range: "70-79", count: 215 },
    { range: "60-69", count: 98 },
    { range: "Below 60", count: 34 },
  ])

  const [programComparison] = useState([
    { program: "CS", applications: 320, admitted: 85, rate: 26.6 },
    { program: "SE", applications: 280, admitted: 70, rate: 25.0 },
    { program: "IT", applications: 210, admitted: 52, rate: 24.8 },
    { program: "DS", applications: 180, admitted: 45, rate: 25.0 },
  ])

  const [categoryDistribution] = useState([
    { name: "Merit", value: 245, color: "#06b6d4" },
    { name: "Quota", value: 128, color: "#10b981" },
    { name: "Self-Finance", value: 87, color: "#f59e0b" },
  ])

  const [monthlyTrend] = useState([
    { month: "Jan", applications: 120, admitted: 45, rejected: 30 },
    { month: "Feb", applications: 280, admitted: 95, rejected: 65 },
    { month: "Mar", applications: 450, admitted: 180, rejected: 120 },
    { month: "Apr", applications: 380, admitted: 160, rejected: 100 },
  ])

  const summaryStats = [
    {
      label: "Average Merit Score",
      value: "82.4%",
      change: "+1.2%",
      icon: TrendingUp,
    },
    {
      label: "Total Students",
      value: "520",
      change: "+8.5%",
      icon: Users,
    },
    {
      label: "Programs Offered",
      value: "12",
      change: "No change",
      icon: BookOpen,
    },
    {
      label: "Admission Rate",
      value: "31.5%",
      change: "+2.1%",
      icon: Award,
    },
  ]

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-muted-foreground mt-2">Detailed insights into admission trends and performance</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-4 flex flex-wrap items-center gap-4">
          <Filter className="w-5 h-5 text-muted-foreground" />

          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
          >
            <option value="overview">Overview Report</option>
            <option value="program">Program Performance</option>
            <option value="category">Category Analysis</option>
            <option value="trend">Trend Analysis</option>
          </select>

          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>

          <select className="px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm">
            <option>All Programs</option>
            <option>BS Computer Science</option>
            <option>BS Software Engineering</option>
          </select>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryStats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                  <Icon className="w-5 h-5 text-primary opacity-20" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-xs text-accent font-semibold">{stat.change}</p>
              </div>
            )
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Subject Performance */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Subject-wise Pass Rate</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="subject" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                  }}
                />
                <Legend />
                <Bar dataKey="passRate" fill="#10b981" name="Pass Rate %" />
                <Bar dataKey="failRate" fill="#ef4444" name="Fail Rate %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Merit Score Distribution */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Merit Score Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={percentageDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="range" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                  }}
                />
                <Bar dataKey="count" fill="#06b6d4" name="Number of Students" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Program Comparison & Category Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Program Comparison */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Program Comparison</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={programComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="program" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                  }}
                />
                <Legend />
                <Bar dataKey="applications" fill="#06b6d4" name="Applications" />
                <Bar dataKey="admitted" fill="#10b981" name="Admitted" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Category Distribution */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Category Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Trend */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">Monthly Admission Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="applications" stroke="#06b6d4" strokeWidth={2} name="Applications" />
              <Line type="monotone" dataKey="admitted" stroke="#10b981" strokeWidth={2} name="Admitted" />
              <Line type="monotone" dataKey="rejected" stroke="#ef4444" strokeWidth={2} name="Rejected" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed Statistics Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Detailed Statistics</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-background/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Metric</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Value</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Change</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-background/30 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">Total Applications</td>
                  <td className="px-6 py-4 text-foreground font-semibold">1,460</td>
                  <td className="px-6 py-4 text-accent text-sm">+12.5%</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                      Increasing
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-background/30 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">Admission Rate</td>
                  <td className="px-6 py-4 text-foreground font-semibold">31.5%</td>
                  <td className="px-6 py-4 text-accent text-sm">+2.1%</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                      Healthy
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-background/30 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">Average Merit Score</td>
                  <td className="px-6 py-4 text-foreground font-semibold">82.4%</td>
                  <td className="px-6 py-4 text-accent text-sm">+1.2%</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                      Improving
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-background/30 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">Overall Pass Rate</td>
                  <td className="px-6 py-4 text-foreground font-semibold">87.3%</td>
                  <td className="px-6 py-4 text-accent text-sm">+2.1%</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                      Excellent
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
