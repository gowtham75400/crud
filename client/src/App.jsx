import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Users from './Components/Users';
import CreateUser from './Components/CreateUser';
import UpdateUser from './Components/UpdateUser';

function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Users />} />
    <Route path="/create" element={<CreateUser/>}/>
    <Route path="/update/:id" element={<UpdateUser/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
