export default function Logo() {
  return (
    <svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="IT4Everyone Ltd">
      <defs>
        <linearGradient id="itLogo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#42A5F5"/>
          <stop offset="100%" stopColor="#1565C0"/>
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#itLogo)"/>
      <rect x="12" y="9" width="6" height="6" rx="1.5" fill="white" opacity="0.85"/>
      <rect x="13.5" y="18" width="3" height="14" rx="1.5" fill="#0D2B5E" opacity="0.8"/>
      <rect x="20" y="16" width="18" height="4" rx="2" fill="#0D2B5E" opacity="0.85"/>
      <rect x="26.5" y="20" width="5" height="15" rx="2" fill="#0D2B5E" opacity="0.85"/>
      <text x="60" y="22" fontFamily="Segoe UI,system-ui,sans-serif" fontWeight="800" fontSize="17" fill="#0D2B5E" letterSpacing="0.3">IT</text>
      <text x="87" y="22" fontFamily="Segoe UI,system-ui,sans-serif" fontWeight="800" fontSize="17" fill="#1976D2" letterSpacing="0.3">4</text>
      <text x="98" y="22" fontFamily="Segoe UI,system-ui,sans-serif" fontWeight="800" fontSize="17" fill="#0D2B5E" letterSpacing="0.3">EVERYONE</text>
      <text x="60" y="36" fontFamily="Segoe UI,system-ui,sans-serif" fontWeight="500" fontSize="9" fill="#5BA4D4" letterSpacing="2.5">YOUR DELL SPECIALIST · LTD</text>
    </svg>
  )
}
