
import { TextField } from '@mui/material';
import './App.css';



function App() {
  return (
    <>
      <div className="app">
        <div className='container'>
          {/* text*/}
          <div className='headings'>
            <img  className='mainheading 'src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg"></img>
            {/* <h1 className='main-heading'>facebook</h1> */}
            <p className='about-fb'>Facebook help you connect and share with the people in your life</p>
          </div>
          {/* form */}

          <form>

            <div class="input-form">

            <div class="text-field">
            <TextField className='outlined-basic' id="outlined-basic" label="Email address or phone number" variant="outlined" />
           
            </div>

            <div class="text-field">
            <TextField className='outlined-basic' id="outlined-basic" label="Password" variant="outlined" />
            </div>

           {/* button */}

           <div className='button-btn'>
           <button className='login-button'>Login</button>
           </div>

           <div className='forgot-msg'>
            <h6>Forgotten Password?</h6>
           </div>

           <div className='new-account'>
            <button className='create-acctn'> Create new account</button>

           </div>

            </div>
 

            <div className='sectionlast'>
            <h6>create a page for a celebrity,brand or business</h6>

          </div>
          </form>

          
          
        </div>
      </div>
    </>
  );
}

export default App;
