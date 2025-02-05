import './App.css'
import { RouterProvider } from 'react-router'
import { myRouter } from './Router'

function App() {
  return (
    <>
        <RouterProvider router={myRouter} />
    </>
  )
}

export default App;
