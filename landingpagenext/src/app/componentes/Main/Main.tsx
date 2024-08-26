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
                <h2>Sobre a planilha</h2>
                <ul>
                    <li>Organize sua empresa</li>
                    <li>Veja quais recebimentos já foram realizados</li>
                    <li>Saiba quais contas você já pagou</li>
                    <li>Acompanhe o pagamento de suas contas</li>
                </ul>
            </div>

        </div >
        
  );
};

    