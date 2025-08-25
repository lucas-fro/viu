"use client";
import React, { useState } from "react";
import { Images } from 'lucide-react';
import { PopUp } from '@/components/popUp/page'


export function ButtonNovoGrupo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <button className='button-p flex items-center gap-5'  onClick={() => setIsOpen(true)}>
            <Images size={20} />
            Novo Grupo
        </button>

        <PopUp isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <form action="">
                <div className="input-group">
                    <label htmlFor="">Nome do Grupo:</label>
                    <input type="text" className="inputs" />
                </div>
                <button className="button-p w-[300px]">Criar novo grupo</button>
            </form>
        </PopUp>
        </>
    );
}