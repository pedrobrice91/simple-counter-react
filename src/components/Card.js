
const Card = (props) => {
  
  return (
    <>
      <div className="card text-bg-dark mb-3">
        <div className="card-body">
            <p >
              {props.segundos}
            </p>
        </div>
      </div>
    </>
  );
};

export default Card;
