import { useContext } from 'react'
import { ContactDialogContext } from '@/context/contexts'

export function useContactDialog() {
  const ctx = useContext(ContactDialogContext)
  if (!ctx) throw new Error('useContactDialog must be used inside <ContactDialogProvider>')
  return ctx
}
