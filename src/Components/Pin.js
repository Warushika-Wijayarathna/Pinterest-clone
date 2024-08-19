import React from "react";

function Pin({pinSize, imgSrc, name, link}) {
    return (
    <div className={`pin ${pinSize}`}>
        <img 
        className="mainPic" 
        src={imgSrc}        
        alt=""
        />

        <div className="content">
            <h3>{name}</h3>

            <div className="search">
                <a href={link}>
                <img 
                src= "https://firebasestorage.googleapis.com/v0/b/printerest-clone-773aa.appspot.com/o/right-arrow-symbol%20(1).png?alt=media&token=b2c60ed8-2462-48df-b5d7-610cde874f91"
                alt="search"
                />
                </a>
            </div>
        </div>
    </div>
    );
}

export default Pin;