import React from 'react';
import style from './Botao.module.scss';

interface Props {
  type?: "button" | "submit" | "reset" | undefined
  texto?: string
  onClick?: () => void
}
function Botao({ type, texto, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style.botao}
    >
      {texto}
    </button>
  )
}

// class Botao1 extends React.Component<{
//   type?: "button" | "submit" | "reset" | undefined
//   texto: string
//   onClick?: () => void
// }> {
//   render() {
//     const { type = "button", onClick } = this.props;
//     return (
//       <button onClick={onClick} type={type} className={style.botao}>
//         {this.props.texto}
//       </button>
//     )
//   }
// }

export default Botao;