
import { Navigate, Route, Routes } from 'react-router-dom'
import { SharedLayout } from './sharedLayout/SharedLayout'
import EventPage from '../pages/EventsPage'
import RegistrationPage from '../pages/RegistrationPage'
import ParticipantsPage from '../pages/ParticipantsPage'

function App() {
 
  return (
  <Routes>
  <Route path='/' element={<SharedLayout />}>
        <Route index element={<Navigate to='events' />}></Route>
        <Route path='events' element={<EventPage />}></Route>
        <Route path='events/:id/registration' element={<RegistrationPage />}></Route>
        <Route path='events/:id/participants' element={<ParticipantsPage />}></Route>

  </Route>
</Routes>
)
}

export default App;
