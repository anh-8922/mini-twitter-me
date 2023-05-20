import logo from './logo.svg';
import './App.css';
import AllMessages from './Components/allMessage';
import AllUsers from './Components/allUsers';
import SearchBar from './Components/serachBar';
import { BrowserRouter, Routes, Route, useNavigate  } from "react-router-dom";
import SearchPage from './Pages/SearchPage';
import CurrentUser from './Components/currentUser';
import AddNewMessage from './Components/addNewPost';
import DedicationPage from './Pages/DedicatedPage';

function App() {


  return (
    <BrowserRouter>
    <AddNewMessage/>
      {/* <SearchBar/> */}
      {/* <AllMessages /> */}
      {/* <AllUsers/> */}
      {/* <CurrentUser/> */}
      <Routes>
      <Route path='/' element={<AllMessages/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/dedicationpage' element={<DedicationPage/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
