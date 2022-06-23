const Job = (props) => {
  return (
    <>
      <div className="card">
        <div className="start">
          <h3>{props.title}</h3>
        </div>

        <div className="end">
          <p>{props.contractType}</p>
          <p>{props.country}</p>
          <p>{props.city}</p>
        </div>
      </div>
    </>
  );
};

export default Job;
