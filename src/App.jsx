import './App.css'
import Business from './components/business/Business'
import Card from './components/card/Card'
import Control from './components/control/Control'
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
      <Control />
      <Card />
    </>
  )
}

export default App
