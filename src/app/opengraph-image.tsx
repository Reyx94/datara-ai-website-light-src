import { ImageResponse } from 'next/og'

export const alt = 'peptides.cx — The Peptide Community Exchange'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <span
            style={{
              fontSize: 96,
              fontWeight: 700,
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            peptides
          </span>
          <span style={{ fontSize: 96, fontWeight: 700, color: '#475569' }}>.cx</span>
        </div>
        <div style={{ marginTop: 24, fontSize: 36, color: '#334155' }}>
          The Peptide Community Exchange
        </div>
        <div style={{ marginTop: 16, fontSize: 24, color: '#64748b' }}>
          Research · Experience Reports · Safety · Verified Vendors
        </div>
      </div>
    ),
    { ...size },
  )
}
