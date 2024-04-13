import "./App.css";
import { Cart } from "./components/cart";
import { Container } from "./components/container";
import { Form1, Form2 } from "./components/forms";

function App() {
  return (
    <>
      <Container>
        <Form1 />
        <Form2 />
      </Container>
      <Container>
        <Cart stateKey="first-data" />
        <Cart stateKey="second-data" />
      </Container>
    </>
  );
}

export default App;
