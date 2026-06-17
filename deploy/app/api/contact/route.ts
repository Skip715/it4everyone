import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    // Log enquiry — in production connect to email service (Resend, Sendgrid etc)
    console.log('New enquiry from IT4Everyone website:', data)
    // TODO: send email to sraper@it4eo.co.uk using your preferred email provider
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
