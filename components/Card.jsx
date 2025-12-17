import { Link } from "react-router-dom";

export default function Card({
  destination,
  start_date,
  end_date,
  description,
}) {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src="..." className="card-img"></img>
          <h1 className="card-header">{destination}</h1>
          <div className="card-body">
            <h5 className="card-title">{start_date}</h5>
            <h5 className="card-title">{end_date}</h5>
            <p className="card-text">{description}</p>
            <a href='#' className="btn btn-primary">
              Partecipanti
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
