import React from "react"
import { Provider } from "react-redux";
import './App.css';
import store from "./store/store";
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/main" element={<MainPage />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

