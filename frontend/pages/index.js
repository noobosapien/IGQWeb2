import Download from '../components/Download';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Hero from '../components/Hero';
import NewsLetter from '../components/NewsLetter';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <NewsLetter />
    </div>
  );
}
