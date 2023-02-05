import { useState, useEffect } from 'react'
import Botao from '../Botao'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utils/date'
import { ITarefa } from '../../types/tarefa'

interface Props {
    selecionado: ITarefa | undefined
}
export default function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            TEMPO: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto='Começar' />
        </div>
    )
}
