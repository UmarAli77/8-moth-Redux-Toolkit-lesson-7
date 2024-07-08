import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../redux-toolkit/features/product/ProductSlice';

function Category() {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.categorys.value)
    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])
    console.log(category);
  return (
    <div className='w-screen h-screen bg-white'>
        <div className='grid grid-cols-3 w-[150px] bg-slate-700'>
        {
            category.map((item) => (
                <div key={item._id}>
                    <h1>{item.name}</h1>
                    {/* <img src={ite} alt="" /> */}
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Category
