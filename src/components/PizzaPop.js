import React from 'react'

const PizzaPop = (pizza) => {

    const [qty, setQty] = React.useState(1);
    const [size, setSize] = React.useState(pizza.size[0].items.map((item, idx) => idx !== pizza.size[0].items.length - 1 ? { size: item.size, selected: false } : { size: item.size, selected: true }))
    const [toppings, setToppings] = React.useState(pizza.toppings[0].items.map((item, idx) => ({ name: item.name, selected: false })))

    console.log(pizza.size[0].title)

    return (
        <div >
            hi
        </div >
    )
}

export default PizzaPop