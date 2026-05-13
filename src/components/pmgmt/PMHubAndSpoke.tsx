'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

// 8 service labels positioned compass-style around the center.
// Each entry: angle in degrees (0 = top, clockwise), label, optional radius offset.
type Node = { angle: number; label: string }

const NODES: Node[] = [
  { angle: 0,    label: 'Tenant sourcing' },
  { angle: 45,   label: 'Background verification' },
  { angle: 90,   label: 'Lease & legal' },
  { angle: 135,  label: 'Rent collection' },
  { angle: 180,  label: 'Maintenance' },
  { angle: 225,  label: 'Tax & GST' },
  { angle: 270,  label: 'Reports & dashboard' },
  { angle: 315,  label: 'A single number' },
]

// Diagram geometry (in SVG user units; viewBox below).
const W = 720
const H = 560
const CX = W / 2
const CY = H / 2
const R_X = 290 // horizontal radius
const R_Y = 200 // vertical radius (slight oval looks calmer than a circle)

function nodePosition(angle: number) {
  // 0 = top, clockwise
  const rad = ((angle - 90) * Math.PI) / 180
  return {
    x: CX + Math.cos(rad) * R_X,
    y: CY + Math.sin(rad) * R_Y,
  }
}

export default function PMHubAndSpoke() {
  return (
    <section className="relative bg-[#F6F4EF] py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 md:mb-20 max-w-2xl mx-auto text-center"
        >
          <p className="mb-4 text-[11px] tracking-[0.32em] uppercase text-gray-500">
            How it all connects
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
            Eight services. One home.{' '}
            <em className="not-italic text-accent">Held together quietly.</em>
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-500 leading-relaxed">
            You don't assemble this. The whole thing arrives already running.
          </p>
        </motion.div>

        {/* Desktop / tablet: full SVG diagram */}
        <div className="hidden md:block">
          <Diagram />
        </div>

        {/* Mobile: vertical, no diagram */}
        <div className="md:hidden mt-4">
          <MobileList />
        </div>
      </div>
    </section>
  )
}

function Diagram() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-15%' }}
      className="relative mx-auto w-full max-w-5xl"
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Eight services connected to your home"
      >
        {/* Hairline connecting lines, one per node, draw outward from center */}
        {NODES.map((node, i) => {
          const p = nodePosition(node.angle)
          return (
            <motion.line
              key={`line-${i}`}
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke="rgba(0,0,0,0.18)"
              strokeWidth={1}
              strokeLinecap="round"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 0.7, ease: EASE, delay: 0.4 + i * 0.08 },
                },
              }}
            />
          )
        })}

        {/* Soft halo ring around center */}
        <motion.circle
          cx={CX}
          cy={CY}
          r={62}
          fill="none"
          stroke="rgba(255,128,2,0.18)"
          strokeWidth={1}
          variants={{
            hidden: { opacity: 0, scale: 0.9, transformOrigin: `${CX}px ${CY}px` },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.9, ease: EASE, delay: 0.2 },
            },
          }}
        />

        {/* Center pill: Your home */}
        <motion.g
          variants={{
            hidden: { opacity: 0, scale: 0.94 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.7, ease: EASE, delay: 0.05 },
            },
          }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        >
          <rect
            x={CX - 70}
            y={CY - 22}
            width={140}
            height={44}
            rx={22}
            fill="#0F0E0C"
          />
          <text
            x={CX}
            y={CY + 5}
            textAnchor="middle"
            fontSize={14}
            fontWeight={500}
            fill="#FFFFFF"
            fontFamily="Montserrat, sans-serif"
            letterSpacing="0.01em"
          >
            Your home
          </text>
        </motion.g>

        {/* Service node pills */}
        {NODES.map((node, i) => {
          const p = nodePosition(node.angle)
          // Estimate label width based on character count for nicer pill sizing
          const charWidth = 6.4
          const padX = 18
          const labelWidth = Math.max(120, node.label.length * charWidth + padX * 2)
          const labelHeight = 36
          return (
            <motion.g
              key={`node-${i}`}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: EASE,
                    delay: 0.6 + i * 0.08,
                  },
                },
              }}
            >
              <rect
                x={p.x - labelWidth / 2}
                y={p.y - labelHeight / 2}
                width={labelWidth}
                height={labelHeight}
                rx={labelHeight / 2}
                fill="#FFFFFF"
                stroke="rgba(0,0,0,0.10)"
                strokeWidth={1}
              />
              <text
                x={p.x}
                y={p.y + 4}
                textAnchor="middle"
                fontSize={12}
                fontWeight={500}
                fill="#1a1a1a"
                fontFamily="Montserrat, sans-serif"
                letterSpacing="0.04em"
              >
                {node.label}
              </text>
            </motion.g>
          )
        })}
      </svg>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 0.7, ease: EASE, delay: 1.6 }}
        className="mt-2 text-center text-sm md:text-[15px] italic text-gray-500"
      >
        You. Untroubled.
      </motion.p>
    </motion.div>
  )
}

function MobileList() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={{
        visible: { transition: { staggerChildren: 0.06 } },
      }}
      className="mx-auto max-w-md"
    >
      <div className="rounded-full bg-[#0F0E0C] py-3 text-center text-sm font-medium text-white">
        Your home
      </div>
      <div className="my-3 mx-auto h-8 w-px bg-gray-300" />
      <ul className="space-y-2">
        {NODES.map((node) => (
          <motion.li
            key={node.label}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
            }}
            className="rounded-full border border-gray-200 bg-white py-2.5 text-center text-[13px] tracking-wide text-gray-800"
          >
            {node.label}
          </motion.li>
        ))}
      </ul>
      <p className="mt-6 text-center text-sm italic text-gray-500">You. Untroubled.</p>
    </motion.div>
  )
}
