import Header from "./componentes/Header/Header";
import Main from "./componentes/Main/Main";
import Form from "./componentes/Form/Form";
import Info from "./componentes/Info/Info";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Main />
        <Form />
        <Info />
      </main>
    </div>
  );
}
