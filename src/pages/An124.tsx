import React from 'react';
import { Link } from 'react-router-dom';
import './AircraftPage.css';

const An124: React.FC = () => {
  return (
    <div className="aircraft-page">
      {/* Hero Section */}
      <section className="aircraft-hero">
        <div className="container">
          <div className="aircraft-hero-content">
            <h1>Антонов АН-124 Руслан</h1>
            <p className="aircraft-subtitle">Важкий стратегічний транспортний літак</p>
            <div className="aircraft-hero-icon">🛫</div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="aircraft-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2>Огляд</h2>
              <p>
                Антонов АН-124 Руслан - великий стратегічний чотиримоторний 
                транспортний літак, розроблений у 1980-х роках Конструкторським бюро Антонов в Україні. 
                Це другий за величиною військовий транспортний літак у світі, поступається лише АН-225.
              </p>
              <p>
                АН-124 був призначений для перевезення важких і негабаритних вантажів, включаючи бойові танки, 
                бронетехніку та інше військове обладнання. Він має вантажний відсік, який може 
                вмістити об'ємні предмети, та передні і задні вантажні двері для ефективного завантаження і розвантаження.
              </p>
              <p>
                Зараз кілька АН-124 продовжують перебувати в експлуатації у різних операторів по всьому світу, 
                продовжуючи виконувати як військові, так і цивільні вантажні перевезення.
              </p>
            </div>
            <div className="overview-image">
              <div className="aircraft-silhouette large">🛫</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="specifications">
        <div className="container">
          <h2>Технічні характеристики</h2>
          <div className="specs-grid">
            <div className="spec-card card">
              <h3>Розміри</h3>
              <ul>
                <li><strong>Довжина:</strong> 69,1 м</li>
                <li><strong>Розмах крил:</strong> 73,3 м</li>
                <li><strong>Висота:</strong> 20,78 м</li>
                <li><strong>Площа крила:</strong> 628 м²</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Вага та місткість</h3>
              <ul>
                <li><strong>Порожня вага:</strong> 175,000 кг</li>
                <li><strong>Макс. злітна вага:</strong> 405,000 кг</li>
                <li><strong>Макс. корисне навантаження:</strong> 150,000 кг</li>
                <li><strong>Ємність баків для палива:</strong> 230,000 л</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Характеристики</h3>
              <ul>
                <li><strong>Крейсерська швидкість:</strong> 865 км/год</li>
                <li><strong>Макс. швидкість:</strong> 890 км/год</li>
                <li><strong>Дальність:</strong> 5,400 км з макс. навантаженням</li>
                <li><strong>Практична стеля:</strong> 12,000 м</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Силова установка</h3>
              <ul>
                <li><strong>Двигуни:</strong> 4 × Івченко-Прогрес Д-18Т</li>
                <li><strong>Тип:</strong> Турбовентиляторний з високим ступенем двоконтурності</li>
                <li><strong>Тяга:</strong> 229,5 кН кожен</li>
                <li><strong>Загальна тяга:</strong> 918 кН</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History & Development */}
      <section className="history">
        <div className="container">
          <div className="history-content">
            <h2>Історія та розробка</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">1982</div>
                <div className="timeline-content">
                  <h3>Початок розробки</h3>
                  <p>Проектні роботи почалися під керівництвом Віктора Толмачова для створення стратегічного транспортного літака.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1982</div>
                <div className="timeline-content">
                  <h3>Перший політ</h3>
                  <p>АН-124 здійснив свій перший політ 24 грудня 1982 року, підтвердивши революційні концепції конструкції.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1986</div>
                <div className="timeline-content">
                  <h3>Вступ в експлуатацію</h3>
                  <p>Літак введений в експлуатацію Радянськими ВПС, революціонізувавши стратегічні можливості авіаперевезень.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1990</div>
                <div className="timeline-content">
                  <h3>Комерційні операції</h3>
                  <p>Перехід до комерційних вантажних операцій, обслуговуючи цивільні ринки по всьому світу.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Features */}
      <section className="achievements">
        <div className="container">
          <h2>Ключові можливості та особливості</h2>
          <div className="achievements-grid">
            <div className="achievement-card card">
              <div className="achievement-icon">🚛</div>
              <h3>Важковантажна місткість</h3>
              <p>Може перевозити до 150 тонн вантажу, включаючи танки, гелікоптери та промислове обладнання.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">🚪</div>
              <h3>Подвійна система завантаження</h3>
              <p>Має як носові, так і задні вантажні двері для ефективних операцій завантаження та розвантаження.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">🌍</div>
              <h3>Глобальна дальність</h3>
              <p>Міжконтинентальна дальність дозволяє здійснювати місії доставки вантажів по всьому світу.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">⚙️</div>
              <h3>Самозавантажувальна здатність</h3>
              <p>Обладнаний бортовими кранами та лебідками для незалежних операцій обробки вантажів.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Operations */}
      <section className="aircraft-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Поточна експлуатація</h2>
            <p>
              Сьогодні АН-124 продовжує служити як у військових, так і в комерційних ролях. Кілька операторів 
              по всьому світу використовують ці літаки для перевезень негабаритних вантажів, гуманітарних місій 
              та стратегічних військових авіаперевезень.
            </p>
            <p>
              Унікальне поєднання розміру, дальності і можливостей завантаження робить його 
              незамінним для транспортування предметів, які не поміщаються в звичайні вантажні літаки, 
              від компонентів електростанцій до космічного обладнання.
            </p>
            <p>
              Незважаючи на свій вік, АН-124 залишається одним з найздатніших транспортних літаків у світі, 
              без прямої заміни, що наразі перебуває у виробництві.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="page-navigation">
        <div className="container">
          <div className="nav-links">
            <Link to="/an-225" className="btn btn-secondary">← Попередній: АН-225 Мрія</Link>
            <Link to="/an-178" className="btn">Далі: АН-178 →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default An124;