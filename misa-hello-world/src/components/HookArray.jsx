import React, { Component, useState, useEffect } from 'react'

export default function HookArray() {

    const [items, setItems] = useState([])

    const addItems = () => {
        setItems( [...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10 ) + 1
            }
        ])
    }

    useEffect(() => {
        window.addEventListener('mouseover', () => { });

        return () => {
            window.addEventListener('mousemove', () => {

            })
        }
    }, [])

    return (
        <ul>
            <button onClick={addItems}>Click me</button>
            {items.map(item => (
                <li key={item.id}>{ item.value }</li>
            ))}
        </ul>
    )
}