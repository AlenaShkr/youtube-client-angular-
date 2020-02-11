interface ThumbnailsSize {
  url: string;
  width: string;
  height: string;
}

interface Thumbnails {
  default: ThumbnailsSize;
  medium: ThumbnailsSize;
  high: ThumbnailsSize;
  standard: ThumbnailsSize;
  maxres: ThumbnailsSize;
}

interface Snippet {
  publishedAt: Date;
  title: string;
  description: string ;
  thumbnails: Thumbnails;
}

interface Statistics {
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  commentCount: number;
}

export interface ResultCard {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;

}
