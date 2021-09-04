import Link from "next/link"
import navegador_styles from '../styles/Navegador.module.css'

export default function Navegador(props) {
  return (
    <Link href={props.destino}>
      <div className={navegador_styles.navegador} style={{ backgroundColor: props.cor ?? 'dodgerblue' }}>
        {props.texto}
      </div>
    </Link >
  )
}