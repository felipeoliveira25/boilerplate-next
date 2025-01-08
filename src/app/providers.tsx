import GlobalStyles from '@/styles/global'
import { ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode
}
export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}