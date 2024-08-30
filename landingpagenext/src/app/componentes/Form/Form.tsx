"use client";

import styles from "./Form.module.css"
import React, { useState } from "react";

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [businessSector, setBusinessSector] = useState('');
    const [employees, setEmployees] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, companyType, businessSector, employees });
    };


    return (
        <div className={styles.Form}>
            <div className={styles.formText}>
                <h2>Receba a planilha por e-mail</h2>
                <p>preencha seus dados para receber o material</p>
            </div>
            <form className={styles.formulario} onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="">Você possui empresa?</label>
                <input
                    type="text"
                    value={companyType}
                    onChange={(e) => setCompanyType(e.target.value)}
                    required
                />
                <label htmlFor="">Qual o setor da sua empresa?</label>
                <input
                    type="text"
                    value={businessSector}
                    onChange={(e) => setBusinessSector(e.target.value)}
                    required
                />
                <label htmlFor="">Quantas pessoas tem na sua empresa?</label>
                <input
                    type="number"
                    value={employees}
                    onChange={(e) => setEmployees(e.target.value)}
                    required
                />
                <button className={styles.botao}>Receber o material</button>
            </form>

        </div>
    )
}
