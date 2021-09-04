import { useState } from 'react';
import Layout from "../components/Layout";

export default function Estado() {

  const [number, setNumber] = useState(0) // react hooks

  function increment() {
    setNumber(number + 1)
  }

  return (

    <Layout title="State of Component" >
      <div>{number}</div>
      <button onClick={increment}>Increment</button>
    </Layout>
  )
}