import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
/* import Bootstrap  from './components/Bootstrap' */
/*import ReactBootstrap from './components/ReactBootstrap';*/
/*import MaterialCard from './components/MaterialCard';*/
/*import MaterialUI from './components/MaterialUI';*/
import MaterialDrawer from './components/MaterialDrawer';



function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div>
      <h1>Frameworks css con react</h1>
      {/*<Bootstrap />*/  /*aca comente pq no se deben mezclar los frameworks en react */} 
      {/*<ReactBootstrap/>*/}
      {/*<MaterialUI/>*/}
      {/*<MaterialCard/>*/}
      <MaterialDrawer/>

    </div>
  )
}

export default App



