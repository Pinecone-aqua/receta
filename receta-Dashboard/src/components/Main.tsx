import Login from "./Login";
import styles from "../styles/main.module.css"
import Header from "./subcomps/Header";

export default function Main(): JSX.Element {
  return  <div className={styles.main}>
            <Header/>
            <div className="w-screen h-full bg-black flex justify-center items-center">
              <Login />
            </div>
          </div>;
}
