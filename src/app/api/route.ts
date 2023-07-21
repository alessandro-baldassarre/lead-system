import { NextResponse } from 'next/server'

export async function GET() {
  const res = import('../../database/test.json').then((module) => module.default)
  const data = await res

  return NextResponse.json(data)
}
