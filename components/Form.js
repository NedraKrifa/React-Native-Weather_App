import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Form({
  loadWeather,
  setCityForm,
  setCountryForm,
  cityForm,
  countryForm,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={cityForm}
        placeholder="City"
        onChangeText={(text) => setCityForm(text)}
      />
      <TextInput
        style={styles.input}
        value={countryForm}
        placeholder="Country"
        onChangeText={(text) => setCountryForm(text)}
      />
      <Button title="Get Weather" onPress={(e) => loadWeather(e)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 180,
  },
  input: {
    fontSize: 20,
    marginBottom: 10,
  },
});
