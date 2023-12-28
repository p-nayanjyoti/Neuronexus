import React, { useState } from 'react';
import { useCart } from  '../contexts/CartContext';


const Home = () => {
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [addedToCart, setAddedToCart] = useState(null);

  const products = [
    { id: 1, category: 'Mobile', name: 'iPhone 14', price: 999, image: 'https://idestiny.in/wp-content/uploads/2023/09/iPhone_15_Pink_PDP_Image_Position-1__WWEN.jpg' },
    { id: 2, category: 'Laptop', name: 'MacBook Pro', price: 1499, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1664472289059' },
    
    { id: 3, category: 'Earphone', name: 'AirPods Pro', price: 386, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyW1BRhruYoLMRcHCsf--IIQ-_NpajDNmGqw&usqp=CAU' },
    { id: 4, category: 'Mobile', name: 'AirPods Pro', price: 345, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/p/w/b/-original-imagmefcaj26vdhg.jpeg?q=90' },
    { id: 5, category: 'Mobile', name: 'OnePlus Nord 2T', price: 249, image: 'https://www.jiomart.com/images/product/original/493665925/oneplus-nord-ce-3-lite-5g-256-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493665925-p600340967-0-202304101447.jpeg?im=Resize=(420,420)' },
    { id: 6, category: 'TV', name: 'Samsung tv', price: 949, image: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua55aue65akxxl/gallery/in-uhd-au7002-425303-ua55aue65akxxl-532615701?$650_519_PNG$' },
    { id: 7, category: 'ipad', name: 'Apple Ipad ', price: 219, image: 'https://www.aptronixindia.com/media/catalog/product/i/p/ipad_10th_gen_1.png' },
    { id: 8, category: 'Laptop', name: 'Dell 3440 Gaming Laptop ', price: 249, image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/media-gallery/notebook-latitude-14-3440-nt-uma-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=664&qlt=100,1&resMode=sharp2&size=664,402&chrss=full' },
    { id: 9, category: 'Laptop', name: 'HP Pavilion', price: 569, image: 'https://www.jiomart.com/images/product/original/493838073/hp-pavilion-15-eg3082tu-standard-laptop-intel-u300-12-gb-512-gb-ssd-intel-uhd-windows-11-home-full-hd-39-6-cm-15-6-inch-digital-o493838073-p602386944-7-202309141706.jpeg?im=Resize=(420,420)' },
    { id: 10, category: 'Earphone', name: 'Boat Airdopes', price: 234, image: 'https://www.boat-lifestyle.com/cdn/shop/files/Artboard_1__3_-removebg-preview.png?v=1686628064' },

    
  ];

  const handleSearch = (event) => {
    setSearchText(event.target.value); // Update search text
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const addToCartHandler = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    addToCart(productToAdd); // Call addToCart function from the context
    setAddedToCart(productId);
    
    
  };



  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) {
      return false;
    }
    if (

      searchText.trim() === '' ||
      product.name.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center justify-between mb-6">
        {/* Search and category select components... */}
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          className="border border-gray-300 p-2 rounded-md w-1/2"
        />
        <select
          onChange={handleCategoryChange}
          value={selectedCategory}
          className="border border-gray-300 p-2 rounded-md ml-4"
        >
          <option value="All">All Categories</option>
          <option value="Mobile">Mobiles</option>
          <option value="Laptop">Laptops</option>
          <option value="Earphone">Earphones</option>
          <option value="ipad">Tablet</option>
          <option value="TV">TV</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-md p-4 ">
            <img 
              src={`${product.image}`} // Assuming images are stored in the 'images' folder
              alt={product.name}
               className="w-60 h-40 object-cover "
            />
            <h2 className="text-lg font-semibold bottom-0">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm text-gray-500 ">{product.category}</p>
            <button
              onClick={() => addToCartHandler(product.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
              disabled={addedToCart === product.id}
            >
              {addedToCart === product.id ?  'Added!' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
