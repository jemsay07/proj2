'use client'
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Picks from "./Components/Picks/Picks";
import Experience from "./Components/Experience/Experience";
import Yt from "./Components/YT/YT";
import data from './assets/ImgData';
import Footer from "./Components/Footer/Footer";

Footer

export default function Home() {
  return (
    <div className=''>
      <main className=''>
        <Navbar/>
        <Hero data={data?.heroData}/>
        <Picks data={data?.picksData}  dataItem={data?.picksDataItem}/>
        <Experience dataExp={data?.expData}/>
        <Yt ytData={data?.ytUrl} />
      </main>
      <Footer />
    </div>
  );
}