import { useState } from "react";
import { motion } from "framer-motion";
import "../../assets/styles/pages/layouts/Merch.css";
import { products } from "../../data/merchProducts";

export default function Merch() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0); // Reset image index
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClosePopup();
    }
  };

  return (
    <>
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
                onClick={() => handleCardClick(product)}
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

        {selectedProduct && (
          <motion.div
            className="merch-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              className="merch-popup"
              style={{
                backgroundColor: "black",
                color: "white",
                borderColor: "white",
              }}
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.5 }}
            >
              <button className="merch-popup-close" onClick={handleClosePopup}>
                ×
              </button>
              <div className="merch-popup-content">
                <div className="merch-popup-image">
                  <img
                    src={selectedProduct.allImages[currentImageIndex]}
                    alt={`${selectedProduct.name} main`}
                    className="merch-popup-main-image"
                  />
                </div>
                <div className="merch-popup-details">
                  <h3 className="merch-popup-name">{selectedProduct.name}</h3>
                  <p className="merch-popup-price">{selectedProduct.price}</p>
                  <p className="merch-popup-description">
                    {selectedProduct.description || "No description available."}
                  </p>
                  <a
                    href={selectedProduct.buyLink || "https://bit.ly/MicroMaze-Merch"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="merch-popup-button"
                  >
                    Buy Now
                  </a>
                  <div className="merch-popup-thumbnails">
                    {selectedProduct.allImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`merch-popup-thumbnail ${
                          index === currentImageIndex ? "active" : ""
                        }`}
                        onClick={() => handleThumbnailClick(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
}
