import { useRouter } from 'next/router'

function Review(){
    const router=useRouter()
    const {productId, reviewId}=router.query
    return(
        <h1>
               Product : {productId} Review is {reviewId}
        </h1>

    )
    
}

export default Review