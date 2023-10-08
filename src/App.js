
import { Button, TextField } from '@mui/material';
import './App.css';



function App() {
  return (
    <>
      <div className="app">
        <div className='container'>
          {/* text*/}
          <div className='heading'>
            <h1 className='main-heading'>facebook</h1>
            <p className='about-fb'>Facebook help you connect and share with the people in your life</p>
          </div>
          {/* form */}

          <form>

            <div class="input-form">

            <div class="text-field">
            <TextField className='outlined-basic' id="outlined-basic" label="Email" variant="outlined" />
            </div>

            <div class="text-field">
            <TextField className='outlined-basic' id="outlined-basic" label="Password" variant="outlined" />
            </div>

           {/* button */}
           <div className='button-btn'>
           <button className='btn'>Login</button>
           </div>

            </div>

            
            

          </form>
          
          
        </div>
      </div>
    </>
  );
}

export default App;
