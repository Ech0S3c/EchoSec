'use client'

import Image from "next/image";
import CountDownTimer from "../components/CountDownTimer";
import { DateTime } from "luxon";
import ScrollButton from "../components/ScrollButton";
import CardComponent from "@/components/CardComponent";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const targetDateUTC = DateTime.fromISO("2024-03-22T13:00:00", { zone: "America/Sao_Paulo" }).toJSDate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setCurrentTime(new Date());
  }

  const isTargetReached = currentTime >= targetDateUTC;

  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      {isTargetReached ? (
        <>
          <div className="w-full h-screen flex flex-col justify-between items-center">
            <div className="pt-60">
              <div className="flex justify-center items-center pb-20">
                <Image
                  className="dark:drop-shadow-[0_0_0.2rem_#ffffff70]"
                  src="/Logo_BGPreto-removebg-preview 1.svg"
                  alt="Next.js Logo"
                  width={177}
                  height={149}
                  priority
                />
              </div>

              <div className="flex flex-col font-bold justify-center items-center mb-32 text-center">
                <h1 className="text-2xl font-anonymous font-bold text-center text-white lg:text-5xl">
                  be one of us
                </h1>
                {/* <CountDownTimer targetDate={targetDateUTC} /> */}
              </div>
            </div>

            <div className="flex flex-col font-bold justify-center items-center mb-10 text-center">
              <ScrollButton />
            </div>
          </div>
          <div className="h-auto flex justify-center items-center flex-col gap-10 p-10">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl font-anonymous text-center">
                Instruções
              </h2>
            </div>

            <div className="flex flex-col w-2/3 gap-8 xl:flex-row">
              <CardComponent
                title="fase 1"
                description="Inscrição"
                text="Para fazer sua inscrição no nosso processo seletivo, você deve entrar no site <strong>ctf.echosec.com.br</strong> e se registrar com o seu e-mail institucional. Após a inscrição, você deve esperar até o dia do início da próxima fase. Não se esqueça de clicar em 'Rules' para ler as regras."
              />
              <CardComponent
                title="fase 2"
                description="CTF"
                text="Um CTF é um tipo de competição bem comum no mundo de cibersegurança, o objetivo é procurar e capturar “flags” escondidas, e elas podem ser encontradas ao explorar as falhas de uma aplicação web fictícia, por exemplo. Não se preocupe, serão abordados temas básicos e terão dicas de como encontrá-las."
              />
              <CardComponent
                title="fase 3"
                description="Entrevista"
                text="
                Após o CTF, iremos selecionar os participantes que se saíram melhor e convidar para uma breve entrevista. Nela iremos conhecer o candidato e entender como foi o processo de encontrar as flags."
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-10 p-10 mt-8">
            <div className="w-2/3">
              <h2 className="text-4xl font-anonymous text-start text-white lg:text-5xl">
                Observações importantes
              </h2>
            </div>
            <div className="w-2/3 flex justify-center items-center">
              <ul className="list-decimal">
                <li className="p-2">
                  <p>
                    O nosso canal oficial de comunicações sobre o processo seletivo é o discord: https://discord.gg/JDhpzJNN9R;
                  </p>
                </li>
                <li className="p-2">
                  <p>
                    Em caso de qualquer dúvida, você pode entrar em contato conosco pelo discord;
                  </p>
                </li>
                <li className="p-2">
                  <p>
                    Reforçamos a importância da leitura das regras do CTF;
                  </p>
                </li>
              </ul>
            </div>
            <Link href={"https://ctf.echosec.com.br"} className="bg-white text-black font-bold font-anonymous text-xl p-5">
              Inscreva-se
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="-translate-y-9">
            <div className="flex justify-center items-center">
              <Image
                className="dark:drop-shadow-[0_0_0.2rem_#ffffff70]"
                src="/Logo_BGPreto-removebg-preview 1.svg"
                alt="Next.js Logo"
                width={177}
                height={149}
                priority
              />
            </div>

            <div className="flex flex-col font-bold justify-center items-center mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left translate-y-12">
              <h1 className="text-2xl font-anonymous font-bold text-center text-white lg:text-5xl">
                we are not the obvious
              </h1>
              <CountDownTimer targetDate={targetDateUTC} />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
