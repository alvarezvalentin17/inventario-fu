import React from 'react'

function Table(items) {
console.log(items)
  return (
    <>
        <table className="table caption-top">
          <caption>List of users</caption>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>        
                {}
            </tbody>
        </table>
    </>
  )
}

export default Table

// {user,name_pc,mark,model,memory_ram,processor,display,type,so,price,serial}