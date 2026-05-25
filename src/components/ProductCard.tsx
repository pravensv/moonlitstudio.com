import { motion } from 'framer-motion';
import { ProductItem } from '../data/products';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: ProductItem;
}

function ProductCard({ product }: ProductCardProps) {
  const promoClass = product.promoText ? 'promo-card' : '';

  return (
    <motion.article whileHover={{ y: -6 }} className={`card product-card ${promoClass}`}>
      {product.promoText ? (
        <>
          <div className="promo-panel">
            <span className="promo-badge">{product.badge || 'Offer'}</span>
            <h3>{product.title}</h3>
            <p className="promo-text">{product.promoText}</p>
            <div className="promo-footer">
              <span className="price">{product.price}</span>
              <span className="offer-note">Limited stock offer</span>
            </div>
          </div>
          <div className="card-main">
            <img className="card-media" src={product.imageUrl} alt={product.title} loading="lazy" />
            <div className="product-mark">{product.image}</div>
            <p>{product.description}</p>
            <p className="product-details">{product.details}</p>
            <div className="card-actions">
              <a className="link-button" href={buildWhatsAppUrl(`I would like to enquire about ${product.title}.`)} target="_blank" rel="noreferrer">
                Buy / Enquiry
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <img className="card-media" src={product.imageUrl} alt={product.title} loading="lazy" />
          <div className="product-mark">{product.image}</div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className="product-details">{product.details}</p>
          <div className="card-actions">
            <span className="price">{product.price}</span>
            <a className="link-button" href={buildWhatsAppUrl(`I would like to enquire about ${product.title}.`)} target="_blank" rel="noreferrer">
              Buy / Enquiry
            </a>
          </div>
        </>
      )}
    </motion.article>
  );
}

export default ProductCard;
