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
        {/* table */}
        <table className="table border-dark">
          {/* table head */}
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone number</th>
              <th scope="col">id_code</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>
            {travelUsers.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.id_code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
