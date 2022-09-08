import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import axios from 'axios'
import { Article } from '../../types'
import NewsCard from '../../components/NewsCard'

const NewsPage = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      try {
        const res = await axios.get('http://hn.algolia.com/api/v1/search?')
        // console.log(res.data)
        setArticles(res.data.hits)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.newPage_wrapper}>
      <h1>Hacker News</h1>
      <main className={styles.newPage_newsContainer}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          articles.map((article) => (
            <NewsCard key={article.objectID} article={article} />
          ))
        )}
      </main>
      {!isLoading && (
        <button className={styles.newPage_loadMoreButton}>Load More</button>
      )}
    </div>
  )
}

export default NewsPage
