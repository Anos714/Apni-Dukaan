import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- MOCK DATA ---
const productsData = [
  {
    id: 1,
    name: "Quantum Wireless Mouse",
    category: "Electronics",
    price: 79.99,
    rating: 4.8,
    imageUrl: "https://placehold.co/600x400/9333ea/white?text=Quantum+Mouse",
    tags: ["tech", "gifts"],
  },
  {
    id: 2,
    name: "Aether Mechanical Keyboard",
    category: "Electronics",
    price: 189.5,
    rating: 4.9,
    imageUrl: "https://placehold.co/600x400/d946ef/white?text=Aether+Keyboard",
    tags: ["tech", "men", "gifts"],
  },
  {
    id: 3,
    name: "Nova Noise-Cancelling Headphones",
    category: "Audio",
    price: 249.0,
    rating: 4.7,
    imageUrl: "https://placehold.co/600x400/f43f5e/white?text=Nova+Headphones",
    tags: ["tech", "gifts"],
  },
  {
    id: 4,
    name: "Ergo-Flow Lumbar Chair",
    category: "Office",
    price: 350.0,
    rating: 4.6,
    imageUrl: "https://placehold.co/600x400/10b981/white?text=Ergo+Chair",
    tags: ["men", "women"],
  },
  {
    id: 5,
    name: "Zenith Ultrawide Monitor",
    category: "Electronics",
    price: 620.0,
    rating: 4.8,
    imageUrl: "https://placehold.co/600x400/3b82f6/white?text=Zenith+Monitor",
    tags: ["tech"],
  },
  {
    id: 6,
    name: "FlowState Smart Desk",
    category: "Office",
    price: 499.99,
    rating: 4.5,
    imageUrl: "https://placehold.co/600x400/6366f1/white?text=Smart+Desk",
    tags: ["men", "women"],
  },
  {
    id: 7,
    name: "Echo Studio Mic",
    category: "Audio",
    price: 129.99,
    rating: 4.7,
    imageUrl: "https://placehold.co/600x400/ec4899/white?text=Studio+Mic",
    tags: ["tech"],
  },
  {
    id: 8,
    name: "Ambient Desk Light",
    category: "Lighting",
    price: 89.99,
    rating: 4.8,
    imageUrl: "https://placehold.co/600x400/f97316/white?text=Desk+Light",
    tags: ["gifts"],
  },
  {
    id: 9,
    name: "Celestial Star Projector",
    category: "Kids",
    price: 45.0,
    rating: 4.9,
    imageUrl: "https://placehold.co/600x400/0ea5e9/white?text=Star+Projector",
    tags: ["kids", "gifts", "lighting"],
  },
  {
    id: 10,
    name: "Aura Smart Water Bottle",
    category: "Lifestyle",
    price: 55.0,
    rating: 4.7,
    imageUrl: "https://placehold.co/600x400/84cc16/white?text=Smart+Bottle",
    tags: ["women", "gifts", "tech"],
  },
  {
    id: 11,
    name: "Nomad Leather Wallet",
    category: "Accessories",
    price: 95.0,
    rating: 4.8,
    imageUrl: "https://placehold.co/600x400/78716c/white?text=Leather+Wallet",
    tags: ["men", "gifts"],
  },
  {
    id: 12,
    name: "Plush Coder Companion",
    category: "Kids",
    price: 29.99,
    rating: 5.0,
    imageUrl: "https://placehold.co/600x400/f59e0b/white?text=Coder+Plushie",
    tags: ["kids", "gifts", "tech"],
  },
  {
    id: 13,
    name: "Classic Crewneck T-Shirt",
    category: "Apparel",
    price: 24.99,
    rating: 4.6,
    imageUrl: "https://placehold.co/600x400/475569/white?text=T-Shirt",
    tags: ["men"],
  },
  {
    id: 14,
    name: "Floral Sundress",
    category: "Apparel",
    price: 65.0,
    rating: 4.8,
    imageUrl: "https://placehold.co/600x400/db2777/white?text=Sundress",
    tags: ["women"],
  },
  {
    id: 15,
    name: "Dinosaur Pajama Set",
    category: "Apparel",
    price: 35.5,
    rating: 4.9,
    imageUrl: "https://placehold.co/600x400/16a34a/white?text=Pajamas",
    tags: ["kids", "gifts"],
  },
  {
    id: 16,
    name: "Urban Slim-Fit Jeans",
    category: "Apparel",
    price: 89.99,
    rating: 4.5,
    imageUrl: "https://placehold.co/600x400/0284c7/white?text=Jeans",
    tags: ["men"],
  },
  {
    id: 17,
    name: "Silk Ruffle Blouse",
    category: "Apparel",
    price: 75.0,
    rating: 4.7,
    imageUrl: "https://placehold.co/600x400/c026d3/white?text=Blouse",
    tags: ["women"],
  },
  {
    id: 18,
    name: "Galaxy Explorer Hoodie",
    category: "Apparel",
    price: 49.99,
    rating: 5.0,
    imageUrl: "https://placehold.co/600x400/4338ca/white?text=Hoodie",
    tags: ["kids", "gifts"],
  },
];

// --- SVG ICONS ---
const CartIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);
const CloseIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
const PlusIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);
const MinusIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 12H6"
    />
  </svg>
);
const TrashIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

// --- COMPONENTS ---

// Header Component
const Header = ({ onCartClick, cartItemCount }) => {
  return (
    <header className="bg-white/60 backdrop-blur-md sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="text-violet-600">Apni</span>Dukaan
            </h1>
          </div>
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onCartClick}
              className="relative p-2 rounded-full text-gray-600 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              <span className="sr-only">View cart</span>
              <CartIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 bg-violet-600 text-white text-xs rounded-full">
                  {cartItemCount}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Filter Component
const Filter = ({ activeFilter, onFilterChange }) => {
  const filters = ["All", "Tech", "Men", "Women", "Kids", "Gifts"];
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 ${
              activeFilter === filter.toLowerCase()
                ? "bg-violet-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="bg-white rounded-lg shadow-md overflow-hidden group"
    >
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-3">
          <p className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(product)}
            className="bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-violet-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Product List Component
const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Products</h2>
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <AnimatePresence>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// Shopping Cart Component
const Cart = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-20"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-30 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-200"
              >
                <CloseIcon className="h-6 w-6" />
              </motion.button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                <CartIcon className="h-24 w-24 text-gray-300" />
                <h3 className="mt-4 text-xl font-semibold text-gray-700">
                  Your cart is empty
                </h3>
                <p className="mt-2 text-gray-500">
                  Looks like you haven't added anything yet.
                </p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    className="flex items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="px-3 font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {cartItems.length > 0 && (
              <div className="p-6 border-t">
                <div className="flex justify-between items-center mb-4 text-lg">
                  <span className="font-semibold text-gray-700">Subtotal</span>
                  <span className="font-bold text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
                >
                  Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Notification Component
const Notification = ({ message, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg z-50"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-100 border-t">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500">
      <p>&copy; {new Date().getFullYear()} ApniDukaan. All rights reserved.</p>
      <p className="text-sm mt-1">Created with Love by Rahul Sain</p>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState({
    message: "",
    isVisible: false,
  });
  const [activeFilter, setActiveFilter] = useState("all");

  const showNotification = (message) => {
    setNotification({ message, isVisible: true });
    setTimeout(() => {
      setNotification({ message: "", isVisible: false });
    }, 2000);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    showNotification(`${product.name} added to cart!`);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    showNotification("Item removed from cart.");
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter.toLowerCase());
  };

  const filteredProducts =
    activeFilter === "all"
      ? productsData
      : productsData.filter((product) => product.tags.includes(activeFilter));

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={cartItemCount}
      />
      <main>
        <Filter
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      </main>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      <Notification
        message={notification.message}
        isVisible={notification.isVisible}
      />
      <Footer />
    </div>
  );
};

export default App;
