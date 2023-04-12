import styles from "../styles/login.module.css"
// import { useState } from "react"

export default function Login(): JSX.Element {
  // const [name, setName] = useState();
  // const [password, setPassword] = useState();
  // function loginHandler(e: string): void {
  //   e.preventDefault();
  // }

  return <div className={styles.login}>
            <div>Login Dashboard</div>
            {/* <div className="w-full h-4/5 ">
              <form onSubmit={loginHandler} className="flex-col items-center justify-center">
                <div className="mb-5">
                  <label>Username or Email</label>
                  <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Username" className="w-full"/>
                </div>
                <div className="mb-5">
                  <label>Password</label>
                  <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Password" className="w-full"/>
                </div>
                <input type="sumbit" className="bg-black text-white">Login</input>
              </form>
            </div> */}
        </div>
        ;
}
