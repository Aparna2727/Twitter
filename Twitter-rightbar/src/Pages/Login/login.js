import React from 'react'
import { Link } from 'react-router-dom'

export function LoginPage(){
    return(
        <>
        <div>
        <div>Icon-Twitter</div>
        <h1>Sign in to Twitter</h1>
        <div>
        <button>Sign in with Google</button>
        </div>
        <div>
        <button>Sign in with Apple</button>
        </div>
        <span>or</span>

        <input type="text" />

        <div><button>Next</button></div>

        <div><button>Forgot password?</button></div>

        <h3>Don't have an account<Link>Sign up</Link></h3>
        </div>
        </>
    )
}