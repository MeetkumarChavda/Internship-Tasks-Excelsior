import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage"
import SignUpPage from "./pages/signUpPage"


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={
          <HomePage />
        }/>
        <Route path='/signup' element={
          <SignUpPage />
        }/>
      </Routes>
    </div>
  )
}

export default App
