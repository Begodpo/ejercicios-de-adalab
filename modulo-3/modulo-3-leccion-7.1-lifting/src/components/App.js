// Fichero src/components/App.js
import { useState } from "react";
import Preview from "./Preview";
import InputGroupText from "./InputGroupText";
import InputGroupSelect from "./inputGroupSelect";
import InputGroupRadio from "./inputGroupRadio";

const App = () => {
  // Estados del componente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handleRegion = (ev) => {
    setRegion(ev.target.value);
  };

  const handlePaymentType = (ev) => {
    setPaymentType(ev.target.value);
  };

  const handleLegalTerms = (ev) => {
    // Como lo que nos interesa es si está activo o no guardamos el checked
    setLegalTerms(ev.target.checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismo valores que hemos usado arriba en los useState
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log("Enviando datos al servidor...");
  };

  // Funciones que nos ayudan a renderizar
  const renderPaymentTypeText = () => {
    if (paymentType === "creditCard") {
      return "Tarjeta de crédito";
    } else if (paymentType === "cash") {
      return "Efectivo";
    } else if (paymentType === "cashOnDelivery") {
      return "Contra reembolso";
    }
  };

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado una tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}

          <InputGroupText
            labelText="Escribe un nombre:"
            inputName={name}
            inputId={name}
            inputPlaceholder="María García"
            value={name}
            handleChange={handleName}
          />

          {/* email */}
          <InputGroupText
            labelText="Escribe un email:"
            inputName={email}
            inputId={email}
            inputPlaceholder="mariagarcia@gmail.com"
            value={email}
            handleChange={handleEmail}
          />

          {/* region */}

          <InputGroupSelect value={region} handleChange={handleRegion} />

          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>

          <InputGroupRadio
            checked={paymentType === "creditCard"}
            handleChange={handlePaymentType}
          />

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="cash">
              Efectivo
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cash */}
            <input
              type="radio"
              name="paymentType"
              id="cash"
              value="cash"
              checked={paymentType === "cash"}
              onChange={handlePaymentType}
            />
          </div>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="cashOnDelivery">
              Contra reembolso
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cashOnDelivery */}
            <input
              type="radio"
              name="paymentType"
              id="cashOnDelivery"
              value="cashOnDelivery"
              checked={paymentType === "cashOnDelivery"}
              onChange={handlePaymentType}
            />
          </div>

          {/* legal terms */}
          <div className="input-group-checkbox">
            <label className="label-check" htmlFor="legalTerms">
              Debes aceptar nuestros términos legales para completar la compra:
            </label>
            {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
            <input
              type="checkbox"
              name="legalTerms"
              id="legalTerms"
              checked={legalTerms}
              onChange={handleLegalTerms}
            />
          </div>
        </div>
        <Preview
          name={name}
          email={email}
          region={region}
          renderPaymentTypeText={renderPaymentTypeText}
          legalTerms={legalTerms}
        />
        ;{/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <input
          className="button"
          type="submit"
          value="Enviar"
          disabled={isValidForm() === false}
        />
        {/* send */}
        <button className="button reset" onClick={handleResetButton}>
          Limpiar el formulario
        </button>
      </form>
    </div>
  );
};

export default App;
