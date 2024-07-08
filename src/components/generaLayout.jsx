import { NavLink, Outlet } from 'react-router-dom'

function GeneraLayout() {
  return (
    <div>
      <header className='flex'>
        <NavLink to='/'>Home</NavLink>
        <NavLink className='mx-5' to='/product'>Product</NavLink>
        <NavLink to='/category'>Category</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default GeneraLayout
