import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import React from "react";
import { useState } from "react";
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
  // const q = query(collections, orderBy('user', 'asc'))  
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

const q = query(collection(db, "items"), orderBy('user', 'asc'));

const querys = ()=> {
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
  const data = onSnapshot(querys(), (querySnapshot) => {
    const computers = [];
    querySnapshot.forEach((doc) => {
      computers.push({id:doc.id,...doc.data()});
    });
    setItems(computers)
  });


  return (
    <>
        <Header />
        <Dropdown assignValuePlant={assignValuePlant} assignValueType={assignValueType}/>
        <Table items={items} />

    </>
  )
}

export default Index

