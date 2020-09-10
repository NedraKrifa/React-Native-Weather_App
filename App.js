import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import Form from "./components/Form";
import Weather from "./components/Weather";

const api = {
  key: "3a428a6125f8b5ef6fc42d1a3db8b92f",
  base: "https://api.openweathermap.org/data/2.5/",
};
const image = { uri: "https://img.freepik.com/free-vector/dreamy-magical-shiny-clouds-background-vibrant-colors_1017-25505.jpg?size=626&ext=jpg&uid=R11346570&ga=GA1.2.1477659626.1587586174" };

export default function App() {
  const [cityForm, setCityForm] = useState("");
  const [countryForm, setCountryForm] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = async (e) => {
    e.preventDefault();
    console.log(cityForm);
    console.log(countryForm);
    const response = await axios.get(
      `${api.base}weather?q=${cityForm},${countryForm}&appid=${api.key}`
    );
    console.log(response.data);
    try {
      setCity(response.data.name);
      setCountry(response.data.sys.country);
      setIcon(response.data.weather[0].icon);
      setDescription(response.data.weather[0].description);
      setTemperature(response.data.main.temp);
      setTempMax(response.data.main.temp_max);
      setTempMin(response.data.main.temp_min);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Form
          loadWeather={getWeather}
          setCityForm={setCityForm}
          setCountryForm={setCountryForm}
          cityForm={cityForm}
          countryForm={countryForm}
        />
        <Weather
          city={city}
          country={country}
          icon={icon}
          description={description}
          temperature={temperature}
          tempMax={tempMax}
          tempMin={tempMin}
          isLoading={isLoading}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
