export interface Video {
  caption: string
  video: {
    asset: {
      _id: string
      url: string
    }
  }
  _id: string
  postedBy: {
    _id: string
    userName: string
    image: string
  }
  likes: {
    postedBy: {
      _id: string
      userName: string
      image: string
    }
  }[]
  comments: {
    comment: string
    _key: string
    postedBy: {
      _ref: string
      _id: string
    }
  }[]
  userId: string
}

export interface IProps {
  isPostingComment: boolean
  comment: string
  setComment: Dispatch<SetStateAction<string>>
  addComment: (e: React.FormEvent) => void
  comments: IComment[]
}

export interface IUser {
  _id: string
  _type: string
  userName: string
  image: string
}

interface IComment {
  comment: string
  length?: number
  _key: string
  postedBy: { _ref: string; _id: string }
}
