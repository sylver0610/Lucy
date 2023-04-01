import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Invoices = () => {
  const invoiceList = [
    {
      id:1,
      name:'Google'
    },
    {
      id:2,
      name: 'Apple'
    }
  ]
  return (
    <main>
      <h2>Invoices</h2>
        <div style={{display:'flex'}}>
          <nav style={{padding:'1rem',borderRight:'1px solid'}}>
          {invoiceList.map((item,index)=>{            
            return(
              <Link to={`${item.id}`} key={index} style={{display:'block', margin:'1rem'}}>
                {item.name}               
              </Link>
            )      
          })}
          </nav>
          <Outlet/>
        </div>
    </main>   
    
  )
}

export default Invoices