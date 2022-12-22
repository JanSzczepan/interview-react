import { useState } from 'react'
import cx from 'classnames'

const App = () => {
   const [isLiked, setIsLiked] = useState(false)
   const [isDisliked, setIsDisliked] = useState(false)
   const [likeCount, setLikeCount] = useState(100)
   const [dislikeCount, setDislikeCount] = useState(25)

   const handleLike = () => {
      setLikeCount((prevState) => (isLiked ? prevState - 1 : prevState + 1))
      setIsLiked((prevState) => !prevState)

      if (isDisliked) {
         handleDislike()
      }
   }

   const handleDislike = () => {
      setDislikeCount((prevState) => (isDisliked ? prevState - 1 : prevState + 1))
      setIsDisliked((prevState) => !prevState)

      if (isLiked) {
         handleLike()
      }
   }

   const likeBtnClass = cx('like-button', { liked: isLiked })
   const dislikeBtnClass = cx('dislike-button', { disliked: isDisliked })

   return (
      <>
         <div>
            <button className={likeBtnClass} onClick={handleLike}>
               Like | <span className="likes-counter">{likeCount}</span>
            </button>
            <button className={dislikeBtnClass} onClick={handleDislike}>
               Dislike | <span>{dislikeCount}</span>
            </button>
         </div>
         <style>
            {`
               .like-button, .dislike-button {
                  font-size: 1rem;
                  padding: 5px 10px;
                  color:   #585858;
               }

               .liked, .disliked {
                  font-weight: bold;
                  color: #1565c0;
               }
            `}
         </style>
      </>
   )
}

export default App
