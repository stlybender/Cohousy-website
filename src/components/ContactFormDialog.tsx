'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare, Calendar as CalendarIcon, Home, X, Sparkles } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  serviceType: string
  preferredDate?: Date
  propertyName?: string
}

interface ContactFormDialogProps {
  trigger: React.ReactNode
  title?: string
  description?: string
  serviceType: string
  propertyName?: string
}

export default function ContactFormDialog({
  trigger,
  title = "Get in Touch",
  description = "Fill out the form below and we'll get back to you within 24 hours.",
  serviceType,
  propertyName
}: ContactFormDialogProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [dateOpen, setDateOpen] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType,
    propertyName: propertyName || ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDateSelect = (date: Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      preferredDate: date
    }))
    setDateOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          preferredDate: formData.preferredDate ? formData.preferredDate.toISOString() : undefined
        }),
      })
  
      if (!response.ok) {
        throw new Error('Failed to send message')
      }
  
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        serviceType,
        propertyName: propertyName || ''
      })
  
      // ✅ Wait 3 seconds, close dialog, then redirect
      setTimeout(() => {
        setOpen(false)
        setSuccess(false)
        window.location.href = '/thank-you'
      }, 3000)
  
    } catch (error) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      serviceType,
      propertyName: propertyName || ''
    })
    setError('')
    setSuccess(false)
  }

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (!isOpen) {
      resetForm()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="m-auto flex justify-center max-h-screen p-0  gap-0 bg-white border-0 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl  overflow-y-scroll">
        <div className="relative">
          {/* Premium Orange Header */}
          <div className="relative bg-gradient-to-br from-accent via-orange-400 to-amber-400 p-6 text-black overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8" />

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1.5 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <X size={16} className="text-black/70" />
            </button>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Sparkles size={16} className="text-black" />
                </div>
                <div>
                  <DialogTitle className="text-xl font-bold text-black leading-tight">
                    {title}
                  </DialogTitle>
                  <div className="text-xs text-black/80 font-medium tracking-wide">
                    PREMIUM EXPERIENCE AWAITS
                  </div>
                </div>
              </div>
              <p className="text-sm text-black/90 font-medium leading-relaxed">
                {description}
              </p>
            </div>



        </div>

        {/* Form Content */}
        <div className="px-8 py-6 m-auto flex justify-center">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest. We'll reach out within 24 hours.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    We'll send you detailed information and schedule a personalized tour.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Property Info Banner */}
                {propertyName && (
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Home size={16} className="text-accent" />
                      <span className="text-sm font-medium text-gray-700">
                        Property Inquiry
                      </span>
                    </div>
                    <p className="font-semibold text-gray-900">{propertyName}</p>
                  </div>
                )}

                {/* Form Fields */}
                <div className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                      <User size={14} className="text-gray-500" />
                      Full Name
                    </Label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                        <Mail size={14} className="text-gray-500" />
                        Email
                      </Label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                        <Phone size={14} className="text-gray-500" />
                        Phone
                      </Label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  {/* Service Type and Date Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Type (if not property specific) */}
                    {!propertyName && (
                      <div className="space-y-2">
                        <Label htmlFor="serviceType" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                          <Home size={14} className="text-gray-500" />
                          Service
                        </Label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white appearance-none cursor-pointer"
                        >
                          <option value="Co-living">Co-living Spaces</option>
                          <option value="Long-term Rentals">Long-term Rentals</option>
                          <option value="Short-term Rentals">Short-term Rentals</option>
                          <option value="PG near Eon IT Park">PG near Eon IT Park</option>
                          <option value="Single Room PG">Single Room PG</option>
                        </select>
                      </div>
                    )}

                    {/* Date Picker */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
                        <CalendarIcon size={14} className="text-gray-500" />
                        Move-in Date
                      </Label>
                      <Popover open={dateOpen} onOpenChange={setDateOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal h-12 px-4",
                              !formData.preferredDate && "text-gray-500"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.preferredDate ? format(formData.preferredDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.preferredDate}
                            onSelect={handleDateSelect}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0))
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                      <MessageSquare size={14} className="text-gray-500" />
                      Message
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-700 text-sm bg-red-50 border border-red-200 p-3 rounded-lg"
                  >
                    <AlertCircle size={16} />
                    {error}
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-accent to-orange-400 text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-accent/25 transform hover:scale-[1.02] disabled:hover:scale-100 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <div className="relative z-10 flex items-center gap-2">
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            →
                          </motion.span>
                        </>
                      )}
                    </div>
                  </button>
                </div>

                {/* Privacy Notice */}
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500">
                    🔒 Your information is secure and will never be shared with third parties
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </DialogContent>
    </Dialog >
  )
}
