"use client";

import "./cardGroup.css";
import Link from "next/link";

type grupoProps = {
    id: string,
    nome: string,
    codigo: string,
}

export function CardGroup({ id, nome, codigo }: grupoProps) {
    return (
        <Link href={`/painel/midias/${id}`}>
            <div className="cardGroup">
                <h4>{nome}</h4>
                <p>Fotos: 0</p>
                <span className="codeGroup">{codigo}</span>
            </div>
        </Link>
    );
}
