import Layout from '../components/Layout';
import Cabecalho from "../components/Cabecalho";

export default function Exemplo() {
  return (

    <Layout titulo="Exemplo de CSS Modularizado">
      <Cabecalho nome="Marcelo Paulo Rebello Martins" idade={39} masculino={true} />
      <Cabecalho nome="Patricia Cinti Ramos Martins" idade={39} masculino={true} />
      <Cabecalho nome="Davi Augusto Cinti Ramos Martins" idade={6} masculino={true} />
    </Layout>
  )
}