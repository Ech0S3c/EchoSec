"use client"
import { useState, useEffect } from "react";
import dayjs from "dayjs";

import CountDownCard from "./CountDownCard";

export default function CountDownTimer() {
    //Definindo o tempo inicial em horas minutos e segundos
    const [daysTens, setDaysTens] = useState<number>(0);
    const [daysUnit, setDaysUnit] = useState<number>(0);
    const [hourTens, setHourTens] = useState<number>(0);
    const [hourUnits, setHourUnits] = useState<number>(0);
    const [minuteTens, setMinuteTens] = useState<number>(0);
    const [minuteUnits, setMinuteUnits] = useState<number>(0);
    const [secondTens, setSecondTens] = useState<number>(0);
    const [secondUnits, setSecondUnits] = useState<number>(0);

    useEffect(() => {
      let targetDate = dayjs("2023-08-14T00:18:00-03:00", "YYYY-MM-DDTHH:MM:SSZ");
      
      const countDown = setInterval(() => {
        const currentTime = dayjs();
        const remainingTime = Math.floor(targetDate.diff(currentTime, "milliseconds") / 1000);



        //Verificando se o contador chegou a zero
        if (remainingTime <= 0) {
          //Se sim, para o contador
          clearInterval(countDown);
          //E atualiza o estado das horas, minutos e segundos para 0
          setDaysTens(0);
          setDaysUnit(0);
          setHourTens(0);
          setHourUnits(0);
          setMinuteTens(0);
          setMinuteUnits(0);
          setSecondTens(0);
          setSecondUnits(0);
        } else {

          const remainingDays = Math.floor(remainingTime / 86400);
          const remainingHours = Math.floor((remainingTime / 3600) % 24);
          const remainingMinutes = Math.floor((remainingTime / 60) % 60);
          const remainingSeconds = Math.floor(remainingTime % 60);

          setDaysTens(Math.floor(remainingDays / 10));
          setDaysUnit(Math.floor(remainingDays % 10));
          setHourTens(Math.floor(remainingHours / 10));
          setHourUnits(Math.floor(remainingHours % 10));
          setMinuteTens(Math.floor(remainingMinutes / 10));
          setMinuteUnits(Math.floor(remainingMinutes % 10));
          setSecondTens(Math.floor(remainingSeconds / 10));
          setSecondUnits(Math.floor(remainingSeconds % 10));
        }
      }, 1000);

      //Retornando a função de parada do contador
      return () => clearInterval(countDown);
    }, []);

    if (daysTens === 0 && daysUnit === 0 ) {
      return (
        <div className="flex gap-9 w-full justify-center">
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
    } else {
      return (
        <div className="flex gap-9 w-full justify-center">
          <CountDownCard 
            label="DIAS"
            number1={daysTens}
            number2={daysUnit}
          />
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
        </div>
      )
    }
  }
