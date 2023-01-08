import React from "react";

const Paginator = (props) => {
    const {page, totalPages, onLeftClick, onRigthClick} = props
    return (
        <div className="container-paginator">
            <span onClick={onLeftClick} class="material-symbols-outlined">keyboard_arrow_left</span> 
            <div className="pages"> {page} de {totalPages} </div>
            <span onClick={onRigthClick} class="material-symbols-outlined">keyboard_arrow_right</span>
        </div>
    )
}

export default Paginator