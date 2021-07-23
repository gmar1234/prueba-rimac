import React from "react";
import ImgPerson from "../../assets/img/Person.svg";
import ImgTab1 from "../../assets/img/icon_theft.svg";
import ImgAdd from "../../assets/img/ic_add.svg";
import ImgArrowUp from "../../assets/img/chevrot.svg";
import ImgArrowDown from "../../assets/img/chevrotdown.svg";
import ImgCheck from "../../assets/img/ic_check.svg";

export const Profile = ({ person, data }) => {
  return (
    <div className="profile">
      <div className="profile__header"></div>
      <div className="profile__sidebar"></div>
      <div className="profile__content">
        <div className="profile__data">
          <div className="back">
            <span>VOLVER</span>
          </div>

          <div className="profile__name">
            !Hola, <span className="color-primary"> {person.name}!</span>
            <p>Conoce las coberturas para tu plan</p>
          </div>

          <div className="profile__details">
            <p className="profile__license">Placa: {data.license}</p>
            <p className="profile__model">
              Wolkswagen 2019 <br /> Golf
            </p>
            <img src={ImgPerson} alt="Perona Rimac" />
          </div>

          <div className="profile__stats">
            <div className="profile__costs">
              <p className="profile__sum">Indica la suma asegurada</p>
              <p className="profile__sum-value">
                <span>MIN $12,500</span> | <span>MAX $16,500</span>{" "}
              </p>
            </div>
            <div className="profile__calculator">
              <span className="sum">-</span>
              <span className="value">$ 14,300</span>
              <span className="rest">+</span>
            </div>
          </div>

          <h2 className="profile__title">Agrega o quita coberturas</h2>

          <div className="profile__tabs">
            <div className="tabs active">Protege a tu auto</div>
            <div className="tabs">Protege a los que te rodeaN</div>
            <div className="tabs">mejora tu plAN</div>
          </div>

          <div className="profile__tabs-content">
            <div className="tabs-content">
              <div className="tabs-image">
                <img src={ImgTab1} alt="Tab" />
              </div>
              <div className="tabs-arrow">
                <img src={ImgArrowUp} alt="Tab" />
              </div>
              <div className="tabs-details">
                <h2>Llanta robada</h2>
                <div className="tabs-options">
                  <img src={ImgAdd} alt="Add" />
                  <p>Quitar</p>
                </div>
                <div className="tabs-text">
                  He salido de casa a las cuatro menos cinco para ir a la
                  academia de ingles de mi pueblo (Sant Cugat, al lado de
                  Barcelona) con mi bici, na llego a la academia que está en el
                  centro del pueblo en una plaza medio-grande y dejo donde
                  siempre la bici atada con una pitón a un sitio de esos de
                  poner las bicis y mucho más
                </div>
              </div>
            </div>
            <div className="tabs-content">
              <div className="tabs-image">
                <img src={ImgTab1} alt="Tab" />
              </div>
              <div className="tabs-arrow">
                <img src={ImgArrowDown} alt="Tab" />
              </div>
              <div className="tabs-details">
                <h2>Choque y/o pasarte la luz roja </h2>
                <div className="tabs-options">
                  <img src={ImgAdd} alt="Add" />
                  <p>Quitar</p>
                </div>
              </div>
            </div>
            <div className="tabs-content">
              <div className="tabs-image">
                <img src={ImgTab1} alt="Tab" />
              </div>
              <div className="tabs-arrow">
                <img src={ImgArrowDown} alt="Tab" />
              </div>
              <div className="tabs-details">
                <h2>Atropello en la vía Evitamiento </h2>
                <div className="tabs-options">
                  <img src={ImgAdd} alt="Add" />
                  <p>Quitar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="calulator">
          <div className="calculator__details">
            <p className="calculator__title">Monto</p>
            <p className="value">$35.00</p>
            <p className="plan">mensuales</p>
          </div>
          <div className="calculator__details-responsive">
            <div>
              <p className="value">$35.00</p>
              <p className="plan">mensual</p>
            </div>
            <button className="button button--primary" type="submit">
              LO QUIERO
            </button>
          </div>

          <h2 className="calculator__price">El precio incluye:</h2>
          <ul className="calculator__lists">
            <li>
              {" "}
              <img src={ImgCheck} alt="Imagen" /> Llanta de respuesto
            </li>
            <li>
              {" "}
              <img src={ImgCheck} alt="Imagen" />
              Analisis de motor
            </li>
            <li>
              {" "}
              <img src={ImgCheck} alt="Imagen" />
              Aros gratis
            </li>
          </ul>
          <button
            className=" calculator__button button button--primary"
            type="submit"
          >
            LO QUIERO
          </button>
        </div>
      </div>
    </div>
  );
};
