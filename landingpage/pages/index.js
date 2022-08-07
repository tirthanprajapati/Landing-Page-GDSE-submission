import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "../components/navbar";
import logo2 from "../public/logo2.png";
import img1 from "../public/1.jpg";
import img2 from "../public/2.jpg";
import img3 from "../public/4.jpg";
import img4 from "../public/4.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Learn to Code from here" />
        <link rel="icon" href="/loogo.ico" />
      </Head>
      <div className={styles.hmead}>
        <Image src={logo2} alt="Error4" height="90%" width="252%" />
        <button className={styles.butt}>
          <span className={styles.button_top}> {"Login / Sign Up"}</span>
        </button>
      </div>
      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>
          {"Welcome to"} <Link href="/">{"Hello World"}</Link>
        </h1>

        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <Image src={img1} alt="Error" />
              <h2>Hello World Pro &rarr;</h2>
              <p>
                {"Unlock all the pro features like debugging and solutions.LoremIpsum Aliquam commodo, diam ac."}
              </p>
            </a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
              <Image src={img2} alt="Error1" />
              <h2>Learn &rarr;</h2>
              <p>
                {"Learn more about algorithms and Data structure in an interactive course with problems!"}
              </p>
            </a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
              <Image src={img3} alt="Error2" />
              <h2>Staters 51 &rarr;</h2>
              <p>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo, diam ac fermentum rhoncus, erat nulla interdum metus,eget fermentum."}
              </p>
            </a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
              <Image src={img4} alt="Error3" />
              <h2>About Hello World &rarr;</h2>
              <p>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integerconvallis ligula dapibus elit semper hendrerit. In fermentumorci nisl, quis."}
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <a>
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </Link>
      </footer>
    </div>
  );
}
