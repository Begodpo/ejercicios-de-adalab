const InputGroupText = (props) => {
  const handleInputChange = (ev) => {
    props.handleName(ev.target.value);
    props.handleEmail(ev.target.value);
  };
  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor={props.inputId}>
        {props.labelText}
      </label>
      <input
        className="input-text"
        type="text"
        name={props.inputName}
        id={props.inputId}
        placeholder={props.inputPlaceholder}
        value={props.inputvalue}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default InputGroupText;
