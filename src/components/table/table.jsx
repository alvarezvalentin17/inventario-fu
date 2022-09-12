import React, {useState} from 'react';
import { doc, deleteDoc, updateDoc,  } from "firebase/firestore";
import {db} from '../../services/firestore'
import './table.css';
import New from '../../common/Actions/New';
import Edit from '../../common/Actions/Edit';
import Swal from 'sweetalert2';
import Modal from '../../common/Modal/Modal';

function Table({items}) {

  
  


  return (
    <>
    <div className='container'>
                  <New />
        <table className="table mt-5">
            <thead>
                <tr>
                  <th scope="col">Usuario</th>
                  <th scope="col">Nombre de PC</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Procesador</th>
                  <th scope="col">RAM</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Sistema Operativo</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Planta</th>
                  <th scope="col">Sección</th>
                  <th scope="col">Disco</th>
                  <th scope="col">Acciones</th>
                </tr>
            </thead>

            <tbody>      
              {items.map((e)=>(
               <tr>
                  <td>{e.user}</td>
                  <td>{e.name_pc}</td>
                  <td>{e.mark}</td>
                  <td>{e.processor}</td>
                  <td>{e.memory_ram} GB</td>
                  <td>U$S {e.price}</td>
                  <td>{e.so}</td>
                  <td>{e.type}</td>
                  <td>{e.plant}</td>
                  <td>{e.section}</td>
                  <td>{e.typeofdisk}</td>
                  <td>
                      <Edit
                        id={e.id}
                        name_pc= {e.name_pc}
                        items={items}
                      >

                      </Edit>
                    <span className='material-symbols-outlined btn' onClick={()=>{
                        Swal.fire({
                          title: `¿Desea borrar ${e.id}?`,
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          cancelButtonText: 'Cancelar',
                          confirmButtonText: 'Borrar'
                        }).then(async (result) => {
                          
                          if (result.isConfirmed) {
                            try {
                              await deleteDoc(doc(db, "items", e.id));
                            } catch (error) {
                              console.log(error)
                            }

                            Swal.fire(
                              'Borrado!',
                              'El item fue borrado!',
                              'success'
                            )
                          }
                        })
                    }}>delete</span>
                  </td>
               </tr> 
              ))}  
                
            </tbody>
        </table>

    </div>

    </>
  )
}

export default Table
