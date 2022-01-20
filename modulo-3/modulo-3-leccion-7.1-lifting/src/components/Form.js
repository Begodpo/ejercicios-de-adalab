import Preview from "./Preview";
import InputGroupText from "./InputGroupText";
import InputGroupSelect from "./inputGroupSelect";
import InputGroupRadio from "./inputGroupRadio";

const Form = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
    props.handleFormSubmit();
  };
  return (
    <form className="form" onSubmit={handleForm}>
      <h2>Rellena tus datos para finalizar la compra:</h2>
      <div className="form">
        {/* name */}

        <InputGroupText
          labelText="Escribe un nombre:"
          inputName="name"
          inputId="name"
          inputPlaceholder="María García"
          inputValue={name}
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
  );
};

export default Form;
