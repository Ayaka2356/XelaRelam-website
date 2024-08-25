import styles from "@/styles/about.module.css"
import Navbar from "@/components/mainPage/navbar";
import Footer from "@/components/mainPage/footer";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Navbar/>
      <main className={`container mx-auto p-4`}>
          <div className={styles.container}>
            <h1 className={styles.heading}>XelaRelam Community</h1>
            <p className={styles.content}>XelaRelam Community is an organized community server aiming to create a friendly and family-like experience to everyone! our community is made to support an unique discord community experience to all! we are a totally sfw server suiting all age groups and anybody from anywhere from any background can fully enjoy our features!!, also provides support for Coding communities as well.</p>
            <h2 className={styles.heading}>What we provide ?</h2>
            <ul className={styles.list}>
              <li className={styles.list_item}>🌏. Organized server to feed you with an unique Discord community experience!</li>
              <li className={styles.list_item}>🌀. Clean, organized and simple server orientation</li>
              <li className={styles.list_item}>😉. Fully sfw environment!</li>
              <li className={styles.list_item}>🔫. Discord games such as counting, akinator, roast, etc!</li>
              <li className={styles.list_item}>⚖️. Strict universal rules to enhance your stay and involvement!</li>
              <li className={styles.list_item}>👔. Friendly and responsive staff team!</li>
              <li className={styles.list_item}>👾. Add your bot here and test with other developers.</li>
              <li className={styles.list_item}>📒. A best guiding and teaching server in different coding languages and best guiding discord server.</li>
              <li className={styles.list_item}>💻. Share your codes and apis such as BDFD, Aoijs, Forgescript, Discord.js, Python, etc.</li>
              <li className={styles.list_item}>🔑. Get support related to coding lanaguages such BDFD, Aoijs, Forgescript, Discord.js, Python, etc.</li>
              <li className={styles.list_item}>🎨. Active Community with weekly/monthly events and Coding Programs in the server.</li>
              <li className={styles.list_item}>📜. Enhance your skills with other developers to improve yourselves.</li>
          </ul>
          <p className={styles.content}>Join us today to experience it all!</p>
        </div>
      </main>
      <Footer/>
    </>
  );
}
