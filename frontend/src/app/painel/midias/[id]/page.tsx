"use client";

import { Divisor } from "@/components/sidebar/page";
import "../../midias/midias.css";
import { ArrowDownToLine } from "lucide-react";
import "./infoMidias.css";
import { CardImage } from "@/components/card_image/page";
import { InfoGroup } from "@/components/formConfigGroup/page";
import { usePathname } from "next/navigation";
import { useState } from "react";
import api from "@/utils/axios";

export default function MidiaGrupo() {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  const [loading, setLoading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const grupoId: string = lastSegment ?? ""; // garante string
    if (!grupoId) {
      alert("ID do grupo inválido");
      return;
    }

    const form = new FormData();
    form.append("file", file);
    console.log("grupoId", grupoId);
    form.append("grupoId", grupoId);
    console.log("file", file);
    console.log("form", form.get("file"), form.get("grupoId"));

    setLoading(true);
    try {
      const res = await api.post("/midias", form);
      console.log("Upload feito:", res.data);
      alert("Imagem salva: " + res.data.url);
    } catch (err) {
      console.error(err);
      alert("Erro no upload");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mainPrincipal">
      <div className="topPage">
        <div className="infoCodeGroup">
          <span>54879</span>
        </div>

        <InfoGroup />

        <label htmlFor="arquivo" className="novaMidia">
          <ArrowDownToLine />
          {loading ? "Enviando..." : "Adicionar arquivo"}
          <input
            type="file"
            name="arquivo"
            id="arquivo"
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </div>

      <Divisor />

      <div className="cardsGroups">
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
      </div>
    </main>
  );
}
