import Head from "next/head";
import Post from "../components/Post";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Posts</h1>

        <ul className={styles.post}>
          <li>
            <Post content="Hey, I'm a new post!" date="01/24/2021" />
          </li>

          <li>
            <Post
              content="I’m working in Figma, designing a website to display all of my
              tweets!"
              date="01/24/2022"
            />
          </li>

          <li>
            <Post
              content="I’m working in Figma, designing a website to display all of my
              tweets!"
              date="01/24/2022"
            />
          </li>

          <li>
            <Post
              content="I’m working in Figma, designing a website to display all of my
              tweets!"
              date="01/24/2022"
            />
          </li>
        </ul>

        <form>
          <textarea className={styles.formContent}></textarea>

          <button className={styles.formButton}>Add New Post</button>
        </form>
      </main>
    </div>
  );
}
