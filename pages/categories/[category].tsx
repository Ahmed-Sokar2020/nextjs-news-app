import NewsArticlesGrid from '@/components/NewsArticlesGrid'
import { NewsArticle, NewsResponse } from '@/models/NewsArticles'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { Alert } from 'react-bootstrap'


type categoryNewsPageProps = {
    newsArticles: NewsArticle[]
}

export const getStaticPaths:GetStaticPaths = async () => {
    const categoryTypes = ['business','entertainment','general','health','science','sports','technology']
    const paths = categoryTypes.map(type => ({params: {category: type}}))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<categoryNewsPageProps> = async (context) => {
    const category = context.params?.category?.toString();
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`)
    const newsData: NewsResponse = await response.json();
    return {
        props: {
            newsArticles: newsData.articles,
            revalidate: 5 * 60 // To show new page data every 5 minutes
        }
    }
     // Let error go to 500 page
}

const CategoryNewsPage = ({newsArticles}:categoryNewsPageProps) => {
    const router = useRouter();
    const categoryName = router.query.category?.toString();
    const title = "Category: " + categoryName;
    return (
        <>
            <Head>
                <title key="title"> {`${title} | NextJS News App`}</title>
            </Head>

            <h1>{title}</h1>

            <Alert>
                This page uses <strong>getStaticProps </strong> for very high page loading speed 
                and <strong>Incremental Static Regeneration </strong> to show data not older than
                <strong> 5 minutes</strong>
            </Alert>

            <div>
                <NewsArticlesGrid articles = {newsArticles}/>
            </div>
        </>
    )
}

export default CategoryNewsPage