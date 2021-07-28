const Select = (props) => {
  const filter = (event) => {
    props.changeFilter(event);
  };

  return (
    <>
     <label>{props.select.labelText}</label>
      <select name={props.select.name} onChange={filter}>
        {props.select.options.map((element) => {
          return <option value={element.value}>{element.text}</option>;
        })}
      </select>
    </>
  );
};

export default Select;
