import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from "./components/SearchForm";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import PageNotFound from './components/PageNotFound';
//import Graphic from './components/Graphic';

function App() {
  return (
    <div className="h-screen w-screen">
      <div className='mt-10'>
      <h1 className='text-4xl flex justify-center'>Github Profiles App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:username" element={<UserProfile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
