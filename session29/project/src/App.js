import {Outlet} from 'react-router-dom'
import Nabvabr from './Nabvabr';
function App() {
  return (

    <>
      <Nabvabr />
      <h1>app component</h1>



      <Outlet />

      
    </>
  );
}

export default App;
