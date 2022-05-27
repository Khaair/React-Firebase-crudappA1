import './App.css';
import Form from './components/Form';
import Viewdata from './components/Viewdata';
import { useState } from "react";


function App() {

  const [userId, setUserId] = useState("");

  const getUserIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setUserId(id);
  };
  return (
    <div className="App">
    <Form id={userId} setUserId={setUserId}/>

    <Viewdata getBookId={getUserIdHandler}/>
    </div>
  );
}

export default App;
