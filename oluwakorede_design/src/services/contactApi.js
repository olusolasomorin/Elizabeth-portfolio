const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT ?? ''

/**
 * Sends a project enquiry from the "Let's talk" form.
 *
 * @param {{
 *   name: string, email: string, company?: string,
 *   services: string[], budget?: string, timeline?: string, message: string
 * }} enquiry
 */
export async function submitEnquiry(enquiry) {
  if (!CONTACT_ENDPOINT) {
    if (import.meta.env.DEV) {
      console.info('[contact] VITE_CONTACT_ENDPOINT not set; simulated submission:', enquiry)
    }
    await new Promise((resolve) => setTimeout(resolve, 700))
    return { ok: true }
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...enquiry, submittedAt: new Date().toISOString() }),
  })
  if (!response.ok) {
    throw new Error('Your message could not be sent. Please try again or email me directly.')
  }
  return { ok: true }
}
