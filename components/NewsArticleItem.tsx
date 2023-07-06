import { NewsArticle } from '@/models/NewsArticles'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import placeholderImage from '@/assets/images/newspapper_placeholder.jpg'
import styles from '@/styles/NewsArticleItem.module.css'

type NewsArticleItemProps = {
  article: NewsArticle
}

const NewsArticleItem = ({article}: NewsArticleItemProps) => {
  const {title, description, url, urlToImage} = article;

  const validImageUrl = 
  urlToImage?.startsWith("http://") || 
  urlToImage?.startsWith("https://") ? urlToImage : undefined;

  return (
    <Link href={url}>
      <Card className='h-100'>
        <Image
        src={validImageUrl || placeholderImage}
        alt="news article image"
        width={400}
        height={200}
        className={`card-img-top ${styles.image}`}
        />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default NewsArticleItem