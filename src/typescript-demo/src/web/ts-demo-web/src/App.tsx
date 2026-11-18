import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GetUsers } from './pages/Users'
import { DoubleResult } from './pages/DoubleResult';
import { User } from './pages/User';
import { Layout } from './components/layout';
import './App.css';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<DoubleResult />} />
          <Route path="/users" element={<GetUsers test={true} />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>

    </BrowserRouter>

  );
}


export default App;