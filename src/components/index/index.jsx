import { collection, doc, getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import db from "../../services/firestore";
import Header from "../header/Header";
import Table from "../table/table";
import './index.css'

function Index() {
    const [items, setItems] = useState([])

    useEffect(() => { 
       getDocs(collection(db, "items"))
        .then((datos)=>{
            setItems(datos.docs.map((e)=>({id:e.id,...e.data()})))
        })       
    }, [items])


  return (
    <>
        <Header />
        <Table items={items}/>
    </>
  )
}

export default Index

