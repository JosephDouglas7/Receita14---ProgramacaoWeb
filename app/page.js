//Feito a correção de erros com a ajuda do: https://copilot.microsoft.com/

export function MariaPrea() {
    return (
        <div style={{ padding: "10px", border: "1px solid #ddd" }}>
            <h2>Morreu Maria Preá...</h2>
        </div>
    );
}

export function OutroComponente() {
    return (
        <div style={{ padding: "10px", border: "1px solid #ddd" }}>
            <h2>Outro Componente</h2>
            <p>Esse é outro componente reutilizável dentro da aplicação.</p>
        </div>
    );
}

import { MariaPrea, OutroComponente } from "../componentes";

export default function NovaRotaHome() {
    return (
        <div>
            <h1>Nova Rota, Nova Página</h1>
            <MariaPrea />
            <OutroComponente />
            <nav>
                <ul>
                    <li><a href="/novarota/subrotas/rotaA">Rota A</a></li>
                    <li><a href="/novarota/subrotas/rotaB">Rota B</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default function NovaRotaLayout({ children }) {
    return (
        <div style={{ padding: "20px", border: "2px solid #222" }}>
            <header>
                <h1>Nova Rota - Layout Exclusivo</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default function RotaA() {
    return (
        <div>
            <h2>Bem-vindo à Rota A</h2>
            <p>Esta é uma página dentro da sub-rota "Rota A".</p>
        </div>
    );
}

export default function RotaB() {
    return (
        <div>
            <h2>Bem-vindo à Rota B</h2>
            <p>Esta é uma página dentro da sub-rota "Rota B".</p>
        </div>
    );
}
