
import CreateAccount from "./Pages/Createaccount/Createaccount";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/signUp";
import Searchbar from "./RightBarsection/Searchbar/Searchbar";
import Column3 from "./Column3";

function App() {
  return (
    <div >
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/Createaccount" element={<CreateAccount/>} />
          <Route path="/Createaccount/signUP" element={<SignUp/>} />
        </Routes>
      </BrowserRouter> */}

      {/* <Data/> */}
     {/* <CreateAccount/> */}
      {/* <SignUp /> */}
      {/* <Search/> */}
      <Column3/>
    </div>
  );
}

export default App;