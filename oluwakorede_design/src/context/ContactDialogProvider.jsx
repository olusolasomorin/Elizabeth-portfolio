import { useCallback, useMemo, useState } from 'react'
import { ContactDialogContext } from './contexts'

export function ContactDialogProvider({ children }) {
  const [state, setState] = useState({ open: false, preset: null })

  /** @param {{ service?: string }} [preset] pre-select a service in the form */
  const openContact = useCallback((preset = null) => setState({ open: true, preset }), [])
  const closeContact = useCallback(() => setState((s) => ({ ...s, open: false })), [])

  const value = useMemo(
    () => ({ isOpen: state.open, preset: state.preset, openContact, closeContact }),
    [state, openContact, closeContact],
  )

  return <ContactDialogContext.Provider value={value}>{children}</ContactDialogContext.Provider>
}
