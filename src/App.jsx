import { Route, Routes } from 'react-router'
import './App.css'
import HomePages from './pages/HomePages'
import ArticlePage from './pages/ArticlePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ArticlesPage from './pages/ArticlesPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}

      <main>
        <Routes>
          {/* public page  */}
          <Route  path="/" element={<HomePages/>}/>
          <Route path="/articles" element={<ArticlesPage/>} /> 
          <Route path="/article/:id" element={<ArticlePage/>} /> 


          {/* unAuthenticated pages  */}

          <Route path="/signin" element={<SignInPage /> } /> 
          <Route path="/signup" element={<SignUpPage /> } /> 

        </Routes>
      </main>

      {/* footer */}

      <Footer />
      
       </div>
  )
}

export default App
