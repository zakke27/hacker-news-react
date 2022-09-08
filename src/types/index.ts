export interface Article {
  author: string
  comment_text: null | string
  created_at: string
  created_at_i: number
  num_comments: number
  objectID: string
  parent_id: null | number
  points: number
  relevancy_score: number
  story_id: null | number
  story_text: null | string
  story_title: null | string
  story_url: null | string
  title: string
  url: string
}
