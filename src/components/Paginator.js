import React from "react";

const Paginator = (props) => {
    const {page, totalPages, onLeftClick, onRigthClick} = props
    return (
        <div className="container-paginator">
            <button onClick={onLeftClick}> 👈 </button>
            <div> {page} de {totalPages} </div>
            <button onClick={onRigthClick}> 👉 </button>
        </div>
    )
}

export default Paginator