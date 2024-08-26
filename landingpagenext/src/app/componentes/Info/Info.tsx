import styles from "./Info.module.css"

export default function Form() {

    return (
        <div className={styles.Footer}>
            <h3>Importante</h3>
            <p>
                O link para você baixar o conteúdo será enviado para o seu e-mail. Isso pode levar até 30 minutos.
            </p>
            <p>
                Caso você não receba em sua caixa de entrada, cheque sua caixa de SPAM.
            </p>
            <p>
                Este material está sendo enviado para você através de SMTP, então ele pode acabar sendo direcionado para a sua caixa de SPAM em algumas contas de e-mail como Gmail, Outlook, Yahoo, etc.
            </p>
        </div>
    )
}