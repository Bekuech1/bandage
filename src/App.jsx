import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import './App.css'
import MainLayout from './components/layouts/MainLayout'


const ScrollToTopLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return children;
}

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={ 
        <ScrollToTopLayout>
          <MainLayout/>
        </ScrollToTopLayout>
      } >
          <Route index element={ <Home/> } />
          <Route path='/cart' element={ <Cart/> } />
          <Route path='/shop/:id' element={ <Shop/> } />
      </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
