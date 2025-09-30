import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HeroPlanes from '../assets/planes.png';
import an225Image from '../assets/an-225-colored.png';
import an124Image from '../assets/an-124-colored.png';
import an178Image from '../assets/an-178-colored.png';
import an158Image from '../assets/an-158-colored.png';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Літаки "Антонов"</h1>
            <p className="hero-subtitle">
              Відкрийте для себе легендарні літаки від провідного українського авіавиробника. 
              Від найбільшого транспортного літака в світі до ефективних регіональних реактивних літаків.
            </p>
            <div className="hero-buttons">
              <Link to="/an-225" className="btn">Дослідити АН-225 "Мрія"</Link>
              <a href="#aircraft-fleet" className="btn btn-secondary">Переглянути літаки</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={HeroPlanes} alt="Антонов АН-225 Мрія" className="hero-aircraft-image" />
          </div>
        </div>
      </section>

      {/* Aircraft grid */}
      <section className="aircraft-grid" id="aircraft-fleet">
        <div className="container">
          <h2 className="section-title">Авіаційний флот</h2>
          <div className="grid">
            <Link to="/an-225" className="aircraft-card card">
              <div className="aircraft-icon">
                <img src={an225Image} alt='АН-225 "Мрія"' className="aircraft-card-image" />
              </div>
              <h3>АН-225 "Мрія"</h3>
              <p>Найбільший транспортний літак у світі, призначений для перевезення негабаритних вантажів та виконання стратегічних авіаперевезень.</p>
              <div className="card-stats">
                <span>Макс. корисне навантаження: 250,000 кг</span>
                <span>Довжина: 84м</span>
              </div>
            </Link>

            <Link to="/an-124" className="aircraft-card card">
              <div className="aircraft-icon">
                <img src={an124Image} alt='АН-124 "Руслан"' className="aircraft-card-image" />
              </div>
              <h3>АН-124 "Руслан"</h3>
              <p>Важкий стратегічний транспортний літак, один з найбільших військових транспортних літаків в експлуатації.</p>
              <div className="card-stats">
                <span>Макс. корисне навантаження: 150,000 кг</span>
                <span>Довжина: 69,1м</span>
              </div>
            </Link>

            <Link to="/an-178" className="aircraft-card card">
              <div className="aircraft-icon">
                <img src={an178Image} alt="АН-178" className="aircraft-card-image" />
              </div>
              <h3>АН-178</h3>
              <p>Транспортний літак середньої дальності, призначений для військового та цивільного використання з сучасною авіонікою.</p>
              <div className="card-stats">
                <span>Макс. корисне навантаження: 18,000 кг</span>
                <span>Довжина: 32,9м</span>
              </div>
            </Link>

            <Link to="/an-158" className="aircraft-card card">
              <div className="aircraft-icon">
                <img src={an158Image} alt="АН-158" className="aircraft-card-image" />
              </div>
              <h3>АН-158</h3>
              <p>Регіональний пасажирський реактивний літак, призначений для коротких та середніх маршрутів з відмінною паливною ефективністю та комфортом.</p>
              <div className="card-stats">
                <span>Пасажири: 99</span>
                <span>Довжина: 28,4м</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <h2>Про "Антонов"</h2>
            <p>
              АТ "Антонов" — українська компанія з виробництва та обслуговування літаків. 
              Заснована у 1946 році, вона стала синонімом великих транспортних літаків 
              та інноваційних авіаційних рішень. Компанія розробила одні з найвражаючих 
              літаків у світі, включаючи АН-225 "Мрія".
            </p>
            <p>
              Від військових транспортників до пасажирської авіації, "Антонов" продовжує 
              розширювати межі аерокосмічної інженерії, зберігаючи свою репутацію 
              надійності та продуктивності.
            </p>
            <p>
              <strong>Примітка:</strong> цей сайт не пов'язаний з АТ «Антонов». Наведені тут моделі літаків охоплюють лише частину їхньої продукції. Щоб переглянути повний список літаків, відвідайте <a href="https://antonov.com/en/airplanes-history" target="_blank" rel="noopener noreferrer">офіційний сайт</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;