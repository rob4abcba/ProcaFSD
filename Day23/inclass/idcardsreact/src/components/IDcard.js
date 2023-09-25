const IDcard = (props) => {
  return (
    <div className="card w-25 float-start mx-1 my-1">
      <div className="card-body bg-primary">
        <h4 className="card-title bg-info">{props.name}</h4>
        <p className="card-text">{props.des + " " + props.age} </p>
      </div>
    </div>
  );
};

export default IDcard;
