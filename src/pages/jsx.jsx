import Layout from "../components/Layout"

export default function Jsx() {

    const titulo = <h1>JSX é um Conceito Central</h1>

    function subtitulo() {
        return <h2>{"muito.legal".toUpperCase}</h2>
    }


    return (
        <Layout titulo="Entendendo o JXS">

            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({ nome: "João", idade: 30 })}
                </p>

            </div>
        </Layout>
    )
}