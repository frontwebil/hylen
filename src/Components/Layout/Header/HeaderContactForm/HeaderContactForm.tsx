import "./style.css";

export function HeaderContactForm() {
  return (
    <div className="header-contact-form">
      <div className="header-contact-form-wrapper">
        <div className="header-contact-form-text">
          <h2>Зв’яжіться з нами:</h2>
          <p>
            щоб отримати консультацію, замовити продукцію або дізнатись більше
            про індивідуальні рішення HYLEN. Ми цінуємо кожного клієнта і
            працюємо для вашого успіху.
          </p>
        </div>
        <form action="" className="header-contact-form-container">
          <div className="header-contact-form-container-grid">
            <div className="header-contact-form-field">
              <input
                type="text"
                name="name"
                placeholder="Ім’я*"
                className="header-contact-form-input"
              />
            </div>

            <div className="header-contact-form-field">
              <input
                type="text"
                name="company"
                placeholder="Назва компанії"
                className="header-contact-form-input"
              />
            </div>

            <div className="header-contact-form-field">
              <input
                type="tel"
                name="phone"
                placeholder="+38044123 45 67"
                className="header-contact-form-input"
              />
            </div>

            <div className="header-contact-form-field">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="header-contact-form-input"
              />
            </div>

            <div className="header-contact-form-field header-contact-form-field-full">
              <textarea
              rows={4}
                name="message"
                placeholder="Запит*"
                className="header-contact-form-textarea"
              ></textarea>
            </div>
          </div>

          <div className="header-contact-form-container-buttons">
            <button type="submit" className="header-contact-form-submit">
              ВІДПРАВИТИ
            </button>

            <button type="button" className="header-contact-form-close">
              ЗАКРИТИ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
