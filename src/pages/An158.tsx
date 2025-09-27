import React from 'react';
import { Link } from 'react-router-dom';
import './AircraftPage.css';

const An158: React.FC = () => {
  return (
    <div className="aircraft-page">
      {/* Hero Section */}
      <section className="aircraft-hero">
        <div className="container">
          <div className="aircraft-hero-content">
            <h1>Антонов АН-158</h1>
            <p className="aircraft-subtitle">Регіональний пасажирський реактивний літак</p>
            <div className="aircraft-hero-icon">🛬</div>
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
                Антонов АН-158 - регіональний реактивний літак, розроблений українським Конструкторським бюро Антонов 
                як пасажирський варіант сімейства АН-148. Призначений для коротких та середніх маршрутів, 
                АН-158 поєднує сучасні технології з перевіреною надійністю.
              </p>
              <p>
                З його ефективною двомоторною конфігурацією та передовою авіонікою, АН-158 пропонує 
                авіакомпаніям економічне рішення для регіональних маршрутів. Літак має комфортну 
                пасажирську кабіну та відмінну паливну ефективність для свого класу.
              </p>
              <p>
                АН-158 представляє вихід Антонова на конкурентний ринок регіональних реактивних літаків, 
                пропонуючи конкурентоспроможні експлуатаційні витрати та сучасні пасажирські зручності.
              </p>
            </div>
            <div className="overview-image">
              <div className="aircraft-silhouette large">🛬</div>
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
                <li><strong>Довжина:</strong> 28,4 м</li>
                <li><strong>Розмах крил:</strong> 28,9 м</li>
                <li><strong>Висота:</strong> 8,19 м</li>
                <li><strong>Площа крила:</strong> 83,6 м²</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Вага та місткість</h3>
              <ul>
                <li><strong>Порожня вага:</strong> 15,200 кг</li>
                <li><strong>Макс. злітна вага:</strong> 23,500 кг</li>
                <li><strong>Пасажири:</strong> 99 (одним класом)</li>
                <li><strong>Ємність баків для палива:</strong> 5,500 кг</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Характеристики</h3>
              <ul>
                <li><strong>Крейсерська швидкість:</strong> 820 км/год</li>
                <li><strong>Макс. швидкість:</strong> 870 км/год</li>
                <li><strong>Дальність:</strong> 2,400 км з макс. пасажирами</li>
                <li><strong>Практична стеля:</strong> 12,200 м</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Силова установка</h3>
              <ul>
                <li><strong>Двигуни:</strong> 2 × Івченко-Прогрес Д-436-148</li>
                <li><strong>Тип:</strong> Турбовентиляторний з високим ступенем двоконтурності</li>
                <li><strong>Тяга:</strong> 68,6 кН кожен</li>
                <li><strong>Загальна тяга:</strong> 137,2 кН</li>
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
                <div className="timeline-year">2000</div>
                <div className="timeline-content">
                  <h3>Розробка концепції</h3>
                  <p>Проект розпочато як подовжений пасажирський варіант успішного літака АН-148.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2010</div>
                <div className="timeline-content">
                  <h3>Завершення проектування</h3>
                  <p>Завершено технічні специфікації для конфігурації подовженого регіонального реактивного літака.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2014</div>
                <div className="timeline-content">
                  <h3>Перший політ</h3>
                  <p>Прототип АН-158 успішно завершив свій перший політ, продемонструвавши льотні характеристики.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2015</div>
                <div className="timeline-content">
                  <h3>Процес сертифікації</h3>
                  <p>Розпочато сертифікаційні випробування та валідацію для комерційних пасажирських операцій.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passenger Features */}
      <section className="achievements">
        <div className="container">
          <h2>Пасажирські особливості та можливості</h2>
          <div className="achievements-grid">
            <div className="achievement-card card">
              <div className="achievement-icon">🪑</div>
              <h3>Комфортні сидіння</h3>
              <p>Сучасне планування кабіни з комфортними сидіннями для до 99 пасажирів в одноклассовій конфігурації.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">🔇</div>
              <h3>Тиха робота</h3>
              <p>Передові двигуни та звукоізоляція забезпечують тихий, комфортний досвід для пасажирів.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">💰</div>
              <h3>Економічна експлуатація</h3>
              <p>Відмінна паливна ефективність та низькі експлуатаційні витрати роблять його привабливим для регіональних авіакомпаній.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">🛡️</div>
              <h3>Системи безпеки</h3>
              <p>Сучасна авіоніка та системи безпеки відповідають міжнародним стандартам авіаційної безпеки.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Position */}
      <section className="aircraft-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Позиція на ринку та застосування</h2>
            <p>
              АН-158 позиціонується на конкурентному ринку регіональних реактивних літаків, конкуруючи з літаками 
              такими як сімейство Embraer E-Jet та серія Bombardier CRJ. Його переваги включають:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
              <div className="card">
                <h3>Регіональні маршрути</h3>
                <p>Ідеальний для з'єднання менших міст та обслуговування нерентабельних маршрутів з хорошою економікою.</p>
              </div>
              <div className="card">
                <h3>Гнучкість флоту</h3>
                <p>Може доповнювати більші літаки у флотах авіакомпаній або служити основним обладнанням для регіональних перевізників.</p>
              </div>
              <div className="card">
                <h3>Доступ до аеропортів</h3>
                <p>Розроблений для роботи з коротших злітно-посадкових смуг, відкриваючи доступ до більшої кількості аеропортів.</p>
              </div>
              <div className="card">
                <h3>Економічна ефективність</h3>
                <p>Нижчі витрати на придбання та експлуатацію порівняно з більшими вузькофюзеляжними літаками.</p>
              </div>
            </div>
            
            <h3 style={{marginTop: '3rem', color: 'var(--primary-blue)'}}>Варіанти конфігурації кабіни</h3>
            <p>
              АН-158 пропонує гнучкі конфігурації кабіни для задоволення різних вимог авіакомпаній:
            </p>
            <ul style={{marginTop: '1rem', paddingLeft: '2rem'}}>
              <li><strong>Один клас:</strong> До 99 пасажирів в економ-конфігурації</li>
              <li><strong>Змішаний клас:</strong> Доступні варіанти бізнес та економ класу</li>
              <li><strong>Висока щільність:</strong> Максимальна кількість місць для чартерних операцій</li>
              <li><strong>VIP конфігурація:</strong> Виконавчий транспорт зі зменшеною кількістю місць</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="page-navigation">
        <div className="container">
          <div className="nav-links">
            <Link to="/an-178" className="btn btn-secondary">← Попередній: АН-178</Link>
            <Link to="/" className="btn">Назад до головної →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default An158;