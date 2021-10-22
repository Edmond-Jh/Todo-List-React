import React, { useState, useRef } from "react"
import ListTodo from './ListTodo/ListToddo'
let i = 1;
function Inputbar() {
    const [data, setData] = useState([]);

    const inputRef = useRef()



    function clickHandler() {
        const newObj = [
            ...data,
            { id: i, value: inputRef.current.value, isDone: false }
        ]
        console.log(newObj);

        i++;
        setData(newObj)
    }



    function checked(id) {
        let itemArr = data;
        itemArr.filter((item) => {
            if (item.id == id) {
                if (item.isDone == true) {
                    item.isDone = false
                } else {
                    item.isDone = true
                }
            }
        })
        setData([...itemArr]);
    }



    function removeFun(e) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    }


    function editHandlerF(id, value) {
        console.log(id, value);
        const eData = data;
        eData.filter((items) => {
            items.id == id ? items.value = value : alert("Bad Error")
        })
        setData([...eData]);
    }

    // function saveHandler(e) {
    //     setEdit(false)

    // }

    return (

        <div className="card-body">
            <h4 className="card-title">Awesome Todo list</h4>
            <div className="add-items d-flex">
                <input type="text" ref={inputRef} className="form-control todo-list-input" placeholder="What do you need to do today?" />
                <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={clickHandler}>Add</button>
            </div>
            <div className="list-wrapper">
                <ListTodo dat={data} checkHandler={checked} removeHandler={removeFun} editHandler={editHandlerF} />
            </div>
        </div>
    )
}


export default Inputbar;