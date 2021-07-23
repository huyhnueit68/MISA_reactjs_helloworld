import React, { Component } from 'react';

export default function InputLable({displayName, handleClick}) {
    return (
        <div className="m-input">
            <button className="m-btn" onClick={() => handleClick(displayName + ' hihih')}>{displayName}</button>
        </div>
    )
}