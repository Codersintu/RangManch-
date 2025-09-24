
import './App.css'
import Content from './component/Content'
import Sidebar from './component/Sidebar'
import Topbar from './component/Topbar'

function App() {
  return (
   <div className="flex w-full h-screen ">
    <Sidebar/>
    <div className="bg-white flex-1 overflow-auto">
      <Topbar/>
      <Content/>
    </div>
   </div>
  )
}

export default App
