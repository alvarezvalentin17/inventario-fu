import { collection, doc, getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import db from "../../services/firestore";
import Header from "../header/Header";
import Table from "../table/table";
import Modal from "../../common/modal/modal";
import styled from 'styled-components'
import './index.css'

function Index() {
    const [items, setItems] = useState([])

    useEffect(() => { 
       getDocs(collection(db, "items"))
        .then((datos)=>{
            setItems(datos.docs.map((e)=>({id:e.id,...e.data()})))
        })       
        console.log(items)
    }, [1])


  return (
    <>
        <Header />
        <Table items={items}/>
    </>
  )
}

export default Index

