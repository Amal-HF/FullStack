import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from "./pages/Login.page";
import {RegisterPage} from "./pages/RegisterPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import BlogHome from './pages/BlogHome'

export const App = () => {
  return(
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<BlogHome />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}