import React from 'react';
import { Link } from 'react-router-dom';
import './AircraftPage.css';

const An225: React.FC = () => {
  return (
    <div className="aircraft-page">
      {/* Hero Section */}
      <section className="aircraft-hero">
        <div className="container">
          <div className="aircraft-hero-content">
            <h1>Антонов АН-225 Мрія</h1>
            <p className="aircraft-subtitle">Мрія - Найбільший транспортний літак у світі</p>
            <div className="aircraft-hero-icon">🛩️</div>
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
                Антонов АН-225 Мрія був стратегічним вантажним літаком 
                розроблений та збудований Конструкторським бюро Антонов в Україні. Це був найважчий літак, 
                коли-небудь побудований, і мав найбільший розмах крил серед усіх літаків в експлуатації.
              </p>
              <p>
                Спочатку розроблений в радянську епоху для транспортування космічного корабля "Буран", 
                АН-225 став символом інженерної досконалості та української авіаційної майстерності. 
                Тільки один екземпляр був завершений і введений в експлуатацію.
              </p>
              <p>
                <strong>Примітка:</strong> АН-225 був, на жаль, знищений під час російського вторгнення 
                в Україну у 2022 році, але залишається легендарним досягненням в історії авіації.
              </p>
            </div>
            <div className="overview-image">
              <div className="aircraft-silhouette large">🛩️</div>
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
                <li><strong>Довжина:</strong> 84,0 м (275 футів 7 дюймів)</li>
                <li><strong>Розмах крил:</strong> 88,4 м (290 футів 2 дюйми)</li>
                <li><strong>Висота:</strong> 18,1 м (59 футів 5 дюймів)</li>
                <li><strong>Площа крила:</strong> 905 м² (9,741 кв. футів)</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Вага та місткість</h3>
              <ul>
                <li><strong>Порожня вага:</strong> 285,000 кг (628,317 фунтів)</li>
                <li><strong>Макс. злітна вага:</strong> 640,000 кг (1,410,958 фунтів)</li>
                <li><strong>Макс. корисне навантаження:</strong> 250,000 кг (551,156 фунтів)</li>
                <li><strong>Ємність паливних баків:</strong> 300,000 л (79,252 галонів США)</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Характеристики</h3>
              <ul>
                <li><strong>Крейсерська швидкість:</strong> 800 км/год (497 миль/год)</li>
                <li><strong>Макс. швидкість:</strong> 850 км/год (528 миль/год)</li>
                <li><strong>Дальність:</strong> 15,400 км (9,569 миль)</li>
                <li><strong>Практична стеля:</strong> 11,000 м (36,089 футів)</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Силова установка</h3>
              <ul>
                <li><strong>Двигуни:</strong> 6 × Івченко-Прогрес Д-18Т</li>
                <li><strong>Тип:</strong> Турбовентиляторний з високим ступенем двоконтурності</li>
                <li><strong>Тяга:</strong> 229,5 кН (51,590 фунт-сил) кожен</li>
                <li><strong>Загальна тяга:</strong> 1,377 кН (309,540 фунт-сил)</li>
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
                <div className="timeline-year">1984</div>
                <div className="timeline-content">
                  <h3>Початок проекту</h3>
                  <p>Розробка почалася як частина радянської космічної програми для транспортування космічного корабля "Буран".</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1988</div>
                <div className="timeline-content">
                  <h3>Перший політ</h3>
                  <p>АН-225 здійснив свій перший політ 21 грудня 1988 року під керуванням пілота Олександра Галуненка.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1989</div>
                <div className="timeline-content">
                  <h3>Встановлення рекордів</h3>
                  <p>Встановив понад 240 світових рекордів, включаючи перевезення найважчого вантажу в історії авіації.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2001</div>
                <div className="timeline-content">
                  <h3>Комерційна експлуатація</h3>
                  <p>Введений в комерційну експлуатацію після значних модифікацій для вантажних перевезень.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Records & Achievements */}
      <section className="achievements">
        <div className="container">
          <h2>Рекорди та досягнення</h2>
          <div className="achievements-grid">
            <div className="achievement-card card">
              <div className="achievement-icon">🏆</div>
              <h3>Найбільший літак у світі</h3>
              <p>Утримував рекорд як найбільший літак у світі за вагою, довжиною та розмахом крил.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">📏</div>
              <h3>Найбільший розмах крил</h3>
              <p>88,4-метровий розмах крил зробив його літаком з найбільшим розмахом крил, коли-небуть побудованим.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">⚖️</div>
              <h3>Найважчий вантаж</h3>
              <p>Перевозив 247-тонний генератор - найважчий одинарний вантаж, коли-небуть транспортований повітрям.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">🌍</div>
              <h3>Глобальна значимість</h3>
              <p>Став символом української інженерної досконалості та авіаційних досягнень у всьому світі.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="page-navigation">
        <div className="container">
          <div className="nav-links">
            <Link to="/" className="btn btn-secondary">← Назад до головної</Link>
            <Link to="/an-124" className="btn">Далі: АН-124 Руслан →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default An225;