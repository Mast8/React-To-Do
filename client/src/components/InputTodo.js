import React, { Fragment, useState } from "react";

const InputTodo = () => {
  //const [description, setDescription] = useState("");
  //const [imagen, setImagen] = useState("");

  const [inputs, setInputs] = useState({
    description: "",
    imagen: ""

  });
  const {description, imagen } = inputs;
  const onChange = e => {
    setInputs ({ ...inputs, [e.target.name]: e.target.value });
  }



  const addTodo = async e => {
    e.preventDefault();
    try {
     
      const body = { description, imagen };
     
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),

      });

      window.location = "/";
      
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      
      
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id1`}
      >
        Add
      </button>

     
      <div
        class="modal"
        id={`id1`}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"

              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                name="description"
                value={description}
                onChange={ e => onChange(e)}
              />
              
            </div>
            <div class="modal-body">
              <input
                  type="text"
                  className="form-control"
                  name="imagen"
                  value={imagen}
                  onChange={ e => onChange(e)}
                />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => addTodo(e)}
              >
                Add
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default InputTodo;
