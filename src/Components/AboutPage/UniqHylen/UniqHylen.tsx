import Image from "next/image";
import "./style.css";

export function UniqHylen() {
  return (
    <section className="uniq-hylen">
      <div className="container">
        <h2 className="uniq-hylen-title">Унікальність HYLEN</h2>
        <div className="uniq-hylen-top">
          <div className="uniq-hylen-top-left-progress-line"></div>
          <div className="uniq-hylen-top-logo">
            <Image
              src={"/icons/uniq-logo.svg"}
              width={70}
              height={45}
              alt="Hylen"
            />
          </div>
          <div className="uniq-hylen-top-right-progress-line"></div>
        </div>
        <div className="uniq-hylen-content">
          <div className="uniq-hylen-content-left-column">
            <div className="uniq-hylen-content-card">
              <h2>[01]</h2>
              <p>
                У HYLEN немає випадкових рішень. Ми не створюємо «чергову
                техніку» –ми створюємо рішення, які працюютьу реальному житті
              </p>
            </div>
            <div className="uniq-hylen-content-card">
              <h2>[02]</h2>
              <p>
                Ми закладаємо витривалість ще на етапі креслення. Ми зварюємо
                характеру кожен шов.
              </p>
            </div>
            <div className="uniq-hylen-content-card">
              <h2>[03]</h2>
              <p>
                І кожен наш продукт – це результат повного виробничого циклу
              </p>
            </div>
          </div>
          <div className="uniq-hylen-content-middle-progressline-container">
            <div className="uniq-hylen-content-middle-progressline"></div>
          </div>
          <div className="uniq-hylen-content-right-column">
            <div className="uniq-hylen-content-card">
              <h2>[01]</h2>
              <p>
                Наш підхід – це поєднання інженерної точності, виробничого
                досвіду та глибокого розуміння того, як має працювати надійна
                техніка.
              </p>
            </div>
            <div className="uniq-hylen-content-card">
              <h2>[02]</h2>
              <p>
                Ми створюємо не просто конструкції, а механіку інстинкту –
                техніку, яка підлаштовується під реальні умови, а не під
                ідеальні сценарії.
              </p>
            </div>
            <div className="uniq-hylen-content-card">
              <h2>[03]</h2>
              <p>
                Результат, який ми контролюємо від першого металевого листа до
                готового причепа.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
