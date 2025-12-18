import users from "../data/users";
import { useParams } from "react-router-dom";
import travels from "../data/travels";

export default function DetailTravel() {
  const { id } = useParams(); // ottengo id dall'URL

  const travelId = parseInt(id);
  const travelUsers = users.filter((user) => user.travel_id === travelId);

  return (
    <>
      <div className="container mt-3">
        <h1 className="d-flex justify-content-center">
          {travels[travelId - 1].destination} trip
        </h1>

        <div className="accordion" id="accordionExample">
          {travelUsers.map((user, i) => (
            <div key={user.id} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${i}`}
                  aria-expanded="false"
                  aria-controls={`#collapse-${i}`}
                >
                  {user.first_name} {user.last_name}
                </button>
              </h2>
              <div
                id={`collapse-${i}`}
                className="accordion-collapse collapse"
                data-bs-parent='#accordionExample'
              >
                <div className="accordion-body">
                  {user.email} {user.id_code} {user.phone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
