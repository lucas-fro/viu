"use client";

import "./cardGroup.css";
import Link from "next/link";

type grupoProps = {
    key: string,
    nome: string,
    codigo: string,
}

export function CardGroup({ key, nome, codigo }: grupoProps) {
    return (
        <Link href={`/painel/midias/${key}`}>
            <div key={key} className="cardGroup">
                <h4>{nome}</h4>
                <p>Fotos: 0</p>
                <span className="codeGroup">{codigo}</span>
            </div>
        </Link>
    );
}
