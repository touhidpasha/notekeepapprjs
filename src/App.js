import React, { useState } from "react";

import './App.css';
import AppRouter from  "./routes/AppRouter"
import DashBoard from './pages/DashBoard'

function App() {

  return (
    <div className="App">
      <AppRouter></AppRouter>
      {/* <DashBoard></DashBoard> */}
    </div>
  );
}

export default App;
