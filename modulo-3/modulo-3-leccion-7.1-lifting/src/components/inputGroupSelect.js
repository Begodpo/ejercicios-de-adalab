const InputGroupSelect = (props) => {
  const handleChangeRegion = (ev) => {
    props.handleRegion(ev.target.value);
  };
  return (
    <div className="input-group-select">
      <label className="label-text" htmlFor="region">
        Indica tu región:
      </label>
      <select
        className="input-select"
        name="region"
        id="region"
        value={props.value}
        onChange={props.handleChange}
      >
        <option>España peninsular</option>
        <option>Islas Canarias</option>
        <option>Islas Baleares</option>
        <option>Ceuta</option>
        <option>Melilla</option>
      </select>
    </div>
  );
};
export default InputGroupSelect;
