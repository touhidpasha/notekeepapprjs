import React, { useState } from "react";

import './App.css';
import AppRouter from "./router/AppRouter"
import DashBoard from './component/dashBoard/DashBoard'

function App() {

  return (
    <div className="App">
      <AppRouter></AppRouter>
      {/* <DashBoard></DashBoard> */}
    </div>
  );
}

export default App;
