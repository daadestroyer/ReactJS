import React, { useState } from 'react'
import "./style.css"
import Menu from "./MenuAPI.js"
import MenuCard from "./MenuCard"
import NavBar  from './NavBar'

const unique = [
    ...new Set(Menu.map((currEle) => {
    return currEle.category;
}))]

const Restraunt = () => {

    const [menuData, setMenuData] = useState(Menu);
    
    const filterItem = (category) => {
        const updatedList = Menu.filter((currEle) => {
            return currEle.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            <NavBar filterItem={filterItem}/>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restraunt