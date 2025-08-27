const Input = ({ disabled = false, className, ...props }) => <input disabled={disabled} className={`${className} form-control`} {...props} />;

export default Input;
