export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.name || !body.email || !body.message) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  // Ensure process.env.RESEND_API_KEY is set in .env
  try {
    const response = await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: {
        from: 'portfolio@resend.dev', // Ensure you configure a verified domain in Resend later
        to: 'alexkalaitzidis2@gmail.com',
        subject: `New Portfolio Contact from ${body.name}`,
        text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`
      }
    })
    return { success: true }
  } catch (error) {
    console.error('Email send failed:', error)
    throw createError({ statusCode: 500, statusMessage: 'Failed to send email' })
  }
})
