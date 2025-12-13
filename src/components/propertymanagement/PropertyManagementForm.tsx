'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare, Home, X, Sparkles, Building, MapPin, DollarSign } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

interface PropertyManagementFormData {
  name: string
  email: string
  phone: string
  city: string
  propertyType: string
  furnishing: string
  occupancyStatus: string
  expectedRent: string
  notes: string
  serviceType: string
}

interface PropertyManagementFormProps {
  trigger: React.ReactNode
  title?: string
  description?: string
}

export default function PropertyManagementForm({
  trigger,
  title = "Get Property Management Quote",
  description = "Share your property details and we'll provide a customized management plan."
}: PropertyManagementFormProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState<PropertyManagementFormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    propertyType: '',
    furnishing: '',
    occupancyStatus: '',
    expectedRent: '',
    notes: '',
    serviceType: 'Property Management'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
  
    try {
      // Format the message to include all property details
      const detailedMessage = `
Property Management Request:

Property Details:
- City: ${formData.city}
- Property Type: ${formData.propertyType}
- Furnishing: ${formData.furnishing}
- Occupancy Status: ${formData.occupancyStatus}
- Expected Rent: ₹${formData.expectedRent}

Additional Notes:
${formData.notes || 'None'}
      `.trim()

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: detailedMessage,
          serviceType: formData.serviceType,
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
        city: '',
        propertyType: '',
        furnishing: '',
        occupancyStatus: '',
        expectedRent: '',
        notes: '',
        serviceType: 'Property Management'
      })
  
      // Wait 3 seconds, close dialog, then redirect
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
      city: '',
      propertyType: '',
      furnishing: '',
      occupancyStatus: '',
      expectedRent: '',
      notes: '',
      serviceType: 'Property Management'
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
      <DialogContent className="m-auto flex justify-center max-h-screen p-0 gap-0 bg-white border-0 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl overflow-y-scroll max-w-2xl">
        <div className="relative w-full">
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
                    PROPERTY MANAGEMENT SERVICES
                  </div>
                </div>
              </div>
              <p className="text-sm text-black/90 font-medium leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Form Content */}
          <div className="px-8 py-6">
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
                    Request Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest. Our property management team will reach out within 24 hours.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800">
                      We'll send you a detailed quote and schedule a property inspection.
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
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      Contact Information
                    </div>

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
                          Phone / WhatsApp
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
                  </div>

                  {/* Property Details */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <div className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      Property Details
                    </div>

                    {/* City and Property Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                          <MapPin size={14} className="text-gray-500" />
                          City
                        </Label>
                        <select
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select city</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Pune">Pune</option>
                          <option value="Mumbai">Mumbai (Coming Soon)</option>
                          <option value="Hyderabad">Hyderabad (Coming Soon)</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="propertyType" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                          <Building size={14} className="text-gray-500" />
                          Property Type
                        </Label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          required
                          value={formData.propertyType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select type</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Villa">Villa</option>
                          <option value="Independent House">Independent House</option>
                          <option value="Multiple Units">Multiple Units</option>
                        </select>
                      </div>
                    </div>

                    {/* Furnishing and Occupancy */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="furnishing" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                          <Home size={14} className="text-gray-500" />
                          Furnishing
                        </Label>
                        <select
                          id="furnishing"
                          name="furnishing"
                          required
                          value={formData.furnishing}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select furnishing</option>
                          <option value="Unfurnished">Unfurnished</option>
                          <option value="Semi-furnished">Semi-furnished</option>
                          <option value="Fully furnished">Fully furnished</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="occupancyStatus" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                          <CheckCircle size={14} className="text-gray-500" />
                          Occupancy Status
                        </Label>
                        <select
                          id="occupancyStatus"
                          name="occupancyStatus"
                          required
                          value={formData.occupancyStatus}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select status</option>
                          <option value="Vacant">Vacant</option>
                          <option value="Occupied">Occupied</option>
                        </select>
                      </div>
                    </div>

                    {/* Expected Rent */}
                    <div className="space-y-2">
                      <Label htmlFor="expectedRent" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                        <DollarSign size={14} className="text-gray-500" />
                        Expected Monthly Rent (₹)
                      </Label>
                      <input
                        id="expectedRent"
                        name="expectedRent"
                        type="number"
                        required
                        value={formData.expectedRent}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white"
                        placeholder="25000"
                      />
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                        <MessageSquare size={14} className="text-gray-500" />
                        Additional Notes (Optional)
                      </Label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white resize-none"
                        placeholder="Any specific requirements or concerns..."
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
                            Submit Request
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
    </Dialog>
  )
}

