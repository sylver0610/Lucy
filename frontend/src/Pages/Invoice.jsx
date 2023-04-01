import React from 'react'
import { useParams } from 'react-router-dom'

const Invoice = () => {
    const params = useParams();
    const invoiceId = params.invoiceId;
    console.log(invoiceId);
  return (
    <h3>{invoiceId}</h3>
  )
}

export default Invoice