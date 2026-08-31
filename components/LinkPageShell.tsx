import Image from 'next/image'
import Link from 'next/link'

interface LinkPageShellProps {
  children: React.ReactNode
}

export default function LinkPageShell({ children }: LinkPageShellProps) {
  return (
    <div className="lp-shell">
      {children}
    </div>
  )
}