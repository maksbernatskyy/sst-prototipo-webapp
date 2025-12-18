import { useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import travels from "../data/travels";
import users from "../data/users";

export default function DetailTravel() {
  const { id } = useParams();

  const travelId = parseInt(id);
  const travelUsers = users.filter((user) => user.travel_id === travelId);

  const [displayedUsers, setDisplayedUsers] = useState(travelUsers);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4 fw-bold text-uppercase">
          {travels[travelId - 1].destination} trip
        </h1>

        <div className="d-flex justify-content-center mb-5">
          <div className="w-100" style={{ maxWidth: "600px" }}>
            <SearchBar
              users={travelUsers}
              onSearchResults={setDisplayedUsers}
            />
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          {displayedUsers.map((user, i) => (
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
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <strong>Email:</strong>
                      <span className="text-secondary">{user.email}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <strong>Codice ID:</strong>
                      <span className="badge bg-light text-dark border">
                        {user.id_code}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <strong>Telefono:</strong>
                      <span className="text-secondary">{user.phone}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
