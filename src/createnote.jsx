import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const expandIt = () => {
        setExpand(true);
    }

    const InputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;
        
        const {name, value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    const addEvent = () => {
        props.passnote(note);
        setNote({
            title: "",
            content: "",
        });
    }

    return (
        <>
            <div className="main_note">
                <form>
                    {expand?
                    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" />
                    : null}
                    <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note..." onClick={expandIt}>
                    </textarea>
                    <Button onClick={addEvent}>
                        <AddIcon />
                    </Button>
                </form>
            </div>
        </>
    )
}

export default CreateNote;