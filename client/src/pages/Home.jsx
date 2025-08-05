import HeroSection from '../homesection/HeroSection';
import Categories from '../homesection/Categories';
import CrockerySample from '../homesection/CrockerySample';
import ToysSample from '../homesection/ToysSample';
import Newsletter from '../homesection/HomeCta';

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
