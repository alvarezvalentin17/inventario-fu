import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import db from "../../services/firestore";
import Header from "../header/Header";
import Table from "../table/Table";
import './Index.css'

function Index() {

  const [items, setItems] = useState([])

    useEffect(() => { 
      const collections = collection(db, "items");
      const q = query(collections, orderBy('user', 'asc'))  
      const que = query(collections, where("plant","==","C"))
      
       getDocs(que)
        .then((datos)=>{
            setItems(datos.docs.map((e)=>({id:e.id,...e.data()})))
        })       
    }, [items])


  return (
    <>
        <Header />
        <Table items={items} />

    </>
  )
}

export default Index

