import React, { useState } from "react";

const ListToddo = ({ dat, checkHandler, removeHandler, editHandler, }) => {
    const [edit, setEdit] = useState(false)
    function svHandler() {
        setEdit(false)
    }
    return (
        <ul className="d-flex flex-column-reverse todo-list">
            {
                dat.map((values, index) => {
                    console.log(values)
                    return (
                        edit == values.id ?
                            <li key={index} onClick={(e) => checkHandler(e.target.id)} className={values.isDone == true ? "completed" : ""}  >
                                <div className="form-check">
                                    <input type="text" value={values.value} onChange={(e) => editHandler(values.id, e.target.value)} />
                                    <button className="savehandler" onClick={(e) => svHandler(false)}>Save</button>
                                    {/* <i className="input-helper"></i> */}
                                </div>
                                <i className="remove mdi mdi-close-circle-outline" onClick={(e) => removeHandler(e)}></i>
                            </li>
                            :
                            <li key={index} onClick={(e) => checkHandler(e.target.id)} className={values.isDone == true ? "completed" : ""}  >
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="checkbox" type="checkbox" id={values.id} />
                                        {values.value}
                                        <i className="input-helper"></i>
                                    </label>
                                </div>
                                <button className="removes" onClick={(e) => removeHandler(e)}>Remove</button>
                                <button className="edit" onClick={() => setEdit(values.id)}>Edit</button>
                            </li>
                    )
                })
            }




        </ul>
    )
}

export default ListToddo