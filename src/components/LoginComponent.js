import React, { useState } from "react";
import ImgCar from "../assets/img/img-car.svg";
import ImgCardResponsive from "../assets/img/LogoResponsive.svg";
import ImgLogo from "../assets/img/Logo.svg";
import ImgPhone from "../assets/img/ic_phone.svg";
import { useRecords } from "../hooks/useRecords";
import Constants from "../core/http/Constants";
import HttpClient from "../core/http/HttpClient";
import Endpoints from "../core/http/Endpoints";
const { user } = Constants;
const { getRecords } = Endpoints;

const resource = user;

export const LoginComponent = ({ data, setData, setView, setPerson }) => {
  const [error, setError] = useState(false);
  const [records, setRecords] = useState([]);
  const [id, setId] = useState(1);
  const handleChange = (event) => {
    const name = event.target.name;
    setData({
      ...data,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (
    //   data.number.length > 0 ||
    //   data.phone.length > 0 ||
    //   data.license.length > 0
    // ) {
    //   setError(true);
    //   return;
    // }

    console.log("sdadasdasd");

    const apiData = async () => {
      //setLoading(true);

      await HttpClient.request(
        getRecords({
          resource: resource,
          id: id,
        })
      )
        .then(({ data }) => {
          console.log("asdasd");
          console.log(data);
          setPerson(data);
          setView("PROFILE");
        })
        .catch((err) => {
          // setLoading(false);
        });
    };

    apiData();

    // const { loading, records } = useRecords({
    //   resource,
    // });
  };

  return (
    <div className="login">
      <div className="login__img center-all">
        <img src={ImgLogo} alt="Rimac Logo" className="login__logo" />
        <div className="">
          <img src={ImgCar} alt="Rimac Seguros" className="login__img--full" />
          <img
            src={ImgCardResponsive}
            alt="Rimac Seguros"
            className="login__img--phone"
          />
          <p className="tag tag--new">¡NUEVO!</p>
          <h2 className="login__title ">
            Seguro{" "}
            <span className="color-primary">
              Vehicular <br /> Tracking
            </span>
          </h2>
          <p className="text text--login-details m-top-16">
            Cuentanos donde le haras seguimiento a tu seguro{" "}
          </p>
        </div>
        <p className="tag tag--water color-gray font-12">
          &copy; 2021 RIMAC Seguros y Reaseguros.
        </p>
      </div>

      <div className="header">
        <p className="text text--header"> ¿Tienes alguna duda? </p>
        <p className="header__call">
          <img src={ImgPhone} alt="Icon Phone" /> (01) 411 6001{" "}
        </p>
        <p className="header__call-responsive">
          <img src={ImgPhone} alt="Icon Phone" /> Llámanos{" "}
        </p>
      </div>

      <div className="login__data">
        <div className="login__body">
          <h2 className="title">Déjanos tus datos</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
              <select
                className="form__input"
                value={data.document}
                onChange={handleChange}
                name="document"
              >
                <option value="DNI">DNI</option>
              </select>
              <input
                className="form__input"
                value={data.number}
                onChange={handleChange}
                name="number"
                placeholder="Nro. de doc"
              />
            </div>

            <input
              className="form__input"
              value={data.phone}
              onChange={handleChange}
              name="phone"
              placeholder="Celular"
            />
            <input
              className="form__input"
              value={data.license}
              onChange={handleChange}
              name="license"
              placeholder="Placa"
            />

            <div className="form__politics">
              <input type="checkbox" />
              <p className="text m-left-14">
                Acepto la{" "}
                <a href="!#" className="link">
                  Politica de Protección de Datos Personales
                </a>{" "}
                y los{" "}
                <a href="!#" className="link">
                  Términos y Condiciones.
                </a>
              </p>
            </div>

            <div className="form__buttom">
              <button className="button button--primary" type="submit">
                COTÍZALO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
