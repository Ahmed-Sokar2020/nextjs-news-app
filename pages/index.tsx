import NewsArticlesGrid from '@/components/NewsArticlesGrid'
import { NewsArticle, NewsResponse } from '@/models/NewsArticles'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Alert } from 'react-bootstrap'


type BreakingNewsPageProps = {
    newsArticles: NewsArticle[]
}

// export async function getServerSideProps(context) {}
export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
    // await new Promise(resolve => setTimeout(resolve, 3000));
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY)
    const newsData: NewsResponse = await response.json();
    return {
        props: {newsArticles: newsData.articles}
    }
    // Let error go to 500 page
}


export default function BreakingNewsPage({newsArticles}: BreakingNewsPageProps) {
    return (
        <>
            <Head>
                <title key="title">Breaking News | NextJS News App</title>
            </Head>

            <main>
                <h1>Breaking News</h1>
                <Alert>
                    This page is breaking news page that displays the latest headlines fetched by
                    an API and displayed in a grid layout using <strong>getServerSideProps</strong> to
                    fetch data server side on every request. This allows search engine to crawl the
                    page content and <strong>improve SEO</strong>.
                </Alert>
                <NewsArticlesGrid articles={newsArticles} />
            </main>
        </>
    )
}



