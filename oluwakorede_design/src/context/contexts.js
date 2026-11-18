import { createContext } from 'react'

/** Site content loaded from the content API (or bundled seed). */
export const ContentContext = createContext(null)

/** Open/close state for the global "Let's talk" contact dialog. */
export const ContactDialogContext = createContext(null)
