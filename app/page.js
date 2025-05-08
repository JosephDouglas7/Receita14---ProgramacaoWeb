//Feito a correção de erros com a ajuda do: https://copilot.microsoft.com/

export function MariaPrea({ mensagem }) {
    return (
        <div style={{ padding: "10px", border: "1px solid #ddd" }}>
            <h2>{mensagem}</h2>
        </div>
    );
}

import { MariaPrea } from "../componentes";

export default function NovaRotaHome() {
    return (
        <div>
            <h1>Nova Rota, Nova Página</h1>
            <MariaPrea mensagem="Morreu Maria Preá..." />
            <MariaPrea mensagem="Maria Preá está viva!" />
            <MariaPrea mensagem="Maria Preá sumiu na noite!" />
        </div>
    );
}
