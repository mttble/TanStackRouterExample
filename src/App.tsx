import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from './components/NavBar'
import Body from './components/Body'
import Footer from './components/Footer'
import { TopNav } from './components/component/top-nav'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
        <TopNav />
        <Body />
        <Footer />
      
    </ThemeProvider>
  )
}

export default App
