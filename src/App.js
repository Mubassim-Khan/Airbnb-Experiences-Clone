import './App.css';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import data from './Response'

function App() {
  const items = data.map(item => {
    return (
      <Card
        key={item.id}
        image={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
        status={item.status}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards">     {/* Wrapping Card in Section tag to apply styling */}
        {items}
      </section>
      <Footer />
    </>
  );
}

export default App;
