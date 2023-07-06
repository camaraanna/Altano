import React, { useState } from "react";
import createPDF from "../components/createPDF";
import data from "../data/data";
import logo from "../assets/img/Logo/Logo.png";
import goBackBtn from "../assets/img/goBackButn.png";
import ticket from "../assets/img/ticket.png";
import { Link } from "react-router-dom";

export const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [tickets, setTickets] = useState("1");
  const [lastName, setLastName] = useState("");
  const [val, setVal] = useState("");
  const ticketsAsNumber = Number(tickets);
  return (
    <div className="container-page">
      {/*---------FORM--------- */}
      <div className="nav-page">
        <div className="">
          {" "}
          <a href="/" className="logo-page">
            <figure className="Logo-img-page">
              <img src={logo} alt="Logo" />
            </figure>
          </a>
        </div>
        <div className="empty-box"></div>
        {/*Link go back button */}

        <Link to={`/`}>
          {" "}
          <button className="btn-goBack-reservation">
            <img src={goBackBtn} alt="" />
          </button>
        </Link>
      </div>
      <div className="container-title-reservation"></div> <h1 className="title-reservation"> Reservation ticket </h1>
      <section className="section-reservation">
        <div className="container-btn-reservation">
          {/* Input last name  */}
          <label>
            <h4 className="category-name-btn-form"> Last name:</h4>
            <input id="btn-form" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
          {/* Input first name  */}
          <label>
            <h4 className="category-name-btn-form"> First name:</h4>
            <input id="btn-form" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          {/* Select Artist based on the value id  button */}
          <h4 className="category-name-btn-form">Ticket:</h4>
          <select id="btn-form" onChange={(e) => setVal(e.target.value)}>
            return{" "}
            <option typeof="number" min="0" max="4" value={ticketsAsNumber}>
              {" "}
              {ticketsAsNumber}{" "}
            </option>
            ;
          </select>
          {/* Allow us to change the value shown on the ticket  */}

          <div>
            <h4 className="category-name-btn-form">Artists:</h4>
            <select id="btn-form" key={data.id} onChange={(e) => setVal(e.target.value)}>
              <option value={true}> Select</option>

              {data.map((value, index) => {
                return (
                  <>
                    <option value={value.name}> {value.name} </option>
                  </>
                );
              })}
            </select>
          </div>

          <h4 className="category-name-btn-form"></h4>
          {/* Empty balise for space between buttons */}
          <button className="btn-reservation" onClick={createPDF}>
            Reservation
          </button>
        </div>
        <div>
          <div>
            <h4 className="category-name-btn-form   ticket-receipt-title">Ticket Receipt</h4>
          </div>
          <div id="content">
            <div>
              <h4 className="ticket-receipt-invisible">Ticket Receipt</h4>
            </div>
            {/*Value shown on the ticket  */}
            {ticketsAsNumber > 0 && (
              <div className="container-ticket-info">
                <p className="ticket-info">
                  Ticket: {ticketsAsNumber} <br />
                  For : {lastName} {firstName} <br />
                  Name of the Artist : {val}
                </p>

                <img className="ticket" src={ticket} alt="img" />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
