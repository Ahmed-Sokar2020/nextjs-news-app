import NewsArticlesGrid from '@/components/NewsArticlesGrid'
import PaginationUi from '@/components/pagination'
import { NewsArticle } from '@/models/NewsArticles'
import Head from 'next/head'
import React, { FormEvent, useState } from 'react'
import { Alert, Button, Form, Spinner } from 'react-bootstrap'


const SearchNewsPage = () => {
    const [searchResults, setSearchResults] =useState<NewsArticle[] | null>(null);
    const [searchResultsLoading, setSearchResultsLoading] =useState(false);
    const [searchResultsIsError, setSearchResultsIsError] =useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const searchQuery = formData.get("searchQuery")?.toString().trim();

        if(searchQuery) {
            try {
                setSearchResults(null);
                setSearchResultsLoading(true);               
                setSearchResultsIsError(false);

                const response = await fetch(`/api/search-news?q=${searchQuery}`);
                const newsResponse: NewsArticle[] = await response.json();
                setSearchResults(newsResponse);

            } catch (error) {
                setSearchResultsIsError(true)
            } finally {
                setSearchResultsLoading(false);  
            }
        } else {
            alert('Please provide a valid search query');
        }  
    }

    return (
        <>
            <Head>
                <title>Search News | NextJS News App</title>
            </Head>

            <div>
                <h1>Search News</h1>

                <Alert>
                    This page is search news page using <strong>Client-side data fetching</strong> to
                    show fresh data for every search. Requests are handled by our backend via 
                    <strong> Api Routs</strong>.
                </Alert>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='search-input'>
                        <Form.Label>Search Query</Form.Label>
                        <Form.Control 
                        type="text"
                        name="searchQuery" 
                        placeholder="E.g. politics, sports..." 
                        />
                    </Form.Group>
                    
                    <Button 
                    className='mb-3' 
                    type='submit' 
                    disabled={searchResultsLoading}
                    >
                    Search
                    </Button>
                </Form>

                <div className='d-flex flex-column align-items-center'>
                    { searchResultsLoading && <Spinner animation='border' /> }
                    
                    { searchResultsIsError && <Alert variant='danger'>Something went wrong, please try again later</Alert> }

                    { searchResults?.length === 0 && <Alert variant='danger'>Nothing found, try a different query</Alert> }

                    { searchResults && <NewsArticlesGrid articles={searchResults} /> }
                </div>
            </div>
        </>
    )
}

export default SearchNewsPage