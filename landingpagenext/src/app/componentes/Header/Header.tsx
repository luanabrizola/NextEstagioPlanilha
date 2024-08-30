import styles from "./Header.module.css"

export default function Header(){

    return(
        <div className={styles.Header}>
            <h1>
                <span className={styles.quanto}>quanto</span>sobra.
            </h1>
        </div>
    )
}