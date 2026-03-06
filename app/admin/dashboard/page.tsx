"use client"

import { useState } from "react"
import AdminLayout from "@/components/layouts/admin-layout"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"
import { Users, FileText, TrendingUp, Award, Filter, Download, RefreshCw } from "lucide-react"

export default function AdminDashboard() {
  const [dateRange, setDateRange] = useState("month")
  const [selectedProgram, setSelectedProgram] = useState("all")

  const [applicationStats] = useState([
    { category: "Merit", value: 245, color: "#06b6d4" },
    { category: "Quota", value: 128, color: "#10b981" },
    { category: "Self-Finance", value: 87, color: "#f59e0b" },
  ])

  const [trendData] = useState([
    { month: "Jan", applications: 120, admitted: 45, rejected: 30, pending: 45 },
    { month: "Feb", applications: 280, admitted: 95, rejected: 65, pending: 120 },
    { month: "Mar", applications: 450, admitted: 180, rejected: 120, pending: 150 },
    { month: "Apr", applications: 380, admitted: 160, rejected: 100, pending: 120 },
  ])

  const [programData] = useState([
    { program: "CS", applications: 320, admitted: 85, pending: 120, rejected: 115 },
    { program: "SE", applications: 280, admitted: 70, pending: 105, rejected: 105 },
    { program: "IT", applications: 210, admitted: 52, pending: 85, rejected: 73 },
    { program: "DS", applications: 180, admitted: 45, pending: 70, rejected: 65 },
  ])

  const [conversionData] = useState([
    { program: "CS", conversionRate: 26.6 },
    { program: "SE", conversionRate: 25.0 },
    { program: "IT", conversionRate: 24.8 },
    { program: "DS", conversionRate: 25.0 },
  ])

  const stats = [
    {
      label: "Total Applications",
      value: "1,460",
      change: "+12.5%",
      icon: FileText,
      color: "text-primary",
    },
    {
      label: "Admitted Students",
      value: "460",
      change: "+8.2%",
      icon: Users,
      color: "text-accent",
    },
    {
      label: "Admission Rate",
      value: "31.5%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      label: "Pending Review",
      value: "245",
      change: "-5.3%",
      icon: Award,
      color: "text-warning",
    },
  ]

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header with Controls */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage admissions and view real-time analytics</p>
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
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>

          <select
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
          >
            <option value="all">All Programs</option>
            <option value="cs">BS Computer Science</option>
            <option value="se">BS Software Engineering</option>
            <option value="it">BS Information Technology</option>
            <option value="ds">BS Data Science</option>
          </select>

          <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg text-foreground hover:bg-background/80 transition-colors text-sm">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                  <Icon className={`w-5 h-5 ${stat.color} opacity-20`} />
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <span className="text-xs font-semibold text-accent">{stat.change}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Application Trend */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Application Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorApplications" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="applications"
                  stroke="#06b6d4"
                  fillOpacity={1}
                  fill="url(#colorApplications)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Category Distribution */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Admissions by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={applicationStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, value }) => `${category}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {applicationStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Program Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Applications by Program */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Applications by Program</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={programData}>
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
                <Bar dataKey="applications" fill="#06b6d4" />
                <Bar dataKey="admitted" fill="#10b981" />
                <Bar dataKey="rejected" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Conversion Rate */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Conversion Rate by Program</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="program" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                  }}
                />
                <Bar dataKey="conversionRate" fill="#f59e0b" name="Conversion %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Application Status Breakdown */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">Application Status Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
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
              <Line type="monotone" dataKey="admitted" stroke="#10b981" strokeWidth={2} name="Admitted" />
              <Line type="monotone" dataKey="pending" stroke="#06b6d4" strokeWidth={2} name="Pending" />
              <Line type="monotone" dataKey="rejected" stroke="#ef4444" strokeWidth={2} name="Rejected" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground text-sm mb-2">Average Merit Score</p>
            <p className="text-3xl font-bold text-foreground">82.4%</p>
            <p className="text-xs text-accent mt-2">+1.2% from last month</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground text-sm mb-2">Highest Score</p>
            <p className="text-3xl font-bold text-accent">98.5%</p>
            <p className="text-xs text-muted-foreground mt-2">BS Computer Science</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground text-sm mb-2">Lowest Score</p>
            <p className="text-3xl font-bold text-foreground">45.2%</p>
            <p className="text-xs text-muted-foreground mt-2">BS Data Science</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground text-sm mb-2">Overall Pass Rate</p>
            <p className="text-3xl font-bold text-accent">87.3%</p>
            <p className="text-xs text-accent mt-2">+2.1% from last month</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
