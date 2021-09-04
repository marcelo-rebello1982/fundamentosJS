import Layout from "../../components/Layout";
import { useRouter } from "next/router"

export default function BuscarClientePorCodigo() {

  const router = useRouter()

  return (
    <Layout titulo="Buscar Cliente por código">
      <span>Código :{router.query.codigo}</span>
    </Layout>
  )
}