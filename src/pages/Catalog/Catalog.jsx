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
    description: 'Шоколадные коржи, соленая карамель, арахис, внутренний крем: творожный сыр на сливках (нежный), верхний крем: творожный сыр на масле (плотный)',
    price: 3000,
    image: 'https://kubnews.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/a04/1200_800_2/0l3iwxxxh511qkyjon5h2jsj7dg004qn.webp',
    weight: '1.5 кг',
    popular: true,
    category: 'tort'
  },
  {
    id: 3,
    name: 'Ванильный торт',
    description: 'Ванильные коржи, внутренний крем: творожный сыр на сливках (нежный), верхний крем: творожный сыр на масле (плотный)',
    price: 2700,
    image: 'https://studio.jvcompany.ru/system/products/0000/0112/112-mcard.jpg?1614015968',
    weight: '1.5 кг',
    popular: true,
    category: 'tort'
  },
  {
    id: 4,
    name: 'Шоколадный торт',
    description: 'Шоколадные коржи, внутренний крем - шоколадный, верхний крем - творожный сыр на сливках',
    price: 3000,
    image: 'https://cdn-s-static.catery.ru/storage/menu/item/3/6/3/7/363729/preview_preview_image-qbXEfCvO1KLdOV-jD55QdNYmZ7gyxSXskw.jpg',
    weight: '1.5 кг',
    popular: true,
    category: 'tort'
  },
  {
    id: 5,
    name: 'Красный бархат',
    description: 'Красный бисквит, внутренний крем - творожный сыр на сливках, верхний крем - творожный сыр на масле',
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
    name: 'Капкейки (ванильные и шоколадные)',
    description: 'Ванильные и шоколадные бисквиты, крем из творожного сыра: внутри - на сливках (нежный), сверху - на масле (плотный)',
    price: 180,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVs5v68QburQ4EDv4XfYYdSDXpHvWqW0A-g&s',
    weight: '1 шт',
    popular: true,
    minOrder: 8,
    priceFor8: 1440,
    note: 'Можно выбрать любые вкусы в ассортименте',
    category: 'cupcake'
  },
  
  // ===== ТРАЙФЛЫ =====
  {
    id: 10,
    name: 'Трайфл Сникерс',
    description: 'Шоколадный корж, соленая карамель, арахис, нежный сливочный крем',
    price: 250,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3s09l7V5ayNWuVqYi4ieDN6hwz7qBEZ3Ejg&s',
    weight: '150-170 гр',
    popular: true,
    minOrder: 8,
    priceFor8: 2000,
    note: 'Вкус как у любимого батончика',
    category: 'trifle'
  },
  {
    id: 11,
    name: 'Трайфл Красный бархат',
    description: 'Мягкий красный корж, сливочно-сырный крем, шоколадная крошка',
    price: 250,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSls_qCXDCpjd0-zFTgSt3Ht5ur94YgLhH3eA&s',
    weight: '150-170 гр',
    popular: true,
    minOrder: 8,
    priceFor8: 2000,
    note: 'Классический вкус в новом формате',
    category: 'trifle'
  },
  {
    id: 12,
    name: 'Трайфл Ванильный с бананом',
    description: 'Мягкий ванильный бисквит, карамель, свежий банан, сливочный крем',
    price: 250,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR9ZB42cQT7isnEyJmE9VMbZMBtDlB1kaCw&sg',
    weight: '150-170 гр',
    popular: true,
    minOrder: 8,
    priceFor8: 2000,
    note: 'Нежное сочетание ванили и банана',
    category: 'trifle'
  }
];

const Catalog = ({ addToCart }) => {
  // Фильтруем товары по категориям
  const torty = cakes.filter(cake => cake.category === 'tort');
  const rulet = cakes.filter(cake => cake.category === 'rulet');
  const kapkeyki = cakes.filter(cake => cake.category === 'cupcake');
  const trifly = cakes.filter(cake => cake.category === 'trifle');

  return (
    <div className="catalog-page">
      <div className="container">
        <h1 className="section-title">Наши тортики</h1>

        {/* ТОРТЫ */}
        {torty.length > 0 && (
          <>
            <h2 className="category-title">🍰 Торты</h2>
            <div className="catalog-grid">
              {torty.map(cake => (
                <CakeCard 
                  key={cake.id} 
                  cake={cake} 
                  addToCart={addToCart}
                />
              ))}
            </div>
          </>
        )}

        {/* РУЛЕТ */}
        {rulet.length > 0 && (
          <>
            <h2 className="category-title">🍥 Рулеты</h2>
            <div className="catalog-grid">
              {rulet.map(cake => (
                <CakeCard 
                  key={cake.id} 
                  cake={cake} 
                  addToCart={addToCart}
                />
              ))}
            </div>
          </>
        )}

        {/* КАПКЕЙКИ */}
        {kapkeyki.length > 0 && (
          <>
            <h2 className="category-title">🧁 Капкейки</h2>
            <div className="catalog-grid">
              {kapkeyki.map(cake => (
                <CakeCard 
                  key={cake.id} 
                  cake={cake} 
                  addToCart={addToCart}
                />
              ))}
            </div>
          </>
        )}

        {/* ТРАЙФЛЫ */}
        {trifly.length > 0 && (
          <>
            <h2 className="category-title">🍮 Трайфлы</h2>
            <div className="catalog-grid">
              {trifly.map(cake => (
                <CakeCard 
                  key={cake.id} 
                  cake={cake} 
                  addToCart={addToCart}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Catalog;