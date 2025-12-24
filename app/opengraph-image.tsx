import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Fibroplast - Precision in Piping • Strength in Civil Construction'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 24,
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          Fibroplast LLC
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 300,
            textAlign: 'center',
            opacity: 0.95,
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          Precision in Piping • Strength in Civil Construction
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 40,
            opacity: 0.85,
            textAlign: 'center',
          }}
        >
          GRP/GRE Piping & Industrial Infrastructure Solutions
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
