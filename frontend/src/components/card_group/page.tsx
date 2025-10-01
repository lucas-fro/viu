"use client";

import "./cardGroup.css";
import Link from "next/link";

type grupoProps = {
    id: string,
    nome: string,
    codigo: string,
    quantidadeImg: number,
}

export function CardGroup({ id, nome, codigo, quantidadeImg }: grupoProps) {
    return (
        <Link href={`/painel/midias/${id}`}>
            <div className="cardGroup">
                <h4>{nome}</h4>
                <p>{quantidadeImg}</p>
                <span className="codeGroup">{codigo}</span>
            </div>
        </Link>
    );
}
