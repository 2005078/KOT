import Head from "next/head";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>KOT</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar />
        <div className='bg-[#CFFFD7] h-full w-full fixed mt-[72px]'>
          <Hero />
        </div>
      </main>
    </>
  );
}