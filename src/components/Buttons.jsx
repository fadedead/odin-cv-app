import "./../styles/buttons.css";

function DataControlButton({ setPageState }) {
  const setStateToEdit = () => setPageState((state) => (state = 0));
  const setStateToDisplay = () => setPageState((state) => (state = 1));
  return (
    <div className="buttons">
      <button onClick={setStateToEdit}>edit</button>
      <button onClick={setStateToDisplay}>submit</button>
    </div>
  );
}

export { DataControlButton };
