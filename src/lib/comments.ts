import { Comment, CommentsResponse } from '@/types/comments'
import { getBaseUrl } from '@/lib/utils'

export async function getComments(id: string): Promise<Comment[]> {
  const response = await fetch(`${getBaseUrl()}/api/videos/${id}/comments`)
  const data: CommentsResponse = await response.json()
  return data.items || []
}
