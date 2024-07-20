import { motion } from "framer-motion";
import "../styles/components/Merch.css";
import { products } from "../data/merchProducts";

export default function Merch() {
  return (
    <div className="merch-container">
      <div className="container mx-auto px-5">
        <motion.h2
          className="merch-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Merchandise
        </motion.h2>
        <motion.div
          className="merch-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="merch-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="merch-image"
              />
              <div className="merch-info">
                <h3 className="merch-name">{product.name}</h3>
                <p className="merch-price">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
