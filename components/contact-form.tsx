'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission (replace with actual API call if needed)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In production, send to your backend:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="p-4 bg-accent/20 border border-accent rounded-lg flex items-center gap-3">
          <CheckCircle className="text-accent flex-shrink-0" size={24} />
          <div>
            <p className="font-semibold text-accent">Message Sent!</p>
            <p className="text-sm text-muted-foreground">We&apos;ll get back to you soon.</p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-foreground">
          Project Type / Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="e.g., Character Design, Environment Art, Full Game Assets"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project, timeline, budget, and specific requirements..."
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold hover:shadow-2xl hover:shadow-accent/50 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-lg"
      >
        <Send size={20} />
        {loading ? 'Sending...' : 'Send Project Inquiry'}
      </button>

      <p className="text-center text-sm text-muted-foreground">
        We typically respond within 24 hours during business days
      </p>
    </form>
  )
}
