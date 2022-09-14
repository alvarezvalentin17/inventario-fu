import React from 'react'
import { useState } from 'react';
import db from '../../services/firestore';
import { addDoc, collection } from 'firebase/firestore';
import Modal from '../Modal/Modal';
import { useEffect } from 'react';

function New() {

  const [user, setUser] = useState()
  const [name_pc, setName_pc] = useState()
  const [mark, setMark] = useState()
  const [model, setModel] = useState()
  const [processor, setProcessor] = useState()
  const [memory_ram, setMemory_Ram] = useState()
  const [price, setPrice] = useState()
  const [so, setSO] = useState()
  const [type, setType] = useState()
  const [plant, setPlant] = useState()
  const [section, setSection] = useState()
  const [typeofdisk, setTypeOfDisk] = useState()

  const cleanInputs= ()=> {
    document.getElementById('user').value = '';
    document.getElementById('name_pc').value = '';
    document.getElementById('mark').value = '';
    document.getElementById('model').value = '';
    document.getElementById('processor').value = '';
    document.getElementById('memory_ram').value = '';
    document.getElementById('price').value = '';
    document.getElementById('so').value = '';
    document.getElementById('type').value = '';
    document.getElementById('plant').value = '';
    document.getElementById('section').value = '';
    document.getElementById('typeofdisk').value = '';
    
}

  const saveInputs = () => {
    let user = document.getElementById('user').value;
    let name_pc = document.getElementById('name_pc').value;
    let mark = document.getElementById('mark').value;
    let model = document.getElementById('model').value;
    let processor = document.getElementById('processor').value;
    let memory_ram = document.getElementById('memory_ram').value;
    let price = document.getElementById('price').value;
    let so = document.getElementById('so').value;
    let type = document.getElementById('type').value;
    let plant = document.getElementById('plant').value;
    let section = document.getElementById('section').value;
    let typeofdisk = document.getElementById('typeofdisk').value;

    setUser(user)
    setName_pc(name_pc)
    setMark(mark)
    setModel(model)
    setProcessor(processor)
    setMemory_Ram(memory_ram)
    setPrice(price)
    setSO(so)
    setType(type)
    setPlant(plant)
    setSection(section)
    setTypeOfDisk(typeofdisk)
  }

  const saveData = async () => {
    const docRef = await addDoc(collection(db, "items"), {
      user: user,
      name_pc: name_pc,
      mark: mark,
      processor: processor,
      model: model,
      memory_ram: Number(memory_ram),
      price: Number(price),
      so: so,
      type: type,
      plant: plant,
      section:section,
      typeofdisk: typeofdisk,
    });

  }

  return (
    <>
        <Modal
          icon='add_circle'
          state='#new'
          stateid='new'
          title={`Nuevo`}
          btn_p='Guardar'
          btn_s='Cancelar'
          classbtn='btn mt-2 end'
          success={saveData}
          starFunction={cleanInputs}
        >
                      <div className='container'>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='user' type="text" class="form-control" placeholder="Usuario" aria-label="Usuario" />
                          <input onChange={saveInputs} autoComplete='off' id='name_pc' type="text" class="form-control" placeholder="Nombre PC" aria-label="Nombre PC" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='mark' type="text" class="form-control" placeholder="Marca" aria-label="Marca" />
                          <input onChange={saveInputs} autoComplete='off' id='model' type="text" class="form-control" placeholder="Modelo" aria-label="Modelo" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='processor' type="text" class="form-control" placeholder="Procesador" aria-label="Procesador" />
                          <input onChange={saveInputs} autoComplete='off' id='memory_ram' type="number" class="form-control" placeholder="RAM" aria-label="RAM" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='typeofdisk' type="text" class="form-control" placeholder="Tipo de Disco" aria-label="Modelo" />
                          <input onChange={saveInputs} autoComplete='off' id='price' type="number" class="form-control" placeholder="Precio" aria-label="Precio" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off'id='so' type="text" class="form-control" placeholder="Sistema Operativo" aria-label="Sistema Operativo" />
                          <input onChange={saveInputs} autoComplete='off' id='type' type="text" class="form-control" placeholder="Tipo" aria-label="Tipo" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='plant' type="text" class="form-control" placeholder="Planta" aria-label="Planta" />
                          <input onChange={saveInputs} autoComplete='off' id='section' type="text" class="form-control" placeholder="Sector" aria-label="Sector" />
                        </div>
                      </div>
            </Modal>
    </>
  )
}

export default New