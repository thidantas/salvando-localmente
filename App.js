import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import NotaEditor from "./src/componentes/NotaEditor";
import { Nota } from "./src/componentes/Nota";
import { buscaNotas, criaTabela } from "./src/servicos/Notas";

export default function App() {
  useEffect(() => {
    criaTabela();
    mostraNotas();
  }, []);

  const [notas, setNotas] = useState([]);

  async function mostraNotas() {
    const todasNotas = await buscaNotas();
    setNotas(todasNotas);
    console.log(todasNotas);
  }

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} />}
        keyExtractor={(nota) => nota.id}
      />
      <NotaEditor mostraNotas={mostraNotas} />
      <StatusBar />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
