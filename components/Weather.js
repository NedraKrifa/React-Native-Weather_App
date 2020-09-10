import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

const Weather = ({
  city,
  country,
  icon,
  description,
  temperature,
  tempMax,
  tempMin,
  isLoading,
}) => {
  let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
  return (
    <View style={styles.container}>
      {!isLoading ? (
        <View style={styles.container_title}>
          <Text style={{ fontSize: 30 }}>
            {city}, {country}
          </Text>
          <Image
            style={styles.icon}
            source={{
              uri: iconurl,
            }}
          />
          <Text style={{ fontSize: 30 }}>
            {claculCelsius(temperature)}&deg;
          </Text>
          <Text style={{ fontSize: 14 }}>
            MIN: {claculCelsius(tempMin)}&deg;
          </Text>
          <Text style={{ fontSize: 14 }}>
            MAX: {claculCelsius(tempMax)}&deg;
          </Text>
          <Text style={{ fontSize: 20 }}>{upperCaseFirst(description)}</Text>
        </View>
      ) : (
        <View>
          <Text style={{ color: "grey" }}>
            Please Enter City and Country...
          </Text>
        </View>
      )}
    </View>
  );
};
const claculCelsius = (temp) => {
  return Math.floor(temp - 273.15);
};
const upperCaseFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  container_title: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 66,
    height: 58,
  },
});

export default Weather;
