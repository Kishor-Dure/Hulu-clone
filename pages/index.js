import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import request from '../utilis/request'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />      
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requests = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url
      }`
   ).then(res => res.json())

   return {
     props: {
       results: requests.results
     },
   }
}
