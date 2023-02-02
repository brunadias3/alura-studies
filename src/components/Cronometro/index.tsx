import React from 'react'
import Botao from '../Botao'
import Relogio from './Relogio'

export default function Cronometro() {
    return (
        <div>
            <p>Escolha um card e inicie o cronômetro</p>
            
            <div>
                <Relogio />
            </div>
            
            <Botao texto='Começar' />
       
        </div>
    )
}
