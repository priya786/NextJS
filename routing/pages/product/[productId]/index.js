import {userouter} from 'next/app'
import { useRouter } from 'next/router'

function productDescription(){
    const router=useRouter()
    const productId=router.query.productId
    return <h1>Product description {productId}</h1>
}

export default productDescription