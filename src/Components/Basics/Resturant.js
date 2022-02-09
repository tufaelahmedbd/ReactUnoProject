import React,{useState} from 'react';
import "./Style.css";
import Menu from "./MenuApi.js"
import MenuCard from "./MenuCard"
import Navbar from "./Navbar"

const uniqueList=[
  ...new Set(Menu.map((curElm)=>{
    return curElm.category;
  })
  ),"All",
]

const Resturant=()=>{

  const [menuData,setMenuData]=useState(Menu);
  const [menuList,setMentList]=useState(uniqueList);


  const filterItem=(category)=>{
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updatedItems=Menu.filter((curElm)=>{
      return curElm.category===category
    });
    setMenuData(updatedItems);
  }

  return(
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/> 
    </>
  )
}
export default Resturant;