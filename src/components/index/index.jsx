import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import Dropdown from "../../common/Dropdown/Dropdown";
import db from "../../services/firestore";
import Header from "../header/Header";
import Table from "../table/Table";
import './Index.css'

function Index() {

  const [items, setItems] = useState([])
  const [select, setSelect] = useState()

  const collections = collection(db, "items");
  const q = query(collections, orderBy('user', 'asc'))  
  const plantA = query(collections, where("plant","==","A"))
  const plantB = query(collections, where("plant","==","B"))
  const plantC = query(collections, where("plant","==","C"))


    
  const assignValue = ()=> {
    setSelect(document.getElementById('select').value)
    console.log(select)
}
  
  useEffect(() => { 


      const query = ()=> {
        if (select === 'A'){
          return plantA;

        }else if(select === 'B'){
          return plantB;
        }

        else if(select === 'C'){
          return plantC;
        }

        else {
          return q;
        }
        
      }
      
       getDocs(query())
        .then((datos)=>{
            setItems(datos.docs.map((e)=>({id:e.id,...e.data()})))
        })       
    }, [items])


  return (
    <>
        <Header />
        <Dropdown assignValue={assignValue}/>
        <Table items={items} />

    </>
  )
}

export default Index

