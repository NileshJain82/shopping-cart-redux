
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import {store} from './redux/store'

import Card from './components/Card'

import Contact from './components/Contact'
import About from './components/About'

import Home from './components/Home'
import Cart from './components/Cart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>}>
     <Route path="/" element={<Card/>}/> 
     <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='cart' element={<Cart/>} />
    </Route>
  )
)


function App() {
  return (
    <div>   

        <Provider store={store}>
    <RouterProvider router={router}>
        <Home/>
       </RouterProvider>
       </Provider>
      
    </div>
  )
}

export default App