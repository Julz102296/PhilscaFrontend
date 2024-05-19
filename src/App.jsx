import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import PreList from './pages/PreList'
import StudentIdList from './pages/StudentIdList'
import GraphsandAnalytics from './pages/GraphsandAnalytics'
import AdminSettings from './pages/AdminSettings'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}/>
      <Route path="prelist" element={<PreList />} />
        <Route path="studentidlist" element={<StudentIdList />} />
        <Route path="graphsandanalytics" element={<GraphsandAnalytics />} />
        <Route path="create" element={<Create />} />
        <Route path="adminsettings" element={<AdminSettings />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
