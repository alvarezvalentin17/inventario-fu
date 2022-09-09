import { collection, doc, getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import db from "../../services/firestore";
import Table from "../table/table";
import './index.css'

function Index() {

    const [items, setItems] = useState([])

    useEffect(() => {
      const collections = collection(db, "items")
      getDocs(collections)
        .then((data)=>{
            setItems(data.docs.map((e)=>({id: e.id, ...e.data()})))
        })

    }, [items])

  return (
    <>
        <Table  items={items}/>
    </>
  )
}

export default Index

{/* <Table 
user={items.user}
name_pc={items.name_pc}
mark={items.mark}
model={items.model}
memory_ram={items.memory_ram}
processor={items.processor}
display={items.display}
type={items.type}
so={items.so}
price={items.price}
serial={items.serial}
/> */}