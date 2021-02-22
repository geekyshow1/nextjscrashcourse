import styles from '../styles/Home.module.css'
import Title from '../components/Title'
export default function Home({ data }) {
  return (
    <>
      <Title title="Home" />
      <h1>Home Page</h1>
      <div className={styles.container}>
        {data.map((post, i) => {
          return (
            <div key={i}>
              <h3>{post.title}</h3>
              <p>{post.body}</p> <hr />
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
