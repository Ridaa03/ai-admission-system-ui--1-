"use client"

import StudentLayout from "@/components/layouts/student-layout"
import { User, Lock, Bell } from "lucide-react"

export default function StudentSettings() {
  return (
    <StudentLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account and preferences</p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Profile Information</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                />
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-accent" />
              <h2 className="text-lg font-semibold text-foreground">Security</h2>
            </div>
            <button className="px-6 py-2 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-background transition-colors">
              Change Password
            </button>
          </div>

          {/* Notification Settings */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-6 h-6 text-warning" />
              <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
            </div>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-foreground">Email notifications for application updates</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-foreground">Merit list announcements</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
