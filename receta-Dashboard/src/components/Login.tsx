import styles from "../styles/login.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Login(): JSX.Element {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function loginHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(e.target);

    const isValid = name === "bat" && password === "123";
    if (isValid) {
      console.log("logged in");
      router.push("/Layout");
    } else {
      console.log("false");
    }
  }

  return (
    <div className={styles.login}>
      <div>Login Dashboard</div>
      <div className="w-full h-4/5 ">
        <form
          onSubmit={loginHandler}
          className="flex-col items-center justify-center"
        >
          <div className="mb-5">
            <label>Username or Email</label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setName(e.target.value);
              }}
              name="userName"
              type="text"
              placeholder="Username"
              className="w-full"
            />
          </div>
          <div className="mb-5">
            <label>Password</label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setPassword(e.target.value)
              }
              name="password"
              type="text"
              placeholder="Password"
              className="w-full"
            />
          </div>
          <button type="submit" className="bg-black text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
