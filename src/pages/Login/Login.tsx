import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import {loginUser,userSignup} from '../../firebase'
import loading_spinner from '../../assets/netflix_spinner.gif'
const Login = () => {

    const [signState,setSignState] = useState('Sign In');
    const [name,setName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [loading,setLoading] = useState<boolean>(false)

    const userAuth = async (event:React.MouseEvent<HTMLButtonElement>)=>{
      event.preventDefault();
      setLoading(true)
      if(signState==='Sign In')
        await loginUser(email,password)
      else
        await userSignup(name,email,password)
      setLoading(false)
    }
    return (
       loading ? <div className="loading-spinner">
        <img src={loading_spinner} alt="" />
        </div> :
        < div className='login-div'>
        <div>
            <img src={logo} alt="" className='logo-img' />
        </div>
        <div className="flex items-center justify-center min-h-screen">
            
            <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-lg bg-black bg-opacity-70">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white">{signState}</h2>
                <p className="mt-2 text-gray-400">to continue to Netflix</p>
              </div>
              <form className="space-y-6">
              { signState==='Sign Up' ? <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 mt-1 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>:null
               }
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 mt-1 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-3 mt-1 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 mt-6 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={userAuth}
                >
                 {signState}
                </button>
              </form>
              <div className="flex justify-between mt-4 text-sm text-gray-400">
                { signState==='Sign In'? 
                <>
              <a href="#" className="hover:underline" onClick={()=>setSignState('Sign Up')}>
                New to Netflix? Sign Up
              </a>
              </>
              :<a href="#" className="hover:underline" onClick={()=>setSignState('Sign In')}>
             Already Have An Account ? Sign In
            </a>}
              </div>
            </div>
          </div>
        </div>
      );
}

export default Login
