import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import PreList from './pages/PreList'
import StudentIdList from './pages/StudentIdList'
import GraphsandAnalytics from './pages/GraphsandAnalytics'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Login from './pages/Login'
import ProfileSettings from './components/ProfileSettings'
import Table from './components/Table'
import UserDashboard from './components/UserDashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <>
      <Route path="login" element={<Login />} />
      
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}/>
        <Route path="prelist" element={<PreList />} />
        <Route path="studentidlist" element={<StudentIdList />} />
        <Route path="graphsandanalytics" element={<GraphsandAnalytics />} />
        <Route path="create" element={<Create />} />
        <Route path="table" element={<Table />} />
        <Route path="profilesettings" element={<ProfileSettings />} /> {/* for all user*/}
        <Route path="userdashboard" element={<UserDashboard />} />   {/* student, instructor, staff dashboard */}
        
      </Route>
    </>
    
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
