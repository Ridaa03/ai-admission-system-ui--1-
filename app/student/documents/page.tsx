"use client"

import type React from "react"

import { useState } from "react"
import StudentLayout from "@/components/layouts/student-layout"
import { Upload, FileCheck, AlertCircle, X, CheckCircle2, Clock } from "lucide-react"

interface Document {
  id: number
  name: string
  status: "verified" | "pending" | "rejected"
  uploadDate: string
  size?: string
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([
    { id: 1, name: "CNIC Front", status: "verified", uploadDate: "2025-02-15", size: "2.4 MB" },
    { id: 2, name: "CNIC Back", status: "verified", uploadDate: "2025-02-15", size: "2.1 MB" },
    { id: 3, name: "Matric Certificate", status: "pending", uploadDate: "2025-02-16", size: "1.8 MB" },
  ])

  const [dragActive, setDragActive] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<{ [key: number]: number }>({})

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle2 className="w-4 h-4" />
      case "pending":
        return <Clock className="w-4 h-4" />
      case "rejected":
        return <AlertCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    // Handle file drop
  }

  const removeDocument = (id: number) => {
    setDocuments(documents.filter((doc) => doc.id !== id))
  }

  const requiredDocuments = [
    { name: "CNIC Front", required: true, uploaded: documents.some((d) => d.name === "CNIC Front") },
    { name: "CNIC Back", required: true, uploaded: documents.some((d) => d.name === "CNIC Back") },
    { name: "Matric Certificate", required: true, uploaded: documents.some((d) => d.name === "Matric Certificate") },
    { name: "Intermediate Certificate", required: true, uploaded: false },
    { name: "Character Certificate", required: false, uploaded: false },
  ]

  const uploadedCount = documents.length
  const requiredCount = requiredDocuments.filter((d) => d.required).length
  const completionPercentage = Math.round((uploadedCount / requiredCount) * 100)

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Upload Documents</h1>
          <p className="text-muted-foreground mt-2">Upload and verify your CNIC and academic certificates</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Document Completion</h3>
            <span className="text-sm font-bold text-primary">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-background rounded-full h-3">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            {uploadedCount} of {requiredCount} required documents uploaded
          </p>
        </div>

        {/* Upload Area */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`bg-card border-2 border-dashed rounded-lg p-12 text-center transition-all cursor-pointer ${
            dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary"
          }`}
        >
          <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Drag and drop your documents</h3>
          <p className="text-muted-foreground text-sm mb-4">or click to browse</p>
          <p className="text-xs text-muted-foreground">Supported formats: PDF, JPG, PNG (Max 5MB)</p>
        </div>

        {/* Required Documents Checklist */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-semibold text-foreground">Required Documents</h2>
          </div>

          <div className="divide-y divide-border">
            {requiredDocuments.map((doc, idx) => (
              <div key={idx} className="p-6 flex items-center justify-between hover:bg-background/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      doc.uploaded ? "bg-accent border-accent" : "border-border"
                    }`}
                  >
                    {doc.uploaded && <CheckCircle2 className="w-4 h-4 text-accent-foreground" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{doc.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{doc.required ? "Required" : "Optional"}</p>
                  </div>
                </div>
                {doc.uploaded && <CheckCircle2 className="w-5 h-5 text-accent" />}
              </div>
            ))}
          </div>
        </div>

        {/* Uploaded Documents */}
        {documents.length > 0 && (
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">Uploaded Documents</h2>
            </div>

            <div className="divide-y divide-border">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="p-6 flex items-center justify-between hover:bg-background/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <FileCheck className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">{doc.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Uploaded on {doc.uploadDate} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(doc.status)}`}
                    >
                      <div className="flex items-center gap-1">
                        {getStatusIcon(doc.status)}
                        {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                      </div>
                    </span>
                    <button
                      onClick={() => removeDocument(doc.id)}
                      className="p-2 hover:bg-background rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">Document Requirements</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Clear photos of both sides of your CNIC</li>
              <li>• Matric and Intermediate certificates</li>
              <li>• All documents must be clear and legible</li>
              <li>• OCR will automatically extract your information</li>
              <li>• Documents are verified within 24-48 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
