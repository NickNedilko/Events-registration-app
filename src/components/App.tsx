
import { Route, Routes } from 'react-router-dom'
import { SharedLayout } from './sharedLayout/SharedLayout'
import EventPage from '../pages/EventsPage'
import RegistrationPage from '../pages/RegistrationPage'

function App() {
 
  return (
  <Routes>
  <Route path='/' element={<SharedLayout />}>
        <Route index element={<EventPage />}></Route>
        <Route path='/:id/registration' element={<RegistrationPage />}></Route>
  </Route>
</Routes>
)
}

export default App
