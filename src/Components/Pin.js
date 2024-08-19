import React from "react";

function Pin({pinSize}) {
    return (
    <div className={`pin ${pinSize}`}>
        <img 
        className="mainPic" 
        src="https://cdn.pixabay.com/photo/2024/08/05/21/19/lion-8947711_1280.jpg" 
        alt=""
        />

        <div className="content">
            <h3>Sample Name</h3>

            <div className="search">
                <img 
                src= "https://firebasestorage.googleapis.com/v0/b/printerest-clone-773aa.appspot.com/o/right-arrow-symbol%20(1).png?alt=media&token=b2c60ed8-2462-48df-b5d7-610cde874f91"
                alt="search"
                />
            </div>
        </div>
    </div>
    );
}

export default Pin;