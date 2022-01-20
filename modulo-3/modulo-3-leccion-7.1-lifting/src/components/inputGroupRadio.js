const InputGroupRadio = (props) => {
  const handleChangeRadio = (ev) => {
    props.handlePaymentType(ev.target.value);
  };
  return (
    <div className="input-group-radio">
      <label className="label-radio" htmlFor="creditCard">
        Tarjeta de crédito
      </label>
      {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
      <input
        type="radio"
        name="paymentType"
        id="creditCard"
        value="creditCard"
        checked={props.checked}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default InputGroupRadio;
