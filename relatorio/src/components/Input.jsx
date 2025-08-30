import "./Input.css";

const Input = ({id, classNameDiv, classNameInput, classNameLabel, type = "text", label, ...rest}) => {
  return (
        <div className={classNameDiv}>
            <input type={type} id={id} className={classNameInput} {...rest} />
            <label htmlFor={id} className={classNameLabel}>{label}</label>
        </div>
    )
}

export default Input
