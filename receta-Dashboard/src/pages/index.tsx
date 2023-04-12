import Login from "../components/Login";
import styles from "../styles/main.module.css";
import Header from "../components/subcomps/Header";

export default function Home(): JSX.Element {
  return (
    <div className={styles.main}>
      <Header />
      <div className="w-screen h-full bg-black flex justify-center items-center">
        <Login />
      </div>
    </div>
  );
}
