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
            <p className="aircraft-subtitle">Мрія - найбільший транспортний літак у світі</p>
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
                <li><strong>Довжина:</strong> 84,0 м</li>
                <li><strong>Розмах крил:</strong> 88,4 м</li>
                <li><strong>Висота:</strong> 18,1 м</li>
                <li><strong>Площа крила:</strong> 905 м²</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Вага та місткість</h3>
              <ul>
                <li><strong>Порожня вага:</strong> 285,000 кг</li>
                <li><strong>Макс. злітна вага:</strong> 640,000 кг</li>
                <li><strong>Макс. корисне навантаження:</strong> 250,000 кг</li>
                <li><strong>Ємність баків для палива:</strong> 405,000 л</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Характеристики</h3>
              <ul>
                <li><strong>Крейсерська швидкість:</strong> 800 км/год</li>
                <li><strong>Макс. швидкість:</strong> 850 км/год</li>
                <li><strong>Дальність:</strong> 15,400 км</li>
                <li><strong>Практична стеля:</strong> 11,000 м</li>
              </ul>
            </div>
            
            <div className="spec-card card">
              <h3>Силова установка</h3>
              <ul>
                <li><strong>Двигуни:</strong> 6 × Івченко-Прогрес Д-18Т</li>
                <li><strong>Тип:</strong> Турбовентиляторний з високим ступенем двоконтурності</li>
                <li><strong>Тяга:</strong> 229,5 кН кожен</li>
                <li><strong>Загальна тяга:</strong> 1,377 кН</li>
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
                  <h3>Початок проєкту</h3>
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
              
              <div className="timeline-item">
                <div className="timeline-year">2009</div>
                <div className="timeline-content">
                  <h3>Рекордне навантаження</h3>
                  <p>11 серпня 2009 року встановив рекорд, перевозивши найважчий одиничний вантаж в історії авіації - генератор масою 189,980 кг.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2010</div>
                <div className="timeline-content">
                  <h3>Найдовший вантаж в історії</h3>
                  <p>10 червня 2010 року на замовлення однієї з провідних фрейтфорвардингових і логістичних компаній GEODIS WILSON A/S українським літаком Ан-225 був перевезений найдовший вантаж в історії повітряних перевезень - дві лопаті вітряка (довжиною 42,1 м кожна) з Китаю в Данію.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2011</div>
                <div className="timeline-content">
                  <h3>Гуманітарні вантажі до Японії</h3>
                  <p>25 березня 2011 року літак Ан-225 авіакомпанії «Авіалінії Антонова» доставив до Японії гуманітарні вантажі, генератори і техніку загальною масою 140 тонн для постраждалих від землетрусів та цунамі, на замовлення уряду Франції.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2012</div>
                <div className="timeline-content">
                  <h3>Обладнання для гідроелектростанції</h3>
                  <p>Літак доправив до Душанбе обладнання для Нурецької гідроелектростанції, виготовлене в Харкові на підприємствах ВАТ «Корпорація “Турбоатом”». Вантаж загальною вагою 125 т складався з колеса турбіни масою 57 т, кришки турбіни 36 т і супутнього обладнання. Тільки Ан-225 міг доставити такий вантаж до місця призначення за один рейс.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2016</div>
                <div className="timeline-content">
                  <h3>Вантаж загальною масою 130 тонн</h3>
                  <p>У травні 2016 року Ан-225 здійснив комерційний рейс до Австралії, перевізши з Праги в місто Перт генератор з обладнанням загальною масою 130 тонн.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2018</div>
                <div className="timeline-content">
                  <h3>12 послідовних рейсів</h3>
                  <p>У межах енергетичного проєкту з Чилі до Болівії доставили великогабаритні генератори, здійснивши 12 послідовних рейсів. Літак Ан-225 «Мрія» авіакомпанії «Авіалінії Антонова» успішно виконав завершальний, дванадцятий політ, що став фінальною ланкою найбільшої за кількістю рейсів комерційної операції в історії експлуатації цього повітряного гіганта. У результаті логістичної кампанії з Чилі до Болівії було перевезено 12 генераторів для теплоелектростанції.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h3>Модернізація та пандемія</h3>
                  <p>Після модернізації повернувся до польотів у березні 2020 року та брав активну участь у доставці медичних засобів під час пандемії COVID-19.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2021</div>
                <div className="timeline-content">
                  <h3>Парад на честь 30-ліття Незалежності України</h3>
                  <p>24 серпня 2021 року літак Ан-225 долучився до параду з нагоди святкування 30-річчя Незалежності України.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2022</div>
                <div className="timeline-content">
                  <h3>Останній політ і знищення</h3>
                  <p>Останньою комерційною місією стала доставка 90 тонн тестів на COVID-19 з Китаю до Данії (2-5 лютого). Літак був знищений російськими військовими під час штурму Гостомельського аеропорту, що став ключовим вузлом оборони Києва.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2022-2025</div>
                <div className="timeline-content">
                  <h3>Плани відновлення</h3>
                  <p>Було оголошено про наміри завершити будівництво другого АН-225. У листопаді 2022 року Antonov підтвердив плани відбудови за оціночною вартістю $500 млн.</p>
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
              <p>Перевозив 247-тонний генератор - найважчий одинарний вантаж, коли-небуть транспортований у повітрі.</p>
            </div>
            
            <div className="achievement-card card">
              <div className="achievement-icon">🌍</div>
              <h3>Глобальна значимість</h3>
              <p>Став символом української інженерної досконалості та авіаційних досягнень по всьому світу.</p>
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