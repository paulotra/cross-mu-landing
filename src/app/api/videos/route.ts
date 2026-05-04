import { NextResponse } from 'next/server'
import axios from '@/lib/axios'

export async function GET(_request: Request) {
  const { searchParams } = new URL(_request.url)
  const { part, chart, maxResults, categoryId, pageToken } = Object.fromEntries(
    searchParams.entries(),
  )

  try {
    const response = await axios.get('/videos', {
      params: {
        part: part,
        chart: chart,
        maxResults: maxResults,
        ...(categoryId && {
          videoCategoryId: categoryId,
        }),
        ...(pageToken && {
          pageToken: pageToken,
        }),
      },
    })
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching videos:', error)
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 },
    )
  }
}
