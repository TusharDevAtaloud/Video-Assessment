import './App.css';
import SwitchRoutes from 'routes';
import {BrowserRouter} from 'react-router-dom'

// import routes from routes
// import screenfull from 'screenfull'
// import {useEffect} from 'react';

function App() {

  // useEffect(()=>{
  //   if(screenfull.isEnabled){
  //     screenfull.request()
  //   }
  // },[])
  
  return (
    <div className="App">
      <BrowserRouter>
        <SwitchRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
