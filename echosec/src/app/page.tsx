import Layout from '@/components/Layout';

import { HoverCards } from '@/components/HoverCards';
import CountDownTimer from '@/components/CountDown/CountDownTimer';

import echosecLogo from "@assets/logo_echosec_preto.svg";
import linkedinLogo from "@assets/logo_linkedin.svg";
import instagramLogo from "@assets/logo_instagram.svg";
import telegramLogo from "@assets/logo_telegram.svg";
import githubLogo from "@assets/logo_github.svg";

import { CardPhase } from '@/components/CardPhase';

const urls = {
  linkedin: "https://www.linkedin.com/company/echosec00/",
  instagram: "https://www.instagram.com/echo.sec/",
  telegram: "https://t.me/+mq6iIth2D7pmYmQx",
  github: "https://github.com/EchoSec00"
}


export default function Home() {
  return (
    <Layout>
      <div className="pt-24 min-h-screen flex items-center justify-center flex-col">
        <div className="flex flex-col w-full h-[80vh] justify-center items-center mt-[75px]">
          <div className="mt-10 w-52 h-20 mb-10 flex justify-center items-center">
            <h1 className="font-poppins font-bold text-white text-5xl">
              FALTAM
            </h1>
          </div>
          <CountDownTimer />
          <div className="flex justify-center flex-col gap-y-4">
            {/* <HoverCards iconSocialMedia={linkedinLogo} iconLeague={echosecLogo} url={urls.linkedin}/>
            <HoverCards iconSocialMedia={instagramLogo} iconLeague={echosecLogo} url={urls.instagram}/>
            <HoverCards iconSocialMedia={telegramLogo} iconLeague={echosecLogo} url={urls.telegram}/>
            <HoverCards iconSocialMedia={githubLogo} iconLeague={echosecLogo} url={urls.github}/> */}
          </div>
          <div className="flex justify-center font-poppins font-bold text-white text-4xl my-2 mt-5 mb-4">
            <h2>PARA O PROCESSO SELETIVO</h2>
          </div>
          <div className="flex justify-center items-center flex-col gap-2 mb-24">
            <p className="font-montserrat font-medium text-sm text-white">Saiba Mais</p>
            <button className="w-6 h-9 border-white text-white border-2 rounded-2xl flex items-center justify-center">Oi</button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col h-[80vh] pb-4">
          <div className="flex justify-center items-center pb-16 pt-12 processo-seletivo">
            <h1 className="text-white text-5xl font-bold font-poppins">
              COMO VAI FUNCIONAR?
            </h1>
          </div>
          <div className="flex gap-12 ">
            <CardPhase fase="Fase 1" title='Inscrição' description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, voluptatem unde et vel laborum autem voluptas non ducimus quis minus dolorem explicabo, ex beatae, distinctio dignissimos quisquam aperiam nesciunt culpa!"/>
            <CardPhase fase="Fase 2" title='CTF' description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, voluptatem unde et vel laborum autem voluptas non ducimus quis minus dolorem explicabo, ex beatae, distinctio dignissimos quisquam aperiam nesciunt culpa!"/>
            <CardPhase fase="Fase 3" title='Entrevista' description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, voluptatem unde et vel laborum autem voluptas non ducimus quis minus dolorem explicabo, ex beatae, distinctio dignissimos quisquam aperiam nesciunt culpa!"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
