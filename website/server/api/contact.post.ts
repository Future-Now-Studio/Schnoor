import nodemailer from 'nodemailer'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, telefon, nachricht } = body ?? {}

  if (!name?.trim() || !email?.trim() || !nachricht?.trim()) {
    throw createError({ statusCode: 400, message: 'Pflichtfelder fehlen' })
  }

  const config = useRuntimeConfig()

  if (!config.smtpHost || !config.smtpUser || !config.smtpPass) {
    console.warn('[contact] SMTP not configured – skipping email send')
    return { success: true }
  }

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort) || 587,
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

  await transporter.sendMail({
    from: `"Website Schnoor" <${config.smtpUser}>`,
    replyTo: `"${name}" <${email}>`,
    to: config.contactEmail || config.smtpUser,
    subject: `Neue Kontaktanfrage von ${name}`,
    text: [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${telefon || '–'}`,
      '',
      'Nachricht:',
      nachricht,
    ].join('\n'),
    html: `
      <h2 style="font-family:sans-serif;margin-bottom:1em">Neue Kontaktanfrage</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#666">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666">E-Mail</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666">Telefon</td><td>${escapeHtml(telefon || '–')}</td></tr>
      </table>
      <hr style="margin:1.5em 0;border:none;border-top:1px solid #eee">
      <p style="font-family:sans-serif;font-size:14px;color:#666;margin-bottom:0.5em">Nachricht:</p>
      <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(nachricht)}</p>
    `,
  })

  return { success: true }
})
