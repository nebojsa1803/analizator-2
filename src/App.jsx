import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Instructions from './pages/Instructions/Instructions'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import GeneralData from './components/Forms/GeneralDataForm'
import AppLayout from './components/AppLayout'
import TaskLevels from './pages/TaskLevels/TaskLevels'
import TasksPointsAndMark from './pages/TasksPointsAndMark/TasksPointsAndMark'
import Resault from './pages/Resault/Resault'
import Error from './pages/Error/Error'
import { clearLocalStorage } from './functions/functions'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { closeModal } from './features/modalSlice'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/uputstvo',
        element: <Instructions />,
      },
      {
        path: '/o-programu',
        element: <About />,
      },
      {
        path: '/kontakt',
        element: <Contact />,
      },
    ],
  },

  {
    path: '/opsti-podaci',
    element: <GeneralData />,
  },
  {
    path: '/nivoi-za-zadatke',
    element: <TaskLevels />,
  },
  {
    path: '/poeni-i-ocena/ucenik-broj/:studentId',
    element: <TasksPointsAndMark />,
  },
  {
    path: '/analiza',
    element: <Resault />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
