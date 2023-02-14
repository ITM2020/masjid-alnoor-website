import Image from "next/image";
import styles from "../styles/index.module.css"

import { promises as fs } from 'fs';
import path from "path";
import matter from "gray-matter";

export default function Announcements({ posts }) {
  return (
    <section className="h-screen bg-gray-200">
      <div className="relative overflow-hidden h-1/3 bg-[url('/img/gridBackgrounds/announcements.jpg')] bg-cover to-transparent">
        <h1>Announcements</h1>  
      </div>
        
      <div>
        {posts.map((post) => (
          <div key={post.metaData.date}>
            <p>{post.metaData.title}</p>
            <p>{post.metaData.title}</p>
            <p>{post.metaData.title}</p>
          </div>
        ))}
      </div>  
    </section>
  )
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'public/_posts/announcements');
  const fileNames = await fs.readdir(postsDirectory);

  const posts = fileNames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = await fs.readFile(filePath, 'utf8')
    
    const { data, content } = matter(fileContents);
    
    return {
      filename: filename,
      metaData: data,
      content: content,
    }
  })

  return {
    props: {
      posts: await Promise.all(posts)
    } // will be passed to the page component as props
  }
}