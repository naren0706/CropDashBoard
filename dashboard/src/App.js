import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

import Sbar from './components/sidebar/Sbar';

import TopBar from "./components/Topbar/TopBar";
import Pages from './pages/Main/Pages';



function App() {

      return (
       
        <div className='container'>
          <div className='topbox'>
            <TopBar />
          </div>
          <div className='sidebox'>
            <Sbar/>
          </div>
          <div className='pages'>
            <Pages/>
          </div>
          {/* hi */}
        </div>
  );
}

export default App;
