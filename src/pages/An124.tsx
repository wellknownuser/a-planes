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
                <div className="timeline-year">1972</div>
                <div className="timeline-content">
                  <h3>Офіційне рішення про розробку</h3>
                  <p>2 лютого 1972 року Комісія Президії РМ СРСР з військово-промислових питань ухвалила рішення про вибір чотири-двигунного Ан-124 (індекс "виріб 200") для подальшої розробки. Завдання - не лише вдвічі перевершити транспортні можливості Ан-22, але й значно поліпшити експлуатаційні характеристики.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">1973</div>
                <div className="timeline-content">
                  <h3>Макет та будівництво виробничих потужностей</h3>
                  <p>Побудовано повнорозмірний макет літака. З 1973 року на КиАПО розпочалося зведення величезного виробничого корпусу з прольотом до 100 метрів, хід будівництва жорстко контролювався ЦК КПУ з 1977 року.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">1976</div>
                <div className="timeline-content">
                  <h3>Повна переробка проєкту</h3>
                  <p>О.К. Антонов ухвалив рішення про повну переробку проєкту, якому надали новий шифр "виріб 400". У січні 1977 року вийшла Постанова ЦК КПРС і РМ СРСР, що затвердила нові вимоги. Ключовим рішенням стало використання суперкритичних профілів крила, яке накреслив сам Генеральний конструктор.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1978</div>
                <div className="timeline-content">
                  <h3>Ініціація проєкту</h3>
                  <p>Радянське міністерство оборони виділило завдання на створення нового важкого транспортного літака, здатного перевозити міжконтинентальні балістичні ракети та інше стратегічне обладнання.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1982</div>
                <div className="timeline-content">
                  <h3>Початок розробки</h3>
                  <p>Проектні роботи почалися під керівництвом Віктора Толмачова для створення стратегічного транспортного літака. Команда розробила унікальну систему підйомно-транспортного обладнання з двома мостовими кранами вантажопідйомністю по 10 тонн кожен.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1982</div>
                <div className="timeline-content">
                  <h3>Перший політ</h3>
                  <p>АН-124 здійснив свій перший політ 24 грудня 1982 року о 12:00 з аеродрому Святошин в Києві. Літак пілотували заслужені льотчики-випробувачі В.І. Терський та О.В. Галуненко, штурманом був А.П. Піддубний, бортінженерами - А.М. Шулещенко і радистом - М.А. Тупчієнко. На борту вперше з'явилася назва "Руслан".</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">1983</div>
                <div className="timeline-content">
                  <h3>Початок державних випробувань</h3>
                  <p>У листопаді 1983 року почалися польоти за програмою Державних спільних випробувань. Їх проводили екіпажі НДІ ВПС за участю льотчиків ОКБ. До грудня 1984 року виконано 157 польотів з нальотом 304 години, включаючи 18 польотів на великих кутах атаки.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1985</div>
                <div className="timeline-content">
                  <h3>Дебют на Заході та перші рекорди</h3>
                  <p>У травні 1985 року літак вперше показали радянській пресі, а через кілька тижнів дебютував на XXVI аерокосмічному салоні в Ле-Бурже. 26 липня екіпаж Терського встановив відразу 21 світовий рекорд, включаючи абсолютне досягнення з підйому 171,219 кг на висоту 10,750 м.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1986</div>
                <div className="timeline-content">
                  <h3>Завершення державних випробувань</h3>
                  <p>У грудні 1986 року підписано "Акт державного випробування дослідного важкого дальнього ВТЗ Ан-124". Літак введений в експлуатацію Радянськими ВПС.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1987</div>
                <div className="timeline-content">
                  <h3>Рекорд дальності польоту</h3>
                  <p>6 травня 1987 року змішаний екіпаж під командуванням В.І. Терського на Ан-124 № 01-08 виконав безпосадковий переліт довжиною 20,151 км уздовж кордонів Радянського Союзу за 25 годин 30 хвилин. Злітна маса досягла рекордної величини 455 тонн. Встановлено світовий рекорд дальності польоту замкненим маршрутом.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">1989</div>
                <div className="timeline-content">
                  <h3>Повітряне десантування</h3>
                  <p>У 1989 році Ан-124 № 01-08 обладнали для повітряного десантування і успішно проводили випробування з скидання вантажів, що стало унікальним досягненням для літака такого класу.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1990</div>
                <div className="timeline-content">
                  <h3>Початок комерційних операцій та нові частини</h3>
                  <p>11 січня 1990 року перші польоти здійснив новостворений 235-й важкий військово-транспортний полк в Мелітополі. Одночасно почався перехід до комерційних вантажних операцій через створення авіакомпанії "Аеророзвідка" (пізніше Antonov Airlines).</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">1992</div>
                <div className="timeline-content">
                  <h3>Цивільна сертифікація та перша катастрофа</h3>
                  <p>30 грудня 1992 року "Руслан" отримав від Авіареєстру МАК Сертифікат льотної придатності як цивільне транспортне повітряне судно. Однак 13 жовтня під час сертифікаційних випробувань Ан-124 № 01-03 зазнав катастрофи внаслідок руйнування носового обтічника РЛС при максимальному швидкісному натиску.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">1991</div>
                <div className="timeline-content">
                  <h3>Перевезення унікальних вантажів</h3>
                  <p>Під час війни в Перській затоці Ан-124 доставляв американські зенітні комплекси "Петріот" в район бойових дій, евакуював до 451 людини за рейс, перевозив протигази до Саудівської Аравії та обладнання для гасіння пожеж на нафтосвердловинах. Це продемонструвало універсальність літака.</p>
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