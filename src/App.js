import React, { useState } from "react";
import CreateNote from "./createnote";
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
// import "..\node_modules\bootstrap\dist\css\bootstrap.min.css";

const App = () => {

    const[addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((prevData) => {
            return [...prevData, note];
        });
        // alert("clicked");
    }

    const onDelete = (id) => {
        setAddItem((olddata) =>
        olddata.filter((currdata, index) => {
            return index !== id;
        }))
    } 

    return (
        <>
        <Header />
        <CreateNote passnote={addNote} />

        {addItem.map((val, index) => {
           return (
               <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                />
           );
        })
        }
        <Footer />
        </>
    )

}

export default App;