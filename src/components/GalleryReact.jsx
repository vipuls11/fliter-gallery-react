import React, { useState } from 'react';
import Menu from "./menu/menu";
import './GalleryReact.css'

const GalleryReact = () => {
    const [items, setItems] = useState(Menu)
    const [selectedCategory, setSelectedCategory] = useState("All");
    // console.log(Menu)
    console.log(selectedCategory,"dfgiun")

const filterItem =(catelem)=>{
    if (catelem === "All") {
        setItems(Menu);
    }else{
        const updateItem = Menu.filter((curElem)=>{
            return curElem.category === catelem;
        });   
        setItems(updateItem)
    }
    setSelectedCategory(catelem)

}

  return (
    <>
    <div>
        <h1 className='text-center py-3 fw-bold'>Order Your Favourite Dish</h1>
        <hr />
        <div className='d-flex justify-content-around'>
            <button className={`btn btn-warning ${selectedCategory === "breakfast" ? "active" : ""}`} onClick={()=>filterItem("breakfast")}>BreakFast</button>
            <button  className={`btn btn-warning ${selectedCategory === "launch" ? "active" : ""}`} onClick={()=>filterItem("launch")}>lunch</button>
            <button  className={`btn btn-warning ${selectedCategory === "evening breakfast" ? "active" : ""}`} onClick={()=>filterItem("evening breakfast")}>Evening</button>
            <button  className={`btn btn-warning ${selectedCategory === "dinner" ? "active" : ""}`}onClick={()=>filterItem("dinner")}>Dinner</button>
            <button className={`btn btn-warning ${selectedCategory === "All" ? "active" : ""}`} onClick={()=>filterItem("All")}>All</button>
        </div>

        <div className=' my-5 container-fluid'> 
            <div className='row g-4 '>
                {
                    items.map((curelem)=>{
                        const{id, name,  image, category, price, description} = curelem
                            return(
                                <div  className='col-lg-4 col-md-6 d-flex justify-content-center '>
                                <div className='d-flex shadow p-3 mb-5 bg-body rounded border' key={id} >
                                <div className='w-25 h-75 overflow-hidden shadow'><img src={image} alt="Image"  className='d-block w-100 rounded shadow'/></div>
                                <div className='px-3'>
                                    <h2 className='text-secondary'>{name}</h2>
                                    <p>{category}</p>
                                    <div className='Order d-flex align-items-center justify-content-between'>
                                        <p><b>Price: </b><span className='text-success'>&#8377; {price}</span></p>
                                        <button className='Orderbtn bg-success bg-gradient text-white border px-2 py-1 rounded'>Order Now</button>
                                    </div>
                                    <p className='my-3'><span>*</span>{description   }</p>
                                </div>
                                </div>
                            </div>
                            )
                    })
                }
           
            </div>
        </div>
    </div>
    </>
  )
}

export default GalleryReact