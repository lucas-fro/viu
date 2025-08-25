"use client";

import "./cardGroup.css";
import Link from "next/link";

export function CardGroup() {
    return (
        <Link href="/painel/midias/1">
        <div className="cardGroup">
            <h4>Nome do Grupo</h4>
            <p>Fotos: 12</p>
            <span className="codeGroup">36715</span>
        </div>
        </Link>
    );
}