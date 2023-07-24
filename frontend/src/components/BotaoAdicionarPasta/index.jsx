import './style.css'

export const BotaoAdicionarPasta = (props) =>
{
    return <button onClick={props.funcao} className="botaoAdicionar">+</button>
}