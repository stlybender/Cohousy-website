'use client'

import { useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Star, ExternalLink, BadgeCheck } from 'lucide-react'
import { staggerContainer, fadeInUp, withMotion } from '@/lib/motion'
import { orderReviews, GOOGLE_RATING, type Review } from '@/lib/reviews'
import GoogleLogo from '@/components/GoogleLogo'

/**
 * The site's single reviews section. Every page uses this — there is no
 * page-local testimonial data anywhere, by design: the reviews shown here are
 * real Google reviews from one listing, and the only way to keep that true is
 * to have exactly one place they can come from (`src/lib/reviews.ts`).
 *
 * Pages theme it through props rather than forking it. If you need a variant,
 * add a prop; do not copy this file.
 */
export interface GoogleReviewsProps {
  /** Small all-caps pill above the heading. */
  eyebrow?: string
  /** Section heading. Pass JSX to colour part of it with the page's accent. */
  heading?: ReactNode
  /** Sentence under the heading. */
  intro?: string
  /** Reviewer name to show first — see LEAD_BY_PAGE in @/lib/reviews. */
  lead?: string
  /** Section band class, e.g. 'bg-white', 'bg-gray-50', 'bg-pink-50'.
   *  Match whatever the section it replaces used, so the page rhythm holds. */
  bg?: string
  /** Accent text colour class, e.g. 'text-pink-600'. Defaults to the site accent. */
  accentText?: string
  /** Primary button classes, e.g. 'bg-pink-600 text-white'. */
  accentBtn?: string
  /** Avatar fallback-initial background, e.g. 'bg-pink-600 text-white'. */
  accentAvatar?: string
  /** Hover colour for the reviewer-name link, e.g. 'hover:text-pink-600'. */
  accentHover?: string
}

/** Fixed-size avatar that degrades to the reviewer's initial.
 *  The wrapper is sized and clipped so a missing image can never spill alt text
 *  into the layout — which is exactly what happened when these were hotlinked
 *  from Google's CDN and it started returning 429s. */
function Avatar({
  src,
  name,
  accentAvatar,
}: {
  src: string
  name: string
  accentAvatar: string
}) {
  const [failed, setFailed] = useState(false)

  return (
    <span className="relative block h-11 w-11 shrink-0">
      <span
        className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full text-lg font-bold ${accentAvatar}`}
      >
        {failed || !src ? (
          name.charAt(0).toUpperCase()
        ) : (
          <Image
            src={src}
            alt={`${name}, Google reviewer`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </span>
      {/* Google mark on the avatar, the way Google's own review cards do it */}
      <span className="absolute -bottom-1 -right-1 rounded-full bg-white p-0.5 shadow-sm">
        <GoogleLogo size={14} />
      </span>
    </span>
  )
}

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rating
              ? 'text-[#FBBC05] fill-[#FBBC05]'
              : 'text-gray-200 fill-gray-200'
          }
        />
      ))}
    </div>
  )
}

export default function GoogleReviews({
  eyebrow = 'REVIEWS FROM GOOGLE',
  heading,
  intro = 'Not testimonials we wrote — real Google reviews, published by residents under their own names. Every one is clickable, so you can verify it yourself.',
  lead,
  bg = 'bg-gray-50',
  accentText = 'text-accent',
  accentBtn = 'bg-accent text-black',
  accentAvatar = 'bg-accent text-black',
  accentHover = 'hover:text-accent',
}: GoogleReviewsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-10%' })
  const reviews: Review[] = orderReviews(lead)

  const defaultHeading = (
    <>
      What Residents Say<span className={accentText}> on Google</span>
    </>
  )

  return (
    <section
      ref={containerRef}
      className={`py-section relative overflow-hidden ${bg}`}
    >
      <div className="container mx-auto px-6">

        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={withMotion(fadeInUp)} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-wider text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
              <GoogleLogo size={16} />
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2
            variants={withMotion(fadeInUp)}
            className="text-display-lg font-bold text-black mb-6"
          >
            {heading ?? defaultHeading}
          </motion.h2>

          <motion.p
            variants={withMotion(fadeInUp)}
            className="text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto"
          >
            {intro}
          </motion.p>
        </motion.div>

        {/* Rating summary — styled to read like the Google listing card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <GoogleLogo size={48} className="shrink-0" />
              <div>
                <div className="text-sm text-gray-500 mb-1">Cohousy · Kharadi, Pune</div>
                <div className="flex items-center gap-3">
                  <span className="text-5xl font-bold text-black leading-none">
                    {GOOGLE_RATING.value}
                  </span>
                  <div>
                    <Stars rating={5} size={18} />
                    <div className="text-sm text-gray-600 mt-1">
                      Based on {GOOGLE_RATING.count} Google reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_RATING.mapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 ${accentBtn}`}
              >
                Read all {GOOGLE_RATING.count} reviews
                <ExternalLink size={16} />
              </a>
              <a
                href={GOOGLE_RATING.writeReviewUri}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Write a review
              </a>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <motion.div
          variants={withMotion(staggerContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.article
              key={review.authorUri}
              variants={withMotion(fadeInUp)}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <Avatar
                  src={review.photo}
                  name={review.name}
                  accentAvatar={accentAvatar}
                />

                <div className="min-w-0">
                  <a
                    href={review.authorUri}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`font-bold text-black transition-colors duration-300 block truncate ${accentHover}`}
                  >
                    {review.name}
                  </a>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                    <BadgeCheck size={13} className="text-[#4285F4]" />
                    Google review · {review.when}
                  </div>
                </div>
              </div>

              <Stars rating={review.rating} />

              <blockquote className="text-sm text-gray-600 leading-relaxed mt-3 flex-1">
                {review.text}
              </blockquote>
            </motion.article>
          ))}

          {/* Card that sends people to the full listing rather than padding with filler */}
          <motion.a
            variants={withMotion(fadeInUp)}
            href={GOOGLE_RATING.mapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center hover:border-gray-400 transition-all duration-500"
          >
            <GoogleLogo size={32} className="mb-3" />
            <div className={`font-bold text-black transition-colors duration-300 ${accentHover}`}>
              + {GOOGLE_RATING.count - reviews.length} more reviews
            </div>
            <p className="text-sm text-gray-500 mt-1">Read them all on Google Maps</p>
            <ExternalLink
              size={16}
              className="text-gray-400 transition-colors duration-300 mt-3"
            />
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          Reviews are published on Google by residents and shown here unedited. Ratings last
          checked {new Date(GOOGLE_RATING.pulledOn).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}.
        </motion.p>
      </div>
    </section>
  )
}
