'use client'
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import styles from "./page.module.css";
import Picks from "./Components/Picks/Picks";

export default function Home() {
  return (
    <div className=''>
      <main className=''>
        <Navbar/>
        <Hero/>
        <Picks />
      </main>
      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  );
}
