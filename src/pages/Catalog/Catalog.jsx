import React, { useState } from 'react';
import CakeCard from '../../components/CakeCard/CakeCard';
import './Catalog.css';

const cakes = [
  // Классические торты
  {
    id: 1,
    name: 'Медовик классический',
    description: 'Нежные медовые коржи со сметанным кремом и грецкими орехами',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.2 кг',
    category: 'классические',
    popular: true
  },
  {
    id: 2,
    name: 'Наполеон',
    description: 'Тонкие слоеные коржи с заварным кремом, классический рецепт',
    price: 2300,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.2 кг',
    category: 'классические',
    popular: true
  },
  {
    id: 3,
    name: 'Прага',
    description: 'Шоколадный бисквит с шоколадным кремом и абрикосовым конфи',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.3 кг',
    category: 'шоколадные',
    popular: true
  },
  
  // Шоколадные торты
  {
    id: 4,
    name: 'Сникерс',
    description: 'Шоколадные коржи, карамель, соленый арахис, молочная начинка',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.4 кг',
    category: 'шоколадные',
    popular: true
  },
  {
    id: 5,
    name: 'Черный лес',
    description: 'Шоколадный бисквит, вишня, взбитые сливки, шоколадная стружка',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.3 кг',
    category: 'шоколадные',
    popular: false
  },
  {
    id: 6,
    name: 'Брауни чизкейк',
    description: 'Шоколадный брауни с прослойкой сливочного чизкейка',
    price: 2700,
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.3 кг',
    category: 'шоколадные',
    popular: true
  },
  
  // Карамельные торты
  {
    id: 7,
    name: 'Карамельный',
    description: 'Медовые коржи с карамельным кремом и соленой карамелью',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.2 кг',
    category: 'карамельные',
    popular: true
  },
  {
    id: 8,
    name: 'Соленая карамель',
    description: 'Ванильный бисквит, соленая карамель, сливочный крем',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.3 кг',
    category: 'карамельные',
    popular: false
  },
  
  // Ореховые торты
  {
    id: 9,
    name: 'Графские развалины',
    description: 'Безе с орехами, шоколадный крем, сгущенка',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.2 кг',
    category: 'ореховые',
    popular: true
  },
  {
    id: 10,
    name: 'Киевский',
    description: 'Хрустящие ореховые коржи, масляный крем',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.2 кг',
    category: 'ореховые',
    popular: false
  },
  {
    id: 11,
    name: 'Фисташковый',
    description: 'Фисташковый бисквит, крем с фисташками и маскарпоне',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.3 кг',
    category: 'ореховые',
    popular: true
  },
  
  // Праздничные торты
  {
    id: 12,
    name: 'Красный бархат',
    description: 'Красный бисквит с нежным сливочно-сырным кремом',
    price: 2700,
    image: 'https://images.unsplash.com/photo-1586788224331-947f68671cf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.3 кг',
    category: 'праздничные',
    popular: true
  },
  {
    id: 13,
    name: 'Тирамису',
    description: 'Пропитка кофе, крем маскарпоне, какао',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.2 кг',
    category: 'праздничные',
    popular: true
  },
  {
    id: 14,
    name: 'Птичье молоко',
    description: 'Нежный бисквит, суфле, шоколадная глазурь',
    price: 2300,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.1 кг',
    category: 'классические',
    popular: false
  },
  {
    id: 15,
    name: 'Эстерхази',
    description: 'Миндальные коржи, масляный крем с коньяком',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    weight: '1.2 кг',
    category: 'ореховые',
    popular: true
  }
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('все');
  
  const categories = [
    'все',
    'классические',
    'шоколадные',
    'карамельные',
    'ореховые',
    'праздничные'
  ];

  // Фильтрация тортов по категории
  const filteredCakes = selectedCategory === 'все' 
    ? cakes 
    : cakes.filter(cake => cake.category === selectedCategory);

  return (
    <div className="catalog-page">
      <div className="container">
        <h1 className="section-title">Наши тортики</h1>
        
        <div className="catalog-categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="catalog-grid">
          {filteredCakes.map(cake => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>

        {filteredCakes.length === 0 && (
          <div className="no-results">
            <p>В этой категории пока нет тортов</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;