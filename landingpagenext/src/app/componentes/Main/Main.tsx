import styles from './Main.module.css'

export default function Main() {

    return (
        <div className={styles.Main}>
            <h1>Planilha | Fluxo de Caixa</h1>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/8vqdRJWJbmo?si=xy1A4n-U-xD9K5fH"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
            <div className={styles.descricao}>
                <h1>Sobre a planilha</h1>
                <ul className={styles.lista}>
                    <li className={styles.bold}>Organize sua empresa</li>
                    <li>Acompanhe o andamento de movimentações financeiras</li>
                    <li className={styles.bold}>Veja quais recebimentos já foram realizados</li>
                    <li>Saiba quais contas você já recebeu</li>
                    <li className={styles.bold}>Saiba quais contas você já pagou</li>
                    <li>Acompanhe o pagamento de suas contas</li>
                </ul>
            </div>

        </div >
        
  );
};

    