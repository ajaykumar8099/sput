import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import './index.css';

const sampleProducts = [
    {
      title: 'You argue with a colleague',
      className:'lightblue',
      description: 'You get angry and defensive, instead of staying open and working towards common ground',
      image: 'https://w7.pngwing.com/pngs/1/863/png-transparent-yellow-emoji-illustration-smiley-emoticon-wink-whatsapp-smile-emoji-miscellaneous-face-internet-forum-thumbnail.png',
    },
    {
      title: 'You get a Promotion',
      className:'lightyellow',
      description: 'You question yourself and wonder when they will realize your are an unqualified imposter, instead of trusting yourself && your abilities.',
      image: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_grande.png?v=1571606036',
    },
    {
      title: 'your right partener',
      className:'lightgreen',
      description: 'having a right partner always a great advantage of wealth life. make sure spend time with them.',
      image: 'https://png.pngtree.com/png-clipart/20220605/original/pngtree-slightly-smiling-face-emojie-png-image_7964838.png',
    },
    {
        title: 'Your attention',
        className:'lightorange',
        description: 'You may loss your attention on anxiety situations. but always be calm and be positive.',
        image: 'https://e7.pngegg.com/pngimages/303/653/png-clipart-emoticon-smiley-emoji-smiley-miscellaneous-stock-photography.png',
      },
      {
        title: 'Your consistency',
        className:'navy',
        description: 'Consistency make you and feel you more succesfull be ensure that where you are on these particular manner.',
        image: 'https://t3.ftcdn.net/jpg/05/05/86/58/360_F_505865847_HAJ4BtMDxVYTKlveu5BDyljAym3ODnO8.jpg',
      },
      {
        title: 'being exercise',
        className:'red',
        description: 'Maintian well disiplane and food diet regading your body and mental health will plays key role on your success.',
        image: 'https://freepngimg.com/download/emoji/102971-emoji-happy-hd-image-free.png',
      },
    
  ];

const ProductContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sampleProducts.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="product-container">
      {sampleProducts.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          image={product.image}
          className={product.className}
        />
      ))}
    </div>
  );
};

export default ProductContainer;
