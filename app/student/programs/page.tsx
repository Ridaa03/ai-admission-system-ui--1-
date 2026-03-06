"use client"

import type React from "react"

import { useState } from "react"
import StudentLayout from "@/components/layouts/student-layout"
import { GripVertical, Trash2, Plus, Info, Users, BookOpen } from "lucide-react"

interface Program {
  id: number
  name: string
  priority?: number
  seats: number
  filled: number
  merit: number
  description: string
}

export default function ProgramSelectionPage() {
  const [selectedPrograms, setSelectedPrograms] = useState<Program[]>([
    {
      id: 1,
      name: "BS Computer Science",
      priority: 1,
      seats: 45,
      filled: 32,
      merit: 80,
      description: "Core computer science fundamentals and advanced topics",
    },
    {
      id: 2,
      name: "BS Software Engineering",
      priority: 2,
      seats: 30,
      filled: 24,
      merit: 82,
      description: "Software development lifecycle and engineering practices",
    },
  ])

  const [availablePrograms] = useState<Program[]>([
    {
      id: 3,
      name: "BS Information Technology",
      seats: 25,
      filled: 23,
      merit: 85,
      description: "IT infrastructure and systems management",
    },
    {
      id: 4,
      name: "BS Data Science",
      seats: 20,
      filled: 15,
      merit: 84,
      description: "Data analysis, machine learning, and AI applications",
    },
    {
      id: 5,
      name: "BS Artificial Intelligence",
      seats: 15,
      filled: 12,
      merit: 86,
      description: "Advanced AI, neural networks, and intelligent systems",
    },
  ])

  const [draggedItem, setDraggedItem] = useState<number | null>(null)
  const [selectedInfo, setSelectedInfo] = useState<number | null>(null)

  const addProgram = (program: Program) => {
    if (!selectedPrograms.find((p) => p.id === program.id)) {
      setSelectedPrograms([...selectedPrograms, { ...program, priority: selectedPrograms.length + 1 }])
    }
  }

  const removeProgram = (id: number) => {
    const updated = selectedPrograms.filter((p) => p.id !== id)
    setSelectedPrograms(
      updated.map((p, idx) => ({
        ...p,
        priority: idx + 1,
      })),
    )
  }

  const handleDragStart = (id: number) => {
    setDraggedItem(id)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (targetId: number) => {
    if (draggedItem === null || draggedItem === targetId) return

    const draggedIndex = selectedPrograms.findIndex((p) => p.id === draggedItem)
    const targetIndex = selectedPrograms.findIndex((p) => p.id === targetId)

    const newPrograms = [...selectedPrograms]
    ;[newPrograms[draggedIndex], newPrograms[targetIndex]] = [newPrograms[targetIndex], newPrograms[draggedIndex]]

    setSelectedPrograms(
      newPrograms.map((p, idx) => ({
        ...p,
        priority: idx + 1,
      })),
    )
    setDraggedItem(null)
  }

  const getAvailablePrograms = () => {
    return availablePrograms.filter((ap) => !selectedPrograms.find((sp) => sp.id === ap.id))
  }

  const getSeatPercentage = (filled: number, seats: number) => {
    return Math.round((filled / seats) * 100)
  }

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Program Selection</h1>
          <p className="text-muted-foreground mt-2">Select and prioritize your preferred programs</p>
        </div>

        {/* Info Box */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 flex gap-4">
          <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">How to Select Programs</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• You can select up to 5 programs in order of preference</li>
              <li>• Drag programs to reorder by priority</li>
              <li>• Your first choice has the highest priority in merit list</li>
              <li>• You can change your preferences until the deadline</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Selected Programs */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-semibold text-foreground">Your Preferences</h2>
                <p className="text-sm text-muted-foreground mt-1">{selectedPrograms.length} of 5 programs selected</p>
              </div>

              {selectedPrograms.length === 0 ? (
                <div className="p-12 text-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">No programs selected yet. Add programs from the list.</p>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {selectedPrograms.map((program) => (
                    <div
                      key={program.id}
                      draggable
                      onDragStart={() => handleDragStart(program.id)}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop(program.id)}
                      className="p-6 flex items-center gap-4 hover:bg-background/30 transition-colors group cursor-move"
                    >
                      <GripVertical className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                            {program.priority}
                          </span>
                          <p className="font-semibold text-foreground">{program.name}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{program.description}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Users className="w-3 h-3" />
                            {program.filled}/{program.seats} seats
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            Merit: {program.merit}%
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeProgram(program.id)}
                        className="p-2 hover:bg-destructive/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="w-5 h-5 text-destructive" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Available Programs */}
          <div>
            <div className="bg-card border border-border rounded-lg overflow-hidden sticky top-24">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">Available Programs</h2>
                <p className="text-xs text-muted-foreground mt-1">{getAvailablePrograms().length} programs available</p>
              </div>

              {getAvailablePrograms().length === 0 ? (
                <div className="p-6 text-center">
                  <p className="text-sm text-muted-foreground">All programs selected</p>
                </div>
              ) : (
                <div className="divide-y divide-border max-h-96 overflow-y-auto">
                  {getAvailablePrograms().map((program) => (
                    <div key={program.id} className="p-4 hover:bg-background/30 transition-colors group">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-medium text-foreground">{program.name}</p>
                        <button
                          onClick={() => addProgram(program)}
                          className="p-1 hover:bg-primary/10 rounded transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <Plus className="w-4 h-4 text-primary" />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{program.description}</p>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            Seats: {program.filled}/{program.seats}
                          </span>
                          <span className="text-muted-foreground">
                            {getSeatPercentage(program.filled, program.seats)}%
                          </span>
                        </div>
                        <div className="w-full bg-background rounded-full h-1.5">
                          <div
                            className="h-1.5 rounded-full bg-primary"
                            style={{
                              width: `${getSeatPercentage(program.filled, program.seats)}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
            disabled={selectedPrograms.length === 0}
          >
            Save Preferences
          </button>
          <button className="flex-1 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-background transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </StudentLayout>
  )
}
