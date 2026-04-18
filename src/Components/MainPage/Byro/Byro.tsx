import Image from "next/image";
import "./style.css";

export function Byro() {
  return (
    <section className="byro">
      <div className="container">
        <div className="byro-top">
          <h2>Конструкторське бюро</h2>
          <Image
            src={"/Byro/byro-logo.svg"}
            width={1500}
            height={300}
            alt="Hylen Logo"
          />
          <h3>
            Ваш партнер <br />у розробці техніки
          </h3>
        </div>
        <div className="byro-content">
          <div className="byro-content-img">
            <Image
              src={"/Byro/byro.png"}
              width={2000}
              height={1000}
              alt="byro-photo"
            />
            <div className="byro-globe">
              <Image
                className="byro-globe__image"
                src={"/Byro/bg-globe.svg"}
                width={3000}
                height={2000}
                alt=""
              />
            </div>
          </div>
          <div className="byro-content-text">
            <h2>
              Конструкторське бюро HYLEN – це місце, де народжується техніка.
              Тут ідеї перетворюються на рішення, які працюють у полі, на фермі
              чи на дорозі.
            </h2>
            <p>
              Сьогодні КБ працює у двох основних напрямах: сільськогосподарська
              техніка та колісна й важка техніка. Від легких причепів і
              гноєвивізних систем до великогабаритних контейнеровозів і
              паливозаправників. Кожен проєкт створюється так, щоб відповідати
              конкретній потребі. <br />
              <br /> Конструкторське бюро HYLEN – це гнучкість, інженерна
              сміливість і прагнення знаходити відповіді на будь-які задачі.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
