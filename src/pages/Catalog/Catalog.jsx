import React from 'react';
import CakeCard from '../../components/CakeCard/CakeCard';
import './Catalog.css';

const cakes = [
  // ===== ТОРТЫ =====
  {
    id: 1,
    name: 'Медовик классический',
    description: 'Нежные медовые коржи, сметанный крем, сливочный крем',
    price: 2100,
    image: 'https://cdn.lifehacker.ru/wp-content/uploads/2022/11/shutterstock_2154067297_1668017816-1800x900.jpg',
    weight: '1.4 кг',
    popular: true,
    category: 'tort'
  },
  {
    id: 2,
    name: 'Сникерс',
    description: 'Шоколадные коржи, соленая карамель, арахис, творожный сыр на сливках, творожный сыр на масле',
    price: 3000,
    image: 'https://kubnews.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/a04/1200_800_2/0l3iwxxxh511qkyjon5h2jsj7dg004qn.webp',
    weight: '1.5 кг',
    popular: true,
    category: 'tort'
  },
  {
    id: 3,
    name: 'Ванильный торт',
    description: 'Ванильные коржи, творожный сыр на сливках, творожный сыр на масле',
    price: 2700,
    image: 'https://studio.jvcompany.ru/system/products/0000/0112/112-mcard.jpg?1614015968',
    weight: '1.5 кг',
    popular: true,
    category: 'tort'
  },
  {
    id: 4,
    name: 'Шоколадный торт',
    description: 'Шоколадные коржи, шоколадный крем, творожный сыр на сливках',
    price: 3000,
    image: 'https://cdn-s-static.catery.ru/storage/menu/item/3/6/3/7/363729/preview_preview_image-qbXEfCvO1KLdOV-jD55QdNYmZ7gyxSXskw.jpg',
    weight: '1.5 кг',
    popular: true,
    category: 'tort'
  },
  {
    id: 5,
    name: 'Красный бархат',
    description: 'Красный бисквит, творожный сыр на сливках, творожный сыр на масле',
    price: 3000,
    image: 'https://aleksandratort.ru/wp-content/uploads/2023/02/krasn_barhat.jpg',
    weight: '1.5 кг',
    popular: false,
    category: 'tort'
  },
  
  // ===== РУЛЕТ =====
  {
    id: 6,
    name: 'Рулет классический',
    description: 'Мягкий бисквит, сливочный крем',
    price: 700,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzmcXtKqc35wLpz3voxY5tPsjnxM465Rmhg&s',
    weight: '1 кг',
    popular: false,
    category: 'rulet'
  },
  
  // ===== КАПКЕЙКИ =====
  {
    id: 7,
    name: 'Капкейки ванильные и шоколадные',
    description: 'Ванильные и шоколадные бисквиты, творожный сыр на сливках, творожный сыр на масле',
    price: 180,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVs5v68QburQ4EDv4XfYYdSDXpHvWqW0A-g&s',
    weight: '1 шт',
    popular: true,
    minOrder: 8,
    priceFor8: 1440,
    category: 'cupcake'
  },
  
  // ===== ТРАЙФЛЫ =====
  {
    id: 8,
    name: 'Трайфл Сникерс',
    description: 'Шоколадный корж, соленая карамель, арахис, сливочный крем',
    price: 250,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3s09l7V5ayNWuVqYi4ieDN6hwz7qBEZ3Ejg&s',
    weight: '170 гр',
    popular: true,
    minOrder: 8,
    priceFor8: 2000,
    category: 'trifle'
  },
  {
    id: 9,
    name: 'Трайфл Красный бархат',
    description: 'Красный корж, сливочно-сырный крем, шоколадная крошка',
    price: 250,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSls_qCXDCpjd0-zFTgSt3Ht5ur94YgLhH3eA&s',
    weight: '170 гр',
    popular: true,
    minOrder: 8,
    priceFor8: 2000,
    category: 'trifle'
  },
  {
    id: 10,
    name: 'Трайфл Ванильный с бананом',
    description: 'Ванильный бисквит, карамель, банан, сливочный крем',
    price: 250,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR9ZB42cQT7isnEyJmE9VMbZMBtDlB1kaCw&sg',
    weight: '170 гр',
    popular: true,
    minOrder: 8,
    priceFor8: 2000,
    category: 'trifle'
  }
];

const Catalog = () => {
  const torty = cakes.filter(cake => cake.category === 'tort');
  const rulet = cakes.filter(cake => cake.category === 'rulet');
  const kapkeyki = cakes.filter(cake => cake.category === 'cupcake');
  const trifly = cakes.filter(cake => cake.category === 'trifle');

  return (
    <div className="catalog-page">
      <div className="container">
        <h1 className="section-title">НАШИ ТОРТИКИ</h1>

        {torty.length > 0 && (
          <div className="premium-category">
            <h2 className="category-title">
              <span className="category-icon">🍰</span>
              <span>ТОРТЫ</span>
              <span className="category-icon">🍰</span>
            </h2>
            <div className="premium-grid">
              {torty.map(cake => (
                <CakeCard key={cake.id} cake={cake} />
              ))}
            </div>
          </div>
        )}

        {rulet.length > 0 && (
          <div className="premium-category">
            <h2 className="category-title">
              <span className="category-icon">🍥</span>
              <span>РУЛЕТЫ</span>
              <span className="category-icon">🍥</span>
            </h2>
            <div className="premium-grid">
              {rulet.map(cake => (
                <CakeCard key={cake.id} cake={cake} />
              ))}
            </div>
          </div>
        )}

        {kapkeyki.length > 0 && (
          <div className="premium-category">
            <h2 className="category-title">
              <span className="category-icon">🧁</span>
              <span>КАПКЕЙКИ</span>
              <span className="category-icon">🧁</span>
            </h2>
            <div className="premium-grid">
              {kapkeyki.map(cake => (
                <CakeCard key={cake.id} cake={cake} />
              ))}
            </div>
          </div>
        )}

        {trifly.length > 0 && (
          <div className="premium-category">
            <h2 className="category-title">
              <span className="category-icon">🍮</span>
              <span>ТРАЙФЛЫ</span>
              <span className="category-icon">🍮</span>
            </h2>
            <div className="premium-grid">
              {trifly.map(cake => (
                <CakeCard key={cake.id} cake={cake} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;