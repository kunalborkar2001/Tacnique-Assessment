import React from 'react'
import FormModel from './FormModel'
const Navbar = ({handleAdd}) => {
    return (
        <nav className='h-[10vh] w-full flex items-center justify-around'>
            <p>Tacnique</p>
            {<FormModel add 
            onAdd={handleAdd}
            />}
        </nav>
    )
}

export default Navbar