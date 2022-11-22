import React from 'react'

const MenuCard = ({ menuData }) => {
    console.log(menuData);
    return (

        <div style={{margin:10}}>
        <section className="main-card--cointainer">
            {menuData.map((currElem) => {
                return (
                    <>
                        <div className='card-container'>
                            <div className='card'>
                                <div className='card-body'>
                                    <span className='card-number card-circle subtle'>{currElem.id}</span>
                                    <span className='card-author subtle'>{currElem.category}</span>
                                    <h2 className='card-title'>{currElem.name}</h2>
                                    <span className='card-description sublte'>
                                        {currElem.description}
                                    </span>
                                    <div className='card-read'>Read</div>
                                </div>
                                {/* <img src={image} alt="images" className='card-media'/> */}
                                <span className='card-tag' sublte>Order Now</span>
                            </div>
                        </div>
                    </>
                );
            })}
            </section>
        </div>
    )
}

export default MenuCard