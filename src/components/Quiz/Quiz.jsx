const Quiz = ({ onErro }) => {
  return (
    <div className="mt-4 px-3">
      <p>Pergunta: 2 + 2 = ?</p>

      <button onClick={onErro} className="btn btn-danger me-2">
        5 (errado)
      </button>

      <button className="btn btn-success">
        4 (certo)
      </button>
    </div>
  );
};

export default Quiz;
