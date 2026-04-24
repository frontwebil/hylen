import "./style.css";

export function Repair() {
  return (
    <>
      <section className="repair">
        <div className="repair-title">Ремонти – друге життя вашої техніки</div>
        <div className="repair-content">
          <div className="container">
            <div className="repair-content-top-text">
              <div className="repair-content-text-card top-left">
                У HYLEN ми віримо, що техніка заслуговує на ще один шанс.Саме
                тому ми займаємось капітальним ремонтом вантажних автомобілів.
              </div>
              <div className="repair-content-text-card top-right">
                Кожен ремонт – це не лише заміна деталей, а відновлення ресурсу
                всієї машини.
              </div>
            </div>
            <div className="repair-content-bottom-text">
              <div className="repair-content-text-card bottom-left">
                Ми проводимо діагностику, ремонтуємо двигуни й коробки передач,
                обробляємо вузли дробо– та піскоструминними технологіями,
                фарбуємо й захищаємо від корозії.
              </div>
              <div className="repair-content-text-card bottom-right">
                На фінальному етапі автомобіль проходить тестування, щоб бути
                готовим до нових завдань. У результаті техніка отримує нове
                життя.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="UnderByroLines">
        <div className="UnderByroLines-top">
          <div className="container">
            <span className="UnderByroLines-top-left-line"></span>
            <span className="UnderByroLines-top-right-line"></span>
          </div>
        </div>
        <div className="UnderByroLines-bottom">
          <div className="container">
            <span className="UnderByroLines-bottom-left-line"></span>
            <span className="UnderByroLines-bottom-middle-line"></span>
            <span className="UnderByroLines-bottom-right-line"></span>
          </div>
        </div>
      </section>
    </>
  );
}
