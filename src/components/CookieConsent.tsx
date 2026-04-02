'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/switch'

interface CookiePrefs {
  necessary: boolean
  functional: boolean
  performance: boolean
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [saved, setSaved] = useState(false)
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true,
    functional: false,
    performance: false,
  })

  function toggle(key: keyof CookiePrefs) {
    if (key === 'necessary') return // always on
    setPrefs(p => ({ ...p, [key]: !p[key] }))
    setSaved(false)
  }

  function handleSave() {
    setSaved(true)
    setTimeout(() => {
      setOpen(false)
      setSaved(false)
    }, 1200)
  }

  return (
    <>
      {/* ── Floating Cookie Button ── */}
      <button
        id="cookie-fab"
        aria-label="Cookie settings"
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '1.5rem',
          zIndex: 9999,
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
          boxShadow: open
            ? '0 0 0 4px rgba(34,197,94,0.25), 0 8px 24px rgba(34,197,94,0.3)'
            : '0 4px 16px rgba(34,197,94,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 220ms cubic-bezier(.4,0,.2,1)',
          transform: open ? 'scale(1.08) rotate(15deg)' : 'scale(1) rotate(0deg)',
        }}
      >
        {/* Cookie SVG icon */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.18" />
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
          {/* cookie bite */}
          <path d="M16.5 7.5 Q19 10 17 14 Q15 18 11 17 Q7 16 7 12 Q7 8 11 7 Q14 6 16.5 7.5Z" fill="white" fillOpacity="0.9" />
          {/* chips */}
          <circle cx="11" cy="10" r="1.1" fill="#16A34A" />
          <circle cx="13.5" cy="13" r="1.1" fill="#16A34A" />
          <circle cx="10" cy="13.5" r="1" fill="#16A34A" />
          <circle cx="14" cy="10.5" r="0.85" fill="#16A34A" />
          {/* bite mark arc */}
          <path d="M16.5 7.5 Q18.5 6 20 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.7" />
        </svg>
      </button>

      {/* ── Backdrop (mobile) ── */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            background: 'rgba(0,0,0,0.15)',
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      {/* ── Cookie Settings Panel ── */}
      <div
        id="cookie-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Cookie Settings"
        style={{
          position: 'fixed',
          bottom: '5.5rem',
          left: '1.5rem',
          zIndex: 9999,
          width: 'min(400px, calc(100vw - 3rem))',
          background: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid rgba(229,231,235,0.8)',
          overflow: 'hidden',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 220ms cubic-bezier(.4,0,.2,1), transform 220ms cubic-bezier(.4,0,.2,1)',
          transformOrigin: 'bottom left',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem 1rem',
          borderBottom: '1px solid #F3F4F6',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '0.75rem',
        }}>
          <div>
            <h2 style={{
              margin: 0,
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#111827',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span style={{ fontSize: '1.2rem' }}>🍪</span> Cookie Settings
            </h2>
            <p style={{
              margin: '0.25rem 0 0',
              fontSize: '0.8125rem',
              color: '#6B7280',
              lineHeight: 1.5,
            }}>
              Manage your cookie preferences here.
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close cookie settings"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#9CA3AF',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px',
              transition: 'color 150ms',
              flexShrink: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#374151')}
            onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Cookie rows */}
        <div style={{ padding: '0.75rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {([
            {
              id: 'necessary',
              label: 'Strictly Necessary',
              desc: 'These cookies are essential in order to use the website and use its features.',
              locked: true,
            },
            {
              id: 'functional',
              label: 'Functional Cookies',
              desc: 'These cookies allow the website to provide personalized functionality.',
              locked: false,
            },
            {
              id: 'performance',
              label: 'Performance Cookies',
              desc: 'These cookies help to improve the performance of the website.',
              locked: false,
            },
          ] as const).map((item, i, arr) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '0.875rem 0',
                borderBottom: i < arr.length - 1 ? '1px solid #F3F4F6' : 'none',
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#111827',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  {item.label}
                  {item.locked && (
                    <span style={{
                      fontSize: '0.65rem',
                      background: '#F0FDF4',
                      color: '#16A34A',
                      border: '1px solid #BBF7D0',
                      borderRadius: '4px',
                      padding: '0 5px',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}>Always on</span>
                  )}
                </p>
                <p style={{
                  margin: '0.2rem 0 0',
                  fontSize: '0.775rem',
                  color: '#6B7280',
                  lineHeight: 1.5,
                }}>
                  {item.desc}
                </p>
              </div>
              <div style={{ paddingTop: '2px', flexShrink: 0 }}>
                <Switch
                  id={item.id}
                  checked={prefs[item.id]}
                  onCheckedChange={() => toggle(item.id)}
                  disabled={item.locked}
                  aria-label={item.label}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '0.875rem 1.5rem 1.25rem' }}>
          <button
            id="cookie-save-btn"
            onClick={handleSave}
            style={{
              width: '100%',
              padding: '0.65rem 1rem',
              borderRadius: '10px',
              border: '1.5px solid #D1D5DB',
              background: saved ? '#22C55E' : '#FFFFFF',
              color: saved ? '#FFFFFF' : '#111827',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 200ms ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
            onMouseEnter={e => {
              if (!saved) {
                e.currentTarget.style.borderColor = '#111827'
                e.currentTarget.style.background = '#F9FAFB'
              }
            }}
            onMouseLeave={e => {
              if (!saved) {
                e.currentTarget.style.borderColor = '#D1D5DB'
                e.currentTarget.style.background = '#FFFFFF'
              }
            }}
          >
            {saved ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Preferences saved!
              </>
            ) : (
              'Save preferences'
            )}
          </button>
        </div>
      </div>
    </>
  )
}
