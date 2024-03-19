import Image from "next/image";
import CountDownTimer from "../components/CountDownTimer";
import { DateTime } from "luxon";

export default function Home() {
  const targetDateUTC = DateTime.fromISO("2024-03-22T13:00:00", { zone: "America/Sao_Paulo" }).toJSDate();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
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
    </main>
  );
}
