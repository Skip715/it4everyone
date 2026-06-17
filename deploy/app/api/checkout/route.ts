import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  return NextResponse.json({ 
    message: 'Payment processing coming soon. Please contact us to place an order.',
    url: null 
  })
}
