import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(0);
  const [status, setStatus] = useState("Stay happy and healthy!!!");

  const calc = () => {
    var imc = peso / (altura * altura);
    setResultado(imc);
    answer();
  };

  const clean = () => {
    setResultado(0);
    setStatus("");
  };

  const answer = () => {
    var resp = "";

    resultado.toPrecision(2);

    if (resultado < 16) {
      resp = "magreza grave";
    }

    if (resultado >= 16 && resultado <= 17) {
      resp = "magreza moderada";
    }

    if (resultado > 17 && resultado < 18.5) {
      resp = "magreza leve";
    }

    if (resultado >= 18.51 && resultado < 25) {
      resp = "considerado saudável";
    }

    if (resultado >= 25 && resultado < 30) {
      resp = "sobrepeso";
    }

    if (resultado >= 30 && resultado < 35) {
      resp = "obesidade de grau I";
    }

    if (resultado >= 35 && resultado <= 40) {
      resp = "obesidade de grau II (severa)";
    }

    if (resultado > 40) {
      resp = "obesidade de grau III (mórbida)";
    }

    setStatus(resp);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Altura"
          keyboardType="numeric"
          onChangeText={altura => {
            setAltura(altura);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Peso"
          keyboardType="numeric"
          onChangeText={peso => {
            setPeso(peso);
          }}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={calc}>
        <Text style={styles.textbot}>Calcular</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={clean}>
        <Text style={styles.textbot}>Limpar</Text>
      </TouchableOpacity>

      <View>
        <Text style={[styles.textbot, styles.textbox1]}>
          {resultado.toFixed(2)}
        </Text>
      </View>
      <View style={styles.viewtext}>
        <Text style={styles.textbot}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-around"
  },

  input: {
    padding: 50,
    fontSize: 25
  },

  botao: {
    height: 50,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#00ffff",
    marginBottom: 10
  },

  textbot: {
    alignSelf: "center",
    fontSize: 25,
    color: "#1234"
  },

  textbox1: {
    padding: 30,
    fontSize: 50
  },
  viewtext: {
    alignItems: "center"
  }
});
