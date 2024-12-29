import { useEffect, useState } from "react";
import Modal from "./modal";
import "../App.css";
function Table() {
  const [info, setInfo] = useState([]);
  const [formdata, setFormdata] = useState({ name: "", email: "", role: "" });
  const [editIdx, setEditIdx] = useState(null);
  const [onModal ,setModal]   = useState(false)
  const [page, setPage] = useState(1);




  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIdx != null) {
      const updateinfo = [...info];
      updateinfo[editIdx] = formdata;
      setInfo(updateinfo);
      setEditIdx(null);
    } else {
      setInfo((prev) => [...prev, formdata]);
    }
    setFormdata({ name: "", email: "", role: "" });
    setModal(false)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("xyz", name, value);
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleDelete = (i) => {
    const xyz = [...info];
    xyz.splice(i, 1);
    setInfo(xyz);
  };

  const handleEdit = (idx) => {
    setModal(true)
    setFormdata(info[idx]);
    setEditIdx(idx);
  }
    const previous = () => {
        if (page == 1) {
          return;
        } else {
          setPage(page - 1);
        }
      };
      const Next = () => {
        if (page == Math.ceil(info.length / 4)) {
          return;
        } else {
          setPage(page + 1);
        }
      };
  

  return (
    <>
      {onModal ? <Modal  handleSubmit={handleSubmit} handleChange={handleChange}  formdata={formdata} editIdx={editIdx} setModal={setModal} />  :""}
      <div className="App">
        <table className="table1">
          <thead className="thead">
            <tr>
              <th> Name</th>
              <th> Email</th>
              <th>Role</th>
              <th> <button onClick={()=>setModal(!onModal)}>Add</button></th>
          
            </tr>
          </thead>
          <tbody>
            {info.slice((page - 1) * 4, page * 4).map((value, index) => (
              <tr key={index} className="tbody">
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.role}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="buttons">
          {info.length >=4 ?(<>  <button onClick={previous} type="button">
            Prev
          </button>
          <button onClick={Next} type="button">
            Next
          </button> </>) :null}
        </div>
        
      </div>
    </>
  );
}
export default Table;
