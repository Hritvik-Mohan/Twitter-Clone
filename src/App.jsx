import './App.css'
import Feed from './components/Feed/Feed'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import { ChakraProvider, Container } from '@chakra-ui/react'

function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <Container>
          {/* <Navbar /> */}
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Feed />}/>
              <Route path='/signup' element={<Signup />}/>
            </Routes>
          </BrowserRouter>
        </Container>
      </ChakraProvider>
    </div>
  )
}

export default App
