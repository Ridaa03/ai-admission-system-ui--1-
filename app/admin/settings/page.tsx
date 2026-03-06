"use client"

import AdminLayout from "@/components/layouts/admin-layout"
import { Settings, Users, Lock } from "lucide-react"

export default function AdminSettings() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage system configuration and user roles</p>
        </div>

        <div className="space-y-6">
          {/* System Settings */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">System Configuration</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Application Deadline</label>
                <input
                  type="date"
                  defaultValue="2025-03-10"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Merit List Publication Date</label>
                <input
                  type="date"
                  defaultValue="2025-03-15"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                />
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Save Configuration
              </button>
            </div>
          </div>

          {/* User Management */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-accent" />
              <h2 className="text-lg font-semibold text-foreground">User Management</h2>
            </div>
            <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-dark transition-colors">
              Add New Administrator
            </button>
          </div>

          {/* Security */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-warning" />
              <h2 className="text-lg font-semibold text-foreground">Security</h2>
            </div>
            <button className="px-6 py-2 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-background transition-colors">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
