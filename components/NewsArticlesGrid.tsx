import { NewsArticle } from '@/models/NewsArticles'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NewsArticleItem from './NewsArticleItem'
import PaginationUi from './pagination'

type NewsArticlesGridProps = {
    articles: NewsArticle[]
}

const NewsArticlesGrid = ({articles}: NewsArticlesGridProps) => {
    return (
        <>
            <Row xs={1} md={2} xl={3}>
                {
                    articles.map(article => (
                        <Col key={article.url} className="mb-4">
                            <NewsArticleItem article= {article}/>
                        </Col>
                    ))
                }
            </Row>

            <Row>{articles && <PaginationUi />}</Row>
        </>
    )
}

export default NewsArticlesGrid