import logo from './logo.svg';
import './App.css';
import AllMessages from './Components/allMessage';
import AllUsers from './Components/allUsers';
import SearchBar from './Components/serachBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './Pages/SearchPage';
import CurrentUser from './Components/currentUser';

function App() {
  return (
    <BrowserRouter>
      <SearchBar/>
      {/* <AllMessages/>
      <AllUsers/> */}
      <CurrentUser/>
      <Routes>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
