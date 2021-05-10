import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import { CheckBox } from './Components/CheckBox';
import dayIcon from './img/day.png';

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
        title: {
            display: "inline",
        }
    };

    return (
        <>
            <div className="back-image-day"></div>
            <div className="container">
                <h1>TODO</h1>
                <img className="day-icon" src={dayIcon}/>
                <AddCategory setCategories={setCategories}/>
                <div style={styles.todo}>
                {
                    categories.map(category => (
                        <ul style={styles.li}>
                            <li>
                                <CheckBox/>
                                <h3 style={styles.title}>{category}</h3>
                            </li>
                        </ul>
                    ))
                }
            </div>
            </div>
        </>
    )
}
