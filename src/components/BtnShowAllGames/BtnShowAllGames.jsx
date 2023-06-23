import "./BtnShowAllGames.css";

const BtnShowAllGames = (props) => {
  return (
    <button onClick={props.function} className="btn-show-all-games">
      <h4>Show All Games</h4>
    </button>
  );
};

export default BtnShowAllGames;
