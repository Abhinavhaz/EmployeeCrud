const Modal = ({handleSubmit,handleChange,formdata,editIdx,setModal})=> {
    return (
      <div className="container">
        
        <div className="card"> 
        <div className="cancel" onClick={()=>setModal(false)}>❌</div>

            <h3>Fill the Form</h3>

        <form onSubmit={handleSubmit}>
            
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formdata.name}
            required
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formdata.email}
            required
          />
          <input
            name="role"
            placeholder="Role"
            onChange={handleChange}
            value={formdata.role}
            required
          />
  
          <button type="submit" > {editIdx != null ? "Update" : "Add New"}</button>
        </form>
        </div>
      </div>
    );
  };
  export default Modal;
  