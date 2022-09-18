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
  const [selectPlant, setSelectPlant] = useState()
  const [selectType, setSelectType] = useState()

  const collections = collection(db, "items");
  const q = query(collections, orderBy('user', 'asc'))  
  const plantA = query(collections, where("plant","==","A"))
  const plantB = query(collections, where("plant","==","B"))
  const plantC = query(collections, where("plant","==","C"))
  const notebook = query(collections, where("type","==","Notebook"))
  const torre = query(collections, where("type","==","Torre"))


    
  const assignValuePlant = ()=> {
    setSelectPlant(document.getElementById('selectPlant').value)
    console.log(selectPlant)
}
  const assignValueType = ()=> {
    setSelectType(document.getElementById('selectType').value)
    console.log(selectType)
}
  useEffect(() => { 


      const query = ()=> {
        if (selectPlant === 'A'){
          return plantA;

        }else if(selectPlant === 'B'){
          return plantB;
        }

        else if(selectPlant === 'C'){
          return plantC;
        }

        else if(selectType === 'Notebook'){
          return notebook;
        }
        else if(selectType === 'Torre'){
          return torre;
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
        <Dropdown assignValuePlant={assignValuePlant} assignValueType={assignValueType}/>
        <Table items={items} />

    </>
  )
}

export default Index

