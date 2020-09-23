import Head from 'next/head'

export default function Home () {
  return (
    <div id='container'>
      <Head>
        <title>Adam Jermstad</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>
        <h1>Adam Jermstad</h1>
        <h6>Web Developer in Austin, TX</h6>
      </header>
      <div className='body' />
      <footer>
        <div>&#169; Copyright {(new Date()).getFullYear()} Adam Jermstad.</div>
      </footer>
    </div>
  )
}
