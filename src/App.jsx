import './App.css'
import Partners from './components/Partners/Partners'
import Business from './components/business/Business'
import Card from './components/card/Card'
import Control from './components/control/Control'
import Landing from './components/landing/Landing'
import Rates from './components/rates/Rates'
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
      <Rates />
      <Partners />
    </>
  )
}

export default App
