import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../redux-toolkit/features/product/ProductSlice';

function Product() {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.value)
    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])
    console.log(product);
  return (
    <div className='w-screen h-screen bg-white'>
        <div className='grid grid-cols-3 w-[150px] bg-slate-700'>
        {
            product.map((item) => (
                <div key={item._id}>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Product
