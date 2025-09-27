import { render } from 'preact'
import { Router, Route } from 'preact-router'
import './style.css'
import { HomePage } from './components/HomePage'
import { PortfolioPage } from './components/PortfolioPage'

function App() {
  return (
    <Router>
      <Route path="/website/" component={HomePage} />
      <Route path="/website/portfolio" component={PortfolioPage} />
    </Router>
  )
}

render(<App />, document.getElementById('app')!)