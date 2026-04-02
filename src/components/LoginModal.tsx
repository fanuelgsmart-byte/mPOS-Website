'use client'

import { useState, useEffect, useCallback } from 'react'
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button"

/* ── Tiny inline UI helpers (no shadcn dependency) ─────── */
function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ')
}

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'w-full rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15',
        className,
      )}
      {...props}
    />
  )
}

function Label({ htmlFor, className, children }: { htmlFor?: string; className?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className={cn('block text-sm font-medium text-white/90 mb-1.5', className)}>
      {children}
    </label>
  )
}

/* ── Types ─────────────────────────────────────────────── */
interface LoginModalProps {
  open: boolean
  onClose: () => void
}

/* ── Main Component ─────────────────────────────────────── */
export default function LoginModal({ open, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  /* Close on ESC */
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() },
    [onClose],
  )
  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, handleKey])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setIsLoading(false)
  }

  const handleSocial = (provider: string) => {
    console.log('[Login] Social login with:', provider)
  }

  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'loginFadeIn 200ms ease forwards',
      }}
    >
      {/* ── Backdrop ── */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-200 opacity-90 -z-10"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-400/40 mix-blend-multiply filter blur-[100px] animate-pulse -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pink-400/40 mix-blend-multiply filter blur-[120px] animate-pulse delay-1000 -z-10"></div>
      <div className="fixed top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-400/40 mix-blend-multiply filter blur-[100px] animate-pulse delay-700 -z-10"></div>
      <div className="fixed inset-0 bg-white/10 backdrop-blur-[2px] -z-10"></div>

      {/* ── Card ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Sign in"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '440px',
          borderRadius: '20px',
          background: "rgba(255, 255, 255, 0.35)",
          backdropFilter: "blur(40px) saturate(200%)",
          WebkitBackdropFilter: "blur(40px) saturate(200%)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "0 32px 80px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          padding: '2rem',
          animation: 'loginSlideUp 250ms cubic-bezier(.4,0,.2,1) forwards',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close login"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'white',
            transition: 'background 150ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
            Welcome Back
          </h2>
          <p style={{ margin: '0.35rem 0 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <Label htmlFor="login-email">Email Address</Label>
            <Input
              id="login-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="login-password">Password</Label>
            <Input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

            <div className="flex justify-center mt-3">
              <LiquidMetalButton 
                label={isLoading ? 'Signing In…' : 'Sign In'} 
                onClick={() => {
                  handleLogin({ preventDefault: () => {} } as React.FormEvent);
                }} 
              />
            </div>
          </form>

        {/* Divider */}
        <div style={{ textAlign: 'center', margin: '1.25rem 0 1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Or continue with
        </div>

        {/* Social buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {[
            {
              id: 'google',
              label: 'Continue with Google',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 2.43-4.53 6.16-4.53z" />
                </svg>
              ),
            },
            {
              id: 'apple',
              label: 'Continue with Apple',
              icon: (
                <svg width="18" height="18" viewBox="0 0 384 512" fill="white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
              ),
            },
            {
              id: 'meta',
              label: 'Continue with Meta',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              ),
            },
          ].map(social => (
            <button
              key={social.id}
              id={`login-${social.id}-btn`}
              type="button"
              onClick={() => handleSocial(social.label)}
              className="glass-effect hover-lift ripple-effect"
              style={{
                width: '100%',
                padding: '0.7rem',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'background 200ms',
              }}
            >
              {social.icon}
              {social.label}
            </button>
          ))}
        </div>

        {/* Forgot password */}
        <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <a
            href="#"
            style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'color 150ms' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
          >
            Forgot your password?
          </a>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes loginFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes loginSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  )
}
