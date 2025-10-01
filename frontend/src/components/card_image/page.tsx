import "./cardImage.css";
import Image from "next/image";
import { Trash2 } from 'lucide-react';

type cardImageProps = {
    id: string,
    url: string,
    nome?: string,
    grupoId?: string,
}

export function CardImage({ id, url, nome, grupoId }: cardImageProps) {
    return (
        <div className="cardImage">
            <button className="iconDelete"><Trash2 className="" size={15} /></button>
            
            <Image src={url} alt="Imagem" width={230} height={200} className="image" id={id}/>
        </div>
    );
}