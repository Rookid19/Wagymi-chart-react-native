import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { LineChart } from "react-native-wagmi-charts";

export default function App() {
  //data
  const data = [
    {
      timestamp: 1625945400000,
      value: 33575.25,
    },
    {
      timestamp: 1625946300000,
      value: 33545.25,
    },
    {
      timestamp: 1625947200000,
      value: 33510.25,
    },
    {
      timestamp: 1625948100000,
      value: 33215.25,
    },
  ];

  const Chart = gestureHandlerRootHOC(() => (
    <View style={{ alignSelf: "center", marginTop: 200 }}>
      <LineChart.Provider data={data}>
        <LineChart.PriceText style={styles.price} />
        <LineChart.DatetimeText style={styles.date} />
        <LineChart>
          <LineChart.Path />
          <LineChart.CursorCrosshair />
          <LineChart.CursorLine style={{height : 100}}/>
        </LineChart>
      </LineChart.Provider>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Chart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  price: {
    fontSize: 40,
    textAlign: "center",
  },
  date: {
    textAlign: "center",
    font: 20,
  },
});
