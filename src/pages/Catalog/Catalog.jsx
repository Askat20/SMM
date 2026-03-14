import React from 'react';
import CakeCard from '../../components/CakeCard/CakeCard';
import './Catalog.css';

const cakes = [
  // Классические торты
  {
    id: 1,
    name: 'Медовик классический',
    description: 'Нежные медовые коржи, сметанный крем, сливочный крем',
    price: 2100,
    image: 'https://cdn.lifehacker.ru/wp-content/uploads/2022/11/shutterstock_2154067297_1668017816-1800x900.jpg',
    weight: '1.4 кг',
    popular: true
  },
  {
    id: 2,
    name: 'Сникерс',
    description: 'Шоколадные коржи, соленая карамель, арахис, внутренний крем: творожный сыр на сливках (нежный), верхний крем: творожный сыр на масле (плотный)',
    price: 3000,
    image: 'https://kubnews.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/a04/1200_800_2/0l3iwxxxh511qkyjon5h2jsj7dg004qn.webp',
    weight: '1.5 кг',
    popular: true
  },
  {
    id: 3,
    name: 'Ванильный торт',
    description: 'Ванильные коржи, внутренний крем: творожный сыр на сливках (нежный), верхний крем: творожный сыр на масле (плотный)',
    price: 2700,
    image: 'https://studio.jvcompany.ru/system/products/0000/0112/112-mcard.jpg?1614015968',
    weight: '1.5 кг',
    popular: true
  },
  
  // Шоколадные торты
  {
    id: 4,
    name: 'Шоколадный торт',
    description: 'Шоколадные коржи, внутренний крем - шоколадный, верхний крем - творожный сыр на сливках',
    price: 3000,
    image: 'https://cdn-s-static.catery.ru/storage/menu/item/3/6/3/7/363729/preview_preview_image-qbXEfCvO1KLdOV-jD55QdNYmZ7gyxSXskw.jpg',
    weight: '1.5 кг',
    popular: true
  },
  {
    id: 5,
    name: 'Красный бархат',
    description: 'Красный бисквит, внутренний крем - творожный сыр на сливках, верхний крем - творожный сыр на масле',
    price: 3000,
    image: 'https://aleksandratort.ru/wp-content/uploads/2023/02/krasn_barhat.jpg',
    weight: '1.5 кг',
    popular: false
  }
];

const Catalog = () => {
  return (
    <div className="catalog-page">
      <div className="container">
        <h1 className="section-title">Наши тортики</h1>

        <div className="catalog-grid">
          {cakes.map(cake => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;