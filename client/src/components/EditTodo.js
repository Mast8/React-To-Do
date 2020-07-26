import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [descriptionn, setDescriptionn] = useState(todo.description);
  //const [imagen, setImagen] = useState(todo.imagen);

  const [inputs, setInputs] = useState({
    description: todo.description,
    imagen: todo.imagen

  });

  console.log(descriptionn);
  const {description, imagen } = inputs;
  const onChange = e => {
    setInputs ({ ...inputs, [e.target.name]: e.target.value });
  }


  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    console.log(e);
    try {
      const body = { description, imagen };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${todo.todo_id}`}
        //onClick={() => setDescriptionn(todo.description)}
        //onClick={() => todo.description}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                //aqui
                // onClick={() => setDescriptionn(descriptionn)}
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
                  //value={description}
                onChange={ e => onChange(e)}
                //onChange={e => setDescription(e.target.value)}
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
                //onClick={ e => onChange(e)}
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                //aqui
               // onClick={() => setDescriptionn(descriptionn)}
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

export default EditTodo;
