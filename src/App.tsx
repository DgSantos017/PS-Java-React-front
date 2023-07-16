import { Home } from './pages/Home'
import { TransfersProvider } from './contexts/Transferencs'

const App = () => {
  return (
    <TransfersProvider>
      <Home />
    </TransfersProvider>
  )
}

export default App
