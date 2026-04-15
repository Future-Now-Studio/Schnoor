import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, telefon, nachricht } = body ?? {}

  if (!name?.trim() || !email?.trim() || !nachricht?.trim()) {
    throw createError({ statusCode: 400, message: 'Pflichtfelder fehlen' })
  }

  const config = useRuntimeConfig()

  if (!config.resendApiKey) {
    console.warn('[contact] RESEND_API_KEY not set')
    throw createError({ statusCode: 500, message: 'E-Mail-Versand nicht konfiguriert' })
  }

  const resend = new Resend(config.resendApiKey)

  await resend.emails.send({
    from: 'Website Schnoor <onboarding@resend.dev>',
    replyTo: `${name} <${email}>`,
    to: config.contactEmail,
    subject: `Neue Kontaktanfrage von ${name}`,
    html: `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${telefon || '–'}</p>
      <hr>
      <p><strong>Nachricht:</strong><br>${nachricht.replace(/\n/g, '<br>')}</p>
    `,
  })

  return { success: true }
})
