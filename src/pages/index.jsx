import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" />
            <Navegador texto="JSX" destino="/jsx" cor="crimson" />
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
            <Navegador texto="Navegação #02" destino="/navegacao" cor="red" />
            <Navegador texto="cliente" destino="/cliente" cor="red" />
            <Navegador texto="buscar codigo" destino="/cliente/123" cor="cyan" />
            <Navegador texto="operador" destino="/operador" cor="blue" />
            <Navegador texto="Estado" destino="/estado" cor="red" />


        </div>

    )
}
