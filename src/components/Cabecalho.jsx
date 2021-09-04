
export default function Cabecalho(props) {

  return (
    <header>
      <h1>{props.nome} {props.idade} {props.sexo} {props.casado}</h1>
    </header>
  )
}