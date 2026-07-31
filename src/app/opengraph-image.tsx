import { ImageResponse } from 'next/og'

// Route segment config — Next.js serves this at /opengraph-image and wires it
// into openGraph.images / twitter.images for every page that doesn't override it.
export const alt =
  'Cohousy — premium co-living and PG in Kharadi, Pune, near Eon IT Park and WTC'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Satori (the renderer behind ImageResponse) supports flexbox and a subset of
// CSS only — no grid, no shorthand `background`, every child needs display:flex.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0B1220',
          backgroundImage:
            'radial-gradient(circle at 15% 10%, #1e3a5f 0%, transparent 55%), radial-gradient(circle at 85% 90%, #0e4a52 0%, transparent 50%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: '#7dd3fc',
            }}
          >
            COHOUSY
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 44,
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#ffffff',
              maxWidth: 940,
            }}
          >
            Premium Co-living &amp; PG in Kharadi, Pune
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 26,
              fontSize: 34,
              lineHeight: 1.35,
              color: '#94a3b8',
              maxWidth: 900,
            }}
          >
            Walking distance to Eon IT Park &amp; World Trade Center. Fully
            furnished, all-inclusive, zero brokerage.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #1e293b',
            paddingTop: 32,
          }}
        >
          <div style={{ display: 'flex', fontSize: 30, color: '#cbd5e1' }}>
            Rooms from Rs 10,000 / month
          </div>
          <div style={{ display: 'flex', fontSize: 30, color: '#7dd3fc' }}>
            cohousy.com
          </div>
        </div>
      </div>
    ),
    size
  )
}
