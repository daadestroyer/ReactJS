import React from 'react'

const NavBar = ({ filterItem, menuData }) => {
    return (
        <div>
            <nav className='navbar'>
                <div className='btn btn-group'>
                    {menuData.map((curElem) => {
                        return (
                            <button
                                className="btn-group__item"
                                onClick={() => filterItem(curElem)}>
                                {curElem}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </div>
    )
}

export default NavBar