export interface Video {
  id: string
  snippet: {
    title: string
    description: string
    categoryId: string
    thumbnails: {
      default: { url: string }
      medium: { url: string }
      high: { url: string }
    }
    channelTitle: string
    publishedAt: string
  }
  contentDetails: {
    duration: string
  }
  statistics: {
    viewCount: string
    likeCount: string
    commentCount: string
  }
}

export interface VideoResponse {
  items: Video[]
  nextPageToken?: string
}
