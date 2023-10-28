import './App.css'
import { Contents } from './components/Contents'
import { Layout } from './components/Layout'


function App() {

  return (
    <Layout>
      <div className="w-1/2">
        <Contents />

      </div>
    </Layout>
  )
}

export default App
