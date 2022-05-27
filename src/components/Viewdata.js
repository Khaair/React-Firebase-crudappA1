import UserDataService from "../services/user.services"

import { useEffect, useState } from "react";


function Viewdata({getBookId}) {

  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    console.log(data.docs);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await UserDataService.deleteUser(id);
    getUsers();
  };


  return (
    <>
 
    <div className='container mt-5'>
    <div className="mb-2">
        <button variant="dark edit" onClick={getUsers}>
          Refresh List
        </button>
      </div>
      <table className="table table-dark">
        <thead>
          <tr>
          <th scope="col">Sl</th>
          <th scope="col">title</th>
          <th scope="col">author</th>
          <th scope="col">body</th>
          <th scope="col">edit/delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {JSON.stringify(datas)} */}

          {data.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <th scope="row">{index + 1}</th>
                <td>{doc.name}</td>
                <td>{doc.email}</td>
                <td>{doc.address}</td>
                <td>
                <button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBookId(doc.id)}
                  >
                    Edit
                  </button>
                
                 
                <button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )

          })}


        </tbody>
      </table>

    </div>
    </>
  )
}

export default Viewdata