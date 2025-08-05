import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import CrockerySample from '../components/CrockerySample';
import ToysSample from '../components/ToysSample';
import Newsletter from '../components/HomeCta';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <CrockerySample />
      <ToysSample />
      <Newsletter />
    </>
  );
}
