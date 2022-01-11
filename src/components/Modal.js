const Modal = (props) => {
  const closeButtonHandler = () => {
    props.onClick();
  };
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={closeButtonHandler}>
        Cancel
      </button>
      <button className="btn" onClick={closeButtonHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
