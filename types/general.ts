export type Podcast = {
  title: {
    __cdata: string
  }
  description: {
    __cdata: string
  }
  link: string
  guid: string
  creator: {
    __cdata: string
  }
  pubDate: string
  enclosure: {
    url: string
    length: string
    type: string
  }
  summary: string
  explicit: string
  duration: string
  image: string
  episode?: number
  episodeType: string
}
