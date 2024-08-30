import Header from "./componentes/Header/Header";
import Main from "./componentes/Main/Main";
import Form from "./componentes/Form/Form";
import Info from "./componentes/Info/Info";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <Main />
        </div>
        <div className={styles.formEInfoContent}>
          <Form />
        </div>
        
      </main>
    </div>
  );
}
