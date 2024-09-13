import Product from "@/components/product/Product";
import Hero from "./(home)/hero/Hero";
import HotProducts from "./(home)/hotProducts/HotProducts";
import Categories from "./(home)/categories/Categories";
import LatestProducts from "./(home)/latestProducts/LatestProducts";
import Phones from "./(home)/phones/Phones";


const Home = () => {
  return (
  <main>
    <Hero />
    <HotProducts />
    <Categories />
    <LatestProducts />
    <Phones />
  </main>
  )
  
};

export default Home;
