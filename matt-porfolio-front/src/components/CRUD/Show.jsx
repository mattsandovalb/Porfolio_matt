import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "http://127.0.0.1:8000/api";

const Show = () => {
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    getAllElements();
  }, []);

  const getAllElements = async () => {
    const response = await axios.get(`${url}/works`);
    setElementos(response.data);
  };

  const deleteElement = async (id) => {
    await axios.delete(`${url}/works/${id}`);
    getAllElements();
  };

  return (
    <div>
      <Link to="/create" className="btn btn-success btn-lg ">
        {" "}
        Create{" "}
      </Link>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Description</th>
            <th>Image</th>
            <th>Technologies</th>
            <th>Github</th>
            <th>Deploy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {elementos.map((elemento) => (
            <tr key={elemento.id}>
              <td>{elemento.name}</td>
              <td>{elemento.description}</td>
              <td>{elemento.image}</td>
              <td>{elemento.technologies}</td>
              <td>{elemento.github}</td>
              <td>{elemento.deploy}</td>
              <td>
                <Link to={`/edit/${elemento.id}`} className="btn btn-warning">
                  Edit
                </Link>
                <button
                  onClick={() => deleteElement(elemento.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Show;
