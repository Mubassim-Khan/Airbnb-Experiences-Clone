import './App.css';
import Card from './Components/Card';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import data from './Response'

function App() {
  const items = data.map(item => {
    return (
      <Card
        image={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
      />
    )
  })
  return (
    <>
      <Navbar />
      <Hero />
      {items}
    </>
  );
}

export default App;
