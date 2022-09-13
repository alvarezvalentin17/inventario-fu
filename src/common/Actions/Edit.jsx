import React from 'react'
import { useState } from 'react'
// import { doc, updateDoc } from 'firebase/firestore'
import db from '../../services/firestore'
import Modal from '../Modal/Modal'
import Table from '../../components/table/table'

function Edit({items,id, name_pc}) {

    const [user1, setUser] = useState()
    const [name_pc1, setName_pc] = useState()
    const [mark1, setMark] = useState()
    const [model1, setModel] = useState()
    const [processor1, setProcessor] = useState()
    const [memory_ram1, setMemory_Ram] = useState()
    const [price1, setPrice] = useState()
    const [so1, setSO] = useState()
    const [type1, setType] = useState()
    const [plant1, setPlant] = useState()
    const [section1, setSection] = useState()
    const [typeofdisk1, setTypeOfDisk] = useState()
  
        // document.f1.user1.value = 30
        // document.getElementById('user1').value = 56;
        // document.getElementById('name_pc1').value =
        // document.getElementById('mark1').value =
        // document.getElementById('model1').value = 
        // document.getElementById('processor1').value
        // document.getElementById('memory_ram1').value
        // document.getElementById('price1').value
        // document.getElementById('so1').value
        // document.getElementById('type1').value
        // document.getElementById('plant1').value
        // document.getElementById('section1').value
        // document.getElementById('typeofdisk1').value
 

    const saveInputs = () => {
      let user = document.getElementById('user1').value;
      let name_pc = document.getElementById('name_pc1').value;
      let mark = document.getElementById('mark1').value;
      let model = document.getElementById('model1').value;
      let processor = document.getElementById('processor1').value;
      let memory_ram = document.getElementById('memory_ram1').value;
      let price = document.getElementById('price1').value;
      let so = document.getElementById('so1').value;
      let type = document.getElementById('type1').value;
      let plant = document.getElementById('plant1').value;
      let section = document.getElementById('section1').value;
      let typeofdisk = document.getElementById('typeofdisk1').value;
  
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


  
    const updateData = async () => {

    //     await updateDoc(doc(db, "items", e.id,{
    //             user: user1,
    //             name_pc: name_pc1,
    //             mark: mark1,
    //             model: model1,
    //             processor: processor1,
    //             memory_ram: memory_ram1,
    //             price: price1,
    //             so: so1,
    //             type: type1,
    //             plant: plant1,
    //             section:section1,
    //             typeofdisk: typeofdisk1,
    //             }))
              }
    

    return (
      <>
         <Modal
          icon='edit'
          state='#update'
          stateid='update'
          title={`Editar`}
          btn_p='Guardar'
          btn_s='Cancelar'
          classbtn='btn '
          success={updateData}
        >
            <form action="" name='f1' id='f1'>

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
                          <input onChange={saveInputs} autoComplete='off' id='memory_ram' type="text" class="form-control" placeholder="RAM" aria-label="RAM" />
                        </div>
                        <div class="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='typeofdisk' type="text" class="form-control" placeholder="Tipo de Disco" aria-label="Modelo" />
                          <input onChange={saveInputs} autoComplete='off' id='price' type="text" class="form-control" placeholder="Precio" aria-label="Precio" />
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
            </form>
            </Modal>
      </>
  )
}

export default Edit