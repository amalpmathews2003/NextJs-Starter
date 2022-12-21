import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Starter</title>
        <meta name="description" content="NextJs Start" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center items-center h-screen'>
        <h1 className="text-3xl font-bold underline">
          NextJS Starter With Tailwind and Typescript
        </h1>
      </main>
    </>
  )
}
