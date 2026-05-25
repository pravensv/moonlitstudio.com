import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';

function RitualOilsPage() {
  return (
    <div className="page ritual-oils-page">
      <section className="section hero-split hero-page">
        <div className="container hero-content">
          <span className="eyebrow">Ritual oils</span>
          <h1>Potent oils crafted for intention and protection.</h1>
          <p>Find the perfect elixir for attraction, wealth, healing, and spiritual clarity.</p>
        </div>
      </section>
      <section className="section product-grid-page">
        <div className="container product-grid-inner">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default RitualOilsPage;
