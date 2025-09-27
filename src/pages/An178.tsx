import React from 'react';
import { Link } from 'react-router-dom';
import './AircraftPage.css';

const An178: React.FC = () => {
  return (
    <div className="aircraft-page">
      {/* Hero Section */}
      <section className="aircraft-hero">
        <div className="container">
          <div className="aircraft-hero-content">
            <h1>Антонов АН-178</h1>
            <p className="aircraft-subtitle">Сучасний транспортний літак середньої дальності</p>
            <div className="aircraft-hero-icon">✈️</div>
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
                Антонов АН-178 - транспортний літак середньої дальності, розроблений українським 
                Конструкторським бюро Антонов. Він представляє останнє покоління літаків Антонов, оснащених сучасною 
                авіонікою, ефективними двигунами та універсальними вантажними можливостями.
              </p>
              <p>
                Розроблений для військового та цивільного застосування, АН-178 може служити як тактичний 
                військовий транспорт, вантажний фрахтовик, або навіть бути сконфігурованим для пасажирських перевезень. 
                Його сучасний дизайн включає досвід, отриманий за десятиліття розробки транспортних літаків.
              </p>
              <p>
                Літак має задню вантажну рампу для легкого завантаження та розвантаження, а його двомоторна 
                конфігурація забезпечує відмінну паливну ефективність та експлуатаційну економіку.
              </p>
            </div>
            <div className="overview-image">
              <div className="aircraft-silhouette large">✈️</div>
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
                <li><strong>Довжина:</strong> 32,9 м</li>
                <li><strong>Розмах крил:</strong> 28,4 м</li>
                <li><strong>Висота:</strong> 9,8 м</li>
                <li><strong>Площа крила:</strong> 83,6 м²</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Вага та місткість</h3>
              <ul>
                <li><strong>Порожня вага:</strong> 22,000 кг</li>
                <li><strong>Макс. злітна вага:</strong> 42,500 кг</li>
                <li><strong>Макс. корисне навантаження:</strong> 18,000 кг</li>
                <li><strong>Ємність баків для палива:</strong> 13,500 л</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Характеристики</h3>
              <ul>
                <li><strong>Крейсерська швидкість:</strong> 825 км/год</li>
                <li><strong>Макс. швидкість:</strong> 860 км/год</li>
                <li><strong>Дальність:</strong> 5,500 км з макс. паливом</li>
                <li><strong>Практична стеля:</strong> 12,200 м</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Силова установка</h3>
              <ul>
                <li><strong>Двигуни:</strong> 2 × Івченко-Прогрес Д-436-148ФМ</li>
                <li><strong>Тип:</strong> Турбовентиляторний з високим ступенем двоконтурності</li>
                <li><strong>Тяга:</strong> 73,6 кН кожен</li>
                <li><strong>Загальна тяга:</strong> 147,2 кН</li>
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
                <div className="timeline-year">2010</div>
                <div className="timeline-content">
                  <h3>Запуск проекту</h3>
                  <p>Розробка АН-178 почалася як сучасна заміна застарілих транспортних літаків.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2015</div>
                <div className="timeline-content">
                  <h3>Перший політ</h3>
                  <p>Прототип АН-178 здійснив свій перший політ 7 травня 2015 року з аеропорту Київ-Антонов.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2016</div>
                <div className="timeline-content">
                  <h3>Льотні випробування</h3>
                  <p>Обширна програма льотних випробувань продемонструвала можливості та характеристики літака.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h3>Прогрес сертифікації</h3>
                  <p>Продовження зусиль з сертифікації та розвиток виробничих можливостей.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Features */}
      <section className="achievements">
        <div className="container">
          <h2>Конструктивні особливості та можливості</h2>
          <div className="achievements-grid">
            <div className="achievement-card card">
              <div className="achievement-icon">💻</div>
              <h3>Сучасна авіоніка</h3>
              <p>Обладнаний найсучаснішою скляною кабіною та цифровими системами управління польотом.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">⚡</div>
              <h3>Паливна ефективність</h3>
              <p>Передові двигуни та аеродинаміка забезпечують відмінну економію палива та екологічну продуктивність.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">🔧</div>
              <h3>Багатоцільовий дизайн</h3>
              <p>Конфігурується для вантажних перевезень, пасажирських послуг або спеціалізованих військових місій.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">🛡️</div>
              <h3>Військові можливості</h3>
              <p>Може бути обладнаний для тактичних перевезень, десантування парашутистів та доставки вантажів.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Variants & Applications */}
      <section className="aircraft-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Варіанти та застосування</h2>
            <p>
              Сімейство АН-178 включає кілька варіантів, розроблених для різних місійних вимог:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
              <div className="card">
                <h3>АН-178-100Ф (Вантажний)</h3>
                <p>Чисто вантажний варіант з максимальною вантажною місткістю та задньою завантажувальною рампою.</p>
              </div>
              <div className="card">
                <h3>АН-178-100П (Пасажирський)</h3>
                <p>Пасажирська конфігурація, здатна перевозити до 90 пасажирів в економ-класі.</p>
              </div>
              <div className="card">
                <h3>АН-178-200Ф (Подовжений)</h3>
                <p>Подовжена версія зі збільшеною вантажною місткістю та дальністю польоту.</p>
              </div>
              <div className="card">
                <h3>Військові варіанти</h3>
                <p>Спеціалізовані військові версії для тактичних перевезень та підтримки спеціальних операцій.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="page-navigation">
        <div className="container">
          <div className="nav-links">
            <Link to="/an-124" className="btn btn-secondary">← Попередній: АН-124 Руслан</Link>
            <Link to="/an-158" className="btn">Далі: АН-158 →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default An178;