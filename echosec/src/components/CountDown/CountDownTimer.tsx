"use client"
import { useState, useEffect } from "react";
import dayjs from "dayjs";

import CountDownCard from "./CountDownCard";

export default function CountDownTimer() {
    //Definindo o tempo inicial em horas minutos e segundos
    const [hourTens, setHourTens] = useState<number>(0);
    const [hourUnits, setHourUnits] = useState<number>(0);
    const [minuteTens, setMinuteTens] = useState<number>(0);
    const [minuteUnits, setMinuteUnits] = useState<number>(0);
    const [secondTens, setSecondTens] = useState<number>(0);
    const [secondUnits, setSecondUnits] = useState<number>(0);

    useEffect(() => {
      let targetDate = dayjs("2023-06-27T12:30:00-03:00", "YYYY-MM-DDTHH:MM:SSZ");
      
      const countDown = setInterval(() => {
        const currentTime = dayjs();
        const remainingTime = Math.floor(targetDate.diff(currentTime, "milliseconds") / 1000);
        console.log(`Tempo restante: ${remainingTime}`);
        console.log(`Data Escolhida: ${targetDate}`);
        console.log(`Data Atual: ${currentTime}`);

        //Verificando se o contador chegou a zero
        if (remainingTime <= 0) {
          //Se sim, para o contador
          clearInterval(countDown);
          //E atualiza o estado das horas, minutos e segundos para 0
          setHourTens(0);
          setHourUnits(0);
          setMinuteTens(0);
          setMinuteUnits(0);
          setSecondTens(0);
          setSecondUnits(0);
        }

        //Calculando as horas minutos e segundos restantes
        const remainingHours = Math.floor(remainingTime / 3600);
        const remainingMinutes = Math.floor((remainingTime / 60) % 60);
        const remainingSeconds = Math.floor(remainingTime % 60);

        // Separando as casas das horas, minutos e segundos
        const hourTens = Math.floor(remainingHours / 10);
        const hourUnits = remainingHours % 10;
        const minuteTens = Math.floor(remainingMinutes / 10);
        const minuteUnits = remainingMinutes % 10;
        const secondTens = Math.floor(remainingSeconds / 10);
        const secondUnits = remainingSeconds % 10;

        //Atualizando o estado das horas, minutos e segundos
        setHourTens(hourTens);
        setHourUnits(hourUnits);
        setMinuteTens(minuteTens);
        setMinuteUnits(minuteUnits);
        setSecondTens(secondTens);
        setSecondUnits(secondUnits);
      }, 1000);

      //Retornando a função de parada do contador
      return () => clearInterval(countDown);
    }, []);

    return (
      <div className="flex gap-9">
        <CountDownCard 
          label="HORAS"
          number1={hourTens}
          number2={hourUnits}
        />
        <CountDownCard 
          label="MINUTOS"
          number1={minuteTens}
          number2={minuteUnits}
        />
        <CountDownCard 
          label="SEGUNDOS"
          number1={secondTens}
          number2={secondUnits}
        />
        </div>
    )

}