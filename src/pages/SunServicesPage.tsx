import { useEffect } from 'react'
import { SunBooking } from '../components/sun/SunBooking'
import { SunServices } from '../components/sun/SunServices'
import {
  SunSiteFooter,
  SunSiteHeader,
  SunSiteNav,
} from '../components/sun/SunSiteChrome'
import { useResponseMode } from '../context/ResponseModeContext'
import './SunPage.css'

export function SunServicesPage() {
  const { setMode } = useResponseMode()

  useEffect(() => {
    setMode('sun')
  }, [setMode])

  return (
    <div className="sun-page">
      <SunSiteHeader />
      <SunSiteNav />

      <main className="sun-main">
        <SunServices />
        <SunBooking />
      </main>

      <SunSiteFooter />

      <button type="button" className="sun-chat" aria-label="Открыть чат">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      </button>
    </div>
  )
}
