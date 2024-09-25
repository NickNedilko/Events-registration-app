
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { SharedLayout } from './sharedLayout/SharedLayout'
import EventPage from '../pages/EventsPage'

function App() {
 
  return (
  <Routes>
  <Route path='/' element={<SharedLayout />}>
        <Route index element={<EventPage />}></Route>
  </Route>
</Routes>
)
}

export default App
