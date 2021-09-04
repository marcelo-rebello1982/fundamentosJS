import styles from '../styles/Styles.module.css'
import Layout from '../components/Layout'

export default function Estiloso() {
  return (
    <Layout titulo="Exemplo de CSS Modularizado">
      <div className= {styles.azul}>
     <h1> Estilo usando CSS Modulos</h1>
     </div>
    </Layout>
     )
 }