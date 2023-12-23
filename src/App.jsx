import './App.css'
import Business from './components/business/Business'
import Landing from './components/landing/Landing'
import Stats from './components/stats/Stats'
import Nav from './main_components/nav/Nav'

function App() {

  return (
    <>
      <Nav />
      <Landing />
      <Stats />
      <Business />
    </>
  )
}

export default App
