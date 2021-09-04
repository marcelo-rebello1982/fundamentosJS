import Layout from '../../components/Layout';
import Cabecalho from "../../components/Cabecalho";

export default function Exemplo() {
  return (

    <Layout titulo="Exemplo de CSS Modularizado #">
      <Cabecalho nome="Marcelo Paulo Rebello Martins" idade={39} sexo="M" casado={true} />
      <Cabecalho nome="Patricia Cinti Ramos Martins" idade={39} sexo="F" casado={true} />
      <Cabecalho nome="Davi Augusto Cinti Ramos Martins" idade={6} sexo="M" casado={false} />
    </Layout>
  )
}