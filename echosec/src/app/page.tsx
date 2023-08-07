import Layout from '@/components/Layout';
import HoverCardAsync from '@/components/HoverCardAsync';
import CountDownTimer from '@/components/CountDown/CountDownTimer';
import { CardPhase } from '@/components/CardPhase';
import { AboutUs } from '@/components/AboutUs';

export default function Home() {
  return (
    <Layout>
      <div className="pt-24 min-h-screen flex items-center justify-center flex-col">
        <div className="flex flex-col w-full h-[80vh] justify-center items-center mt-[75px] mb-6">
          <div className="mt-10 w-52 h-20 mb-10 flex justify-center items-center">
            <h1 className="font-poppins font-bold text-white text-5xl">
              FALTAM
            </h1>
          </div>
          <div className="flex flex-row items-start justify-center w-full">
            {/* <div className="mr-28 ml-40"> */}
              <CountDownTimer />
            {/* </div> */}
            {/* <div className="flex justify-center flex-col gap-y-4 mt-3">
              <HoverCardAsync />
            </div> */}
          </div>
          <div className="flex justify-center font-poppins font-bold text-white text-4xl my-2 mt-5 mb-4">
            <h2>PARA O PROCESSO SELETIVO</h2>
          </div>
          <div className="flex justify-center items-center flex-col gap-2 mb-24">
            <p className="font-montserrat font-medium text-sm text-white">Saiba Mais</p>
            <button className="w-6 h-9 border-white text-white border-2 rounded-2xl flex items-center justify-center cursor-default">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col h-[80vh] pb-4 mb-10">
          <div className="flex justify-center items-center pb-16 pt-12">
            <h1 className="text-white text-5xl font-bold font-poppins">
              COMO VAI FUNCIONAR?
            </h1>
          </div>
          <div className="flex gap-12 mb-10">
            <CardPhase fase="Fase 1" title='Inscrição' description="Para fazer sua inscrição no nosso processo seletivo, você deve entrar no site ctf.echosec.com.br e se registrar com seu e-mail institucional do Inteli. Após a inscrição, você deve esperar até o dia do início da próxima fase. Não se esqueça de clicar em ‘Rules’ para ler as regras."/>
            <CardPhase fase="Fase 2" title='CTF' description="Um CTF é um tipo de competição bem comum no mundo de cibersegurança, o objetivo é procurar e capturar “flags” escondidas, e elas podem ser encontradas ao explorar as falhas de uma aplicação web fictícia, por exemplo. Não se preocupe, serão abordados temas básicos e terão dicas de como encontrá-las."/>
            <CardPhase fase="Fase 3" title='Entrevista' description="Após o CTF, iremos selecionar os participantes que se saíram melhor e convidar para uma breve entrevista. Nela iremos conhecer o candidato e entender como foi o processo de encontrar as flags."/>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col h-[70vh] -mt-5 pb-4">
          <div className="flex justify-center items-center pb-16 w-full">
              <h1 className="text-white text-5xl font-bold font-poppins">
                SOBRE NÓS
              </h1>
          </div>
          <AboutUs />
        </div>
      </div>
    </Layout>
  )
}
