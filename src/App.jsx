import { Route, Routes } from 'react-router'
import HomePages from './pages/HomePages'
import ArticlePage from './pages/ArticlePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ArticlesPage from './pages/ArticlesPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import { UnAuthenticatedRoute } from './components/UnAuthenticatedRoute'
import  ManageArticlesPage from './pages/ManageArticlesPage'
import  ProfilePage  from './pages/ProfilePage'
import ArticleEditorPage  from './pages/ArticleEditorPage'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <AuthProvider>
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

          <Route path="/signin" element={
            <UnAuthenticatedRoute>
            <SignInPage /> 
            </UnAuthenticatedRoute>
            } /> 
          <Route path="/signup" element={
            <UnAuthenticatedRoute>
            <SignUpPage /> 
            </UnAuthenticatedRoute>
            } /> 

            {/* Protected Route  */}


            <Route path='/editor' 
            element={
            <ProtectedRoute>
            <ArticleEditorPage/>
            </ProtectedRoute>
            }>
              
            </Route>

            <Route path='/editor/:id' 
            
            element={
            <ProtectedRoute>
            <ArticleEditorPage/>
            </ProtectedRoute>
            }>

            </Route>

            <Route path='/manage-articles' 
            
            element={
            <ProtectedRoute>
            <ManageArticlesPage/>
            </ProtectedRoute>

            }>

            </Route>


             <Route path='/profile' 
            
            element={
            <ProtectedRoute>
            <ProfilePage/>
            </ProtectedRoute>
            }>

            </Route>
            
        </Routes>
      </main>

      {/* footer */}

      <Footer />
      
       </div>
       <Toaster/>
       </AuthProvider>
  )
}

export default App
