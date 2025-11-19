import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, serviceType, preferredDate, propertyName } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // 1️⃣ GOOGLE WORKSPACE SMTP (Contact@cohousy.com)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,   // Contact@cohousy.com
        pass: process.env.SMTP_PASS,   // App password (with spaces)
      },
    })

    // 2️⃣ ADMIN EMAIL HTML
    const adminEmailHtml = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial; line-height: 1.6; color: #333;">
        <div style="background: linear-gradient(135deg, #ff6b35, #f7931e); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
        </div>

        <div style="padding: 30px; background: white; border-left: 4px solid #ff6b35;">
          ${propertyName ? `
            <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #ff6b35; margin: 0 0 10px 0;">Property Inquiry</h3>
              <p style="margin: 0; font-weight: bold;">${propertyName}</p>
            </div>
          ` : ''}

          <h2 style="color: #333; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">Contact Details</h2>

          <div style="display: grid; gap: 15px; margin: 20px 0;">
            <div><strong>Name:</strong> ${name}</div>
            <div><strong>Email:</strong> <a href="mailto:${email}">${email}</a></div>
            <div><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></div>
            <div><strong>Service:</strong> ${serviceType}</div>
            ${preferredDate ? `<div><strong>Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</div>` : ''}
          </div>

          ${message ? `
            <h3>Message</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 3px solid #ff6b35;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px; text-align: center;">
            <p>Submitted on ${new Date().toLocaleString()}</p>
          </div>
        </div>

        <div style="background: #333; color: white; padding: 20px; text-align: center;">
          <p>Cohousy - Premium Co-living Spaces</p>
        </div>
      </div>
    `

    // 3️⃣ USER THANK-YOU EMAIL HTML
    const userEmailHtml = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial; line-height: 1.6; color: #333;">
        <div style="background: linear-gradient(135deg, #ff6b35, #f7931e); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Your Inquiry!</h1>
        </div>

        <div style="padding: 30px; background: white;">
          <h2>Dear ${name},</h2>
          <p>Thank you for your interest in Cohousy! We received your message and will respond within 24 hours.</p>

          <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ff6b35;">
            <h3>Your Inquiry Details</h3>
            <ul>
              <li><strong>Service:</strong> ${serviceType}</li>
              ${propertyName ? `<li><strong>Property:</strong> ${propertyName}</li>` : ''}
              ${preferredDate ? `<li><strong>Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</li>` : ''}
            </ul>
          </div>

          <p>Best regards,<br><strong>Team Cohousy</strong></p>
        </div>

        <div style="background: #333; color: white; padding: 20px; text-align: center;">
          <p>Cohousy - Redefining Urban Living</p>
        </div>
      </div>
    `

    // 4️⃣ SEND EMAIL TO ADMIN
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,          // Contact@cohousy.com
      to: process.env.ADMIN_EMAIL,           // info.cohousy@gmail.com
      subject: `New Contact Form Submission - ${serviceType}${propertyName ? ` - ${propertyName}` : ''}`,
      html: adminEmailHtml,
    })

    // 5️⃣ SEND AUTO-REPLY TO USER
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,          // Contact@cohousy.com
      to: email,
      subject: "Thank you for your inquiry - Cohousy",
      html: userEmailHtml,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
