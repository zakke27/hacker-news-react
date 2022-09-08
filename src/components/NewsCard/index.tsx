import React, { FC } from 'react'
import styles from './style.module.scss'
import { Article } from '../../types'

interface NewsCardProps {
  article: Article
}

const NewsCard: FC<NewsCardProps> = ({ article }) => {
  if (!article.title) {
    return null
  }

  return (
    <div className={styles.newCard_wrapper}>
      <h3>{article.title}</h3>
      <a href={article.url}>Read More</a>
    </div>
  )
}

export default NewsCard
