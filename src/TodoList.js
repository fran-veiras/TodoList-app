import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import { CheckBox } from './Components/CheckBox/CheckBox';
import { NightMode } from './Components/NightMode/NightMode';

export const TodoList = () => {

    const [categories, setCategories] = useState([]);

    const styles = {
        todo: {
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            margin: "2rem auto",
            width: "95%",
            background:"white",
            borderRadius: "7px",
        },
        li: {
            borderBottom: "1px solid rgb(221, 221, 221)",
        },
    };

    return (
        <>
            <div className="back-image-day"></div>
            <div className="container">
                <h1>TODO</h1>
                <NightMode />
                <AddCategory setCategories={setCategories}/>
                <div style={styles.todo}>
                <CheckBox categories={categories}/>
            </div>
            </div>
        </>
    )
}
