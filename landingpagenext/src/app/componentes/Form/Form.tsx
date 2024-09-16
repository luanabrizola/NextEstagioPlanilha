"use client";

import styles from "./Form.module.css"
import React, { useState } from "react";

export default function Form() {

    return (
        <div className={styles.Form}>
            <div className={styles.formText}>
                <h2>Receba a planilha por e-mail</h2>
                <p>preencha seus dados para receber o material</p>
            </div>
            <form className={styles.formulario}>
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    required
                />
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    required
                />
                <label htmlFor="">Você possui empresa?</label>
                <input
                    type="text"
                    required
                />
                <label htmlFor="">Qual o setor da sua empresa?</label>
                <input
                    type="text"
                    required
                />
                <label htmlFor="">Quantas pessoas tem na sua empresa?</label>
                <input
                    type="number"
                    required
                />
                <button className={styles.botao}>Receber o material</button>
            </form>

        </div>
    )
}
