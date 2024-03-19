'use client'
import { useEffect, useState } from "react";

const CountDownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const calculateTimeRemaining = (): number => {
    const currentTime = new Date().getTime();
    const difference = targetDate.getTime() - currentTime;
    return Math.max(0, Math.floor(difference / 1000)); // Convertendo para segundos
  }

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(newTimeRemaining);
      console.log('timeRemaining', newTimeRemaining); // Verifica o estado atualizado
    }, 1000);
  
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600); // Calcula as horas
    const minutes = Math.floor((time % 3600) / 60); // Calcula os minutos
    const seconds = time % 60; // Calcula os segundos
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <p className="text-2xl font-anonymous font-medium text-center lg:text-4xl pb-20 translate-y-24">
      {formatTime(timeRemaining)}
    </p>
  );
}

export default CountDownTimer;
