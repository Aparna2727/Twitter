import React from 'react'
import { Link } from 'react-router-dom';


import {signUp} from './signUp.css';

export default function SignUp() {
  return (
    
        <div className="logo">
            <img src="./TwitterImg.png" className="logo-box"/>
            <h2 className="heading">Join Twitter today</h2>

            
            <button>
            <img src="./GoogleImg.png" className='logo-box' />
            Sign Up with Google
            </button>
            
            <button>
            <img src="./AppleImg.png" className='logo-box' />
            Sign Up with Apple
            </button>
            <hr></hr>
            <span>or</span>

           <div><button>Create account</button></div>
            
       
            <p>By signing up, you agree to the <Link>Terms of Service</Link>and <Link>Privacy Policy</Link>, including <Link>Cookie Use</Link>.</p>
         

            <p>Have an account already?<Link>Log in</Link></p>

        </div>
    
  )
}