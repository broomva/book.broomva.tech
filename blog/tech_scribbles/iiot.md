
---
slug: iiot
title: Iiot
authors: broomva
tags: [tech_scribbles, broomva]
date: 2020-12-30
---


# IIoT

Mediante la implementación efectiva de soluciones IIoT se lograra realizar la transmisión de información de funcionamiento de plantas y procesos de producción y transformación e industria discreta. La aplicación de telemetría mediante dispositivos satelitales (Orbcomm) y transmisión segura por IP con Siemens Ruggedcom permite tener arquitecturas de comunicación robustas que aseguran la transmisión correcta de datos. Usando dispositivos Edge como Siemens Nano o Iot2040 se logra establecer el vinculo entre el campo y la nube y mediante plataformas como Mindsphere o AWS IoT se logra captar la información y guardarla en bases de datos redundantes donde el activo mas importante estará seguro y con disponibilidad completa. El tratamiento y procesamiento de datos se desarrolla con algoritmos y pipelines establecidos para optimizar el aprendizaje supervisado. Por ultimo, usando librerías novedosas de machine learning como tensorflow, el desarrollo, ejecución y despliegue de redes neuronales profundas se facilita lo que permite lograr sistemas inteligentes de forma rápida y optima para la industria.

Usando telemetría satelital sobre reconectadores en lineas de distribución se transmite de forma efectiva datos para usar con redes neuronales recurrentes y convolucionales donde se lograra realizar un análisis profundo del comportamiento y la dinámica temporal de sistemas energéticos, para predecir comportamiento, detectar anomalías y determinar periodos óptimos de mantenimiento. La telemetría se logra usando modems satelitales de Orbcomm para tener disponibilidad completa en estaciones remotas y el procesamiento y analítica se realiza con computación en la nube de AWS con Siemens Mindsphere

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```


```jsx
import React, { useState, useEffect } from 'react';

const IoTDataSimulator = () => {
  const [temperatureData, setTemperatureData] = useState([]);

  // Function to simulate data generation
  const generateData = () => {
    const newData = Math.random() * 30; // Random temperature between 0 and 30
    setTemperatureData(prevData => [...prevData, newData]);
  };

  useEffect(() => {
    const interval = setInterval(generateData, 1000); // Generate new data every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>IoT Temperature Data</h1>
      <ul>
        {temperatureData.map((data, index) => (
          <li key={index}>{data.toFixed(2)}°C</li>
        ))}
      </ul>
    </div>
  );
};

export default IoTDataSimulator;

import React, { useState, useEffect } from 'react';

const SimplePredictiveModel = () => {
  const [iotData, setIotData] = useState([]);
  const [nextPrediction, setNextPrediction] = useState(null);

  // Function to simulate IoT data generation
  const generateIotData = () => {
    const newData = Math.random() * 30; // Random data between 0 and 30
    setIotData(prevData => [...prevData.slice(-4), newData]); // Keep the last 5 data points
  };

  // Function to predict the next value
  const predictNextValue = (data) => {
    if (data.length < 5) return null;

    // Calculate the average change over the last 4 intervals
    let totalChange = 0;
    for (let i = 1; i < data.length; i++) {
      totalChange += data[i] - data[i - 1];
    }
    const averageChange = totalChange / (data.length - 1);

    // Predict the next value
    return data[data.length - 1] + averageChange;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateIotData();
      setNextPrediction(predictNextValue(iotData));
    }, 1000);

    return () => clearInterval(interval);
  }, [iotData]);

  return (
    <div>
      <h1>IoT Data and Prediction</h1>
      <p>Latest Data: {iotData[iotData.length - 1]?.toFixed(2)}</p>
      <p>Predicted Next Value: {nextPrediction?.toFixed(2)}</p>
      <ul>
        {iotData.map((data, index) => (
          <li key={index}>{data.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimplePredictiveModel;


import React from 'react';
import './App.css';
import SimplePredictiveModel from './SimplePredictiveModel';

return (
<div className="App">
    <header className="App-header">
    <SimplePredictiveModel />
    </header>
</div>
);


```