import GeneraLayout from './components/generaLayout'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Counter from './components/Counter'
import Product from './components/Product'
import Category from './components/Category'

function App() {
  return(
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path='/' element={<GeneraLayout />}>
            <Route index element={<Counter />} />
            <Route path='/product' element={<Product />} />
            <Route path='/category' element={<Category />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App
