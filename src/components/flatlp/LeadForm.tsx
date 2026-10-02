'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, ArrowLeft, Lock } from 'lucide-react'
import { AUDIENCES, formatRupees, type Audience, type FlatConfig } from './types'
import { sendLead, track } from './leads'

type Variant = 'stepped' | 'quick' | 'visit'

const MOVE_IN = ['This month', 'Next month', 'Just exploring']
const VISIT_DAYS = ['Any weekday', 'Saturday', 'Sunday']

const SERVICE: Record<Variant, string> = {
  stepped: 'Flat Availability Enquiry',
  quick: 'Exact Price Request',
  visit: 'Site Visit Request',
}

const inputCls =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-black placeholder-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30'

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? 'border-accent bg-accent text-black'
          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
      }`}
    >
      {children}
    </button>
  )
}

export default function LeadForm({
  config,
  variant,
  audience,
  onAudienceChange,
  submitLabel,
}: {
  config: FlatConfig
  variant: Variant
  /** Controlled audience, so "Enquire as a family" buttons elsewhere can preselect it. */
  audience?: Audience | null
  onAudienceChange?: (a: Audience) => void
  submitLabel?: string
}) {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2>(variant === 'stepped' ? 1 : 2)
  const [localAudience, setLocalAudience] = useState<Audience | null>(null)
  const [moveIn, setMoveIn] = useState('')
  const [visitDay, setVisitDay] = useState(VISIT_DAYS[0])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const who = audience ?? localAudience
  const setWho = (a: Audience) => {
    setLocalAudience(a)
    onAudienceChange?.(a)
  }
  const whoLabel = AUDIENCES.find((a) => a.id === who)?.label

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await sendLead({
        name,
        phone,
        serviceType: SERVICE[variant],
        propertyName: `${config.unit} ${config.area}, from ${formatRupees(config.price)}/month (ads page)`,
        details: [
          whoLabel && `Moving in: ${whoLabel}`,
          moveIn && `Move-in: ${moveIn}`,
          variant === 'visit' && `Preferred visit day: ${visitDay}`,
          variant === 'quick' && 'Asked for the exact price on WhatsApp',
        ].filter(Boolean) as string[],
      })
      track('flat_lead_submit', { unit: config.unit, form: variant })
      router.push('/thank-you')
    } catch {
      setError('Something went wrong. Please try again, or call us.')
      setLoading(false)
    }
  }

  if (step === 1) {
    return (
      <div>
        <p className="mb-3 text-sm font-semibold text-black">Who&apos;s moving in?</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {AUDIENCES.map((a) => (
            <Chip key={a.id} active={who === a.id} onClick={() => setWho(a.id)}>
              {a.label}
            </Chip>
          ))}
        </div>
        <p className="mb-3 text-sm font-semibold text-black">When do you want to move?</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {MOVE_IN.map((m) => (
            <Chip key={m} active={moveIn === m} onClick={() => setMoveIn(m)}>
              {m}
            </Chip>
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            setStep(2)
            track('flat_form_step', { unit: config.unit, step: '2' })
          }}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-black transition-all duration-300 hover:shadow-lg"
        >
          Next: check availability <ArrowRight size={18} />
        </button>
        <p className="mt-3 text-center text-xs text-gray-500">Step 1 of 2. Takes 20 seconds.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit}>
      {variant === 'stepped' && (
        <button
          type="button"
          onClick={() => setStep(1)}
          className="mb-4 flex items-center gap-1 text-sm text-gray-500 hover:text-black"
        >
          <ArrowLeft size={14} /> Back
        </button>
      )}
      <div className="grid gap-3">
        <label className="sr-only" htmlFor={`${variant}-name`}>
          Your name
        </label>
        <input
          id={`${variant}-name`}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputCls}
          placeholder="Your name"
          autoComplete="name"
        />
        <label className="sr-only" htmlFor={`${variant}-phone`}>
          WhatsApp number
        </label>
        <input
          id={`${variant}-phone`}
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputCls}
          placeholder="WhatsApp number"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9+\-\s]{10,16}"
          title="Please enter a 10-digit mobile number"
        />
        {variant === 'visit' && (
          <div>
            <p className="mb-2 mt-1 text-sm font-semibold text-black">Best day for a visit</p>
            <div className="flex flex-wrap gap-2">
              {VISIT_DAYS.map((d) => (
                <Chip key={d} active={visitDay === d} onClick={() => setVisitDay(d)}>
                  {d}
                </Chip>
              ))}
            </div>
          </div>
        )}
      </div>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-black transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? 'Sending...' : (submitLabel ?? 'Check availability')}
        {!loading && <ArrowRight size={18} />}
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-500">
        <Lock size={12} /> Only the Cohousy team sees your number. No brokers, no spam.
      </p>
    </form>
  )
}
