export const FIND_MATCHES = 'FIND_MATCHES'
export const LIKE_IT = 'LIKE_IT'
export const DISLIKE_IT = 'DISLIKE_IT'


export function findMatches() {
  return {
    type: FIND_MATCHES
  }
}

export function likeIt(likedUserId) {
  return {
    type: LIKE_IT,
    payload: likedUserId
  }
}

export function dislikeIt(dislikedUserId) {
  return {
    type: DISLIKE_IT,
    payload: dislikedUserId
  }
}
