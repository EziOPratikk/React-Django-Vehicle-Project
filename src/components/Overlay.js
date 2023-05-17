function Overlay(props) {
  function yesHandler() {
    props.onClick();
  }

  return (
    <div className="overlay-card" style={{ textAlign: "center" }}>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>Are you sure?</p>
      <button className="btn" onClick={yesHandler}>Yes</button>
    </div>
  );
}

export default Overlay;
