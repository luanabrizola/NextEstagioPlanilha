import styles from "./Info.module.css"

export default function Info() {

    return (
        <div className={styles.Info}>
            <h3>Importante</h3>
            <p>
                O link para você baixar o conteúdo será enviado para o seu e-mail. <span>Isso pode levar até 30 minutos.</span>
            </p>
            <p>
                Caso você não receba em sua caixa de entrada, <span>cheque sua caixa de SPAM.</span>
            </p>
            <p>
                Para evitar que o e-mail seja enviado para sua caixa de SPAM, adicione este endereço ao seus contatos
                cassio.muller@quantosobra.com.br
            </p>
            <p>
                Para ver como adicionar contatos no seu e-mail <span className={styles.gmail}>Gmail, Outook, Yahoo</span>
            </p>
        </div>
    )
}