import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

function Footer(props) {
    return (
        <div className="bottom_of_page">
            <button id="reorder_tasks" onClick={() => props.reorderTasks()}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
            </svg></button>
            <button id="add_task" onClick={() => props.addTask()}>+</button>
        </div>
    )
}

export default Footer;