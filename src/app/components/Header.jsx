import Image from "next/image";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <div style={{ color: "red", fontSize: "40px" }}>NetBinge</div>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
