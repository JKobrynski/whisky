import React, { useState } from "react";
import "./styles/styles.scss";
import store from "./store";
import { Provider } from "react-redux";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  const ownClassName = visible ? "blur" : "";

  return (
    <Provider store={store}>
      <main className={ownClassName}>
        <Navbar
          search={search}
          setSearch={setSearch}
          visible={visible}
          setVisible={setVisible}
        />
        <Content search={search} visible={visible} setVisible={setVisible} />
      </main>
      <Modal visible={visible} setVisible={setVisible} />
    </Provider>
  );
}

export default App;
