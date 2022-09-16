import React from 'react'
import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import db from '../../services/firestore'
import Modal from '../modal/Modal'

function Edit({id,user }) {
  
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

    function cleanInputs() {
      document.getElementById('user1').value = ''
      document.getElementById('name_pc1').value = ''
      document.getElementById('mark1').value = ''
      document.getElementById('model1').value = ''
      document.getElementById('processor1').value = ''
      document.getElementById('memory_ram1').value = ''
      document.getElementById('price1').value = ''
      document.getElementById('so1').value = ''
      document.getElementById('type1').value = ''
      document.getElementById('plant1').value = ''
      document.getElementById('section1').value = ''
      document.getElementById('typeofdisk1').value = ''
      
      
    }
    const updateData = async () => {
      const docRef = doc(db, "items", id)
        await updateDoc( docRef,{
                user: user1,
                name_pc: name_pc1,
                mark: mark1,
                model: model1,
                processor: processor1,
                memory_ram: memory_ram1,
                price: price1,
                so: so1,
                type: type1,
                plant: plant1,
                section:section1,
                typeofdisk: typeofdisk1,
                })
              }

    function loadInputs() {
      document.getElementById('user1').value = user
      document.getElementById('name_pc1').value = ''
      document.getElementById('mark1').value = ''
      document.getElementById('model1').value = ''
      document.getElementById('processor1').value = ''
      document.getElementById('memory_ram1').value = ''
      document.getElementById('price1').value = ''
      document.getElementById('so1').value = ''
      document.getElementById('type1').value = ''
      document.getElementById('plant1').value = ''
      document.getElementById('section1').value = ''
      document.getElementById('typeofdisk1').value = ''

  }

 

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
  
    

    return (
      <>
         <Modal
          icon='edit'
          state='#edit'
          stateid='edit'
          title={`Editar`}
          btn_p='Guardar'
          btn_s='Cancelar'
          classbtn='btn'
          success={updateData}
          starFunction={loadInputs}
        >
                      <div className='container'>
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='user1' type="text" className="form-control" placeholder="Usuario" aria-label="Usuario" />
                          <input onChange={saveInputs} autoComplete='off' id='name_pc1' type="text" className="form-control" placeholder="Nombre PC" aria-label="Nombre PC" />
                        </div>
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='mark1' type="text" className="form-control" placeholder="Marca" aria-label="Marca" />
                          <input onChange={saveInputs} autoComplete='off' id='model1' type="text" className="form-control" placeholder="Modelo" aria-label="Modelo" />
                        </div>
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='processor1' type="text" className="form-control" placeholder="Procesador" aria-label="Procesador" />
                          <input onChange={saveInputs} autoComplete='off' id='memory_ram1' type="number" className="form-control" placeholder="RAM" aria-label="RAM" />
                        </div>
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='typeofdisk1' type="text" className="form-control" placeholder="Tipo de Disco" aria-label="Modelo" />
                          <input onChange={saveInputs} autoComplete='off' id='price1' type="number" className="form-control" placeholder="Precio" aria-label="Precio" />
                        </div>
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off'id='so1' type="text" className="form-control" placeholder="Sistema Operativo" aria-label="Sistema Operativo" />
                          <input onChange={saveInputs} autoComplete='off' id='type1' type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" />
                        </div>
                        <div className="input-group mb-3">
                          <input onChange={saveInputs} autoComplete='off' id='plant1' type="text" className="form-control" placeholder="Planta" aria-label="Planta" />
                          <input onChange={saveInputs} autoComplete='off' id='section1' type="text" className="form-control" placeholder="Sector" aria-label="Sector" />
                        </div>
                      </div>
            </Modal>
      </>
  )
}

export default Edit