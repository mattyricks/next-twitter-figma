import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { getAllPosts, createPost } from "../lib/posts";

import Head from "next/head";
import Bio from "../components/Bio/Bio";
import Post from "../components/Post";
import PostForm from "../components/PostForm";

import styles from "../styles/Home.module.scss";

export default function Home({ posts: defaultPosts }) {
  const [posts, updatePosts] = useState(defaultPosts);

  const postsSorted = posts.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  const { user, logIn, logOut } = useAuth();

  async function handleOnSubmit(data, e) {
    e.preventDefault();

    await createPost(data);

    const posts = await getAllPosts();
    updatePosts(posts);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Login */}
      {!user && (
        <p>
          <button onClick={logIn}>Log In</button>
        </p>
      )}
      {/* Logout */}
      {user && (
        <p>
          <button onClick={logOut}>Log Out</button>
        </p>
      )}

      <main className={styles.main}>
        <Bio
          headshot="https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          name="Matthew Ricklefs"
          tagline="Helping others to learn by doing!"
          role="Developer Advocate @ Humana"
        />

        <ul className={styles.post}>
          {postsSorted.map((post) => {
            const { content, id, date } = post;

            return (
              <li key={id}>
                <Post
                  content={content}
                  date={new Intl.DateTimeFormat("en-US", {
                    dateStyle: "short",
                    timeStyle: "short",
                  }).format(new Date(date))}
                />
              </li>
            );
          })}
        </ul>

        {user && <PostForm onSubmit={handleOnSubmit} />}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
