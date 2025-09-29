import { render } from 'preact'
import { Router, Route } from 'preact-router'
import './style.css'
import { HomePage } from './components/HomePage'
import { PortfolioPage } from './components/PortfolioPage'

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/shop" component={PortfolioPage} />
    </Router>
  )
}

render(<App />, document.getElementById('app')!)