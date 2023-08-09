interface CountDownCardProps {
  label: string,
  number1: number,
  number2: number,
}

export default function CountDownCard({label, number1, number2}: CountDownCardProps){
  return (
    <div className="w-auto h-auto flex flex-col justify-center items-center pb-8 max-sm:w-32">
      <div className="flex pb-8 gap-px shadow-sm max-xl:gap-1 max-xl:pb-12 max-xl:w-4/5 max-xl:h-4/5]">
        <div className="w-44 h-[250px] rounded-[20px] bg-white flex justify-center items-center text-black font-bold text-9xl font-montserrat max-md:text-6xl max-xl:text-7xl max-xl:h-44 max-lg:h-36 max-lg:w-32 max-sm:text-5xl max-sm:h-20 max-sm:w-20 max-[760px]:w-28">
          {number1}
        </div>
        <div className="w-44 h-[250px] rounded-[20px] bg-white flex justify-center items-center text-black font-bold text-9xl font-montserrat max-md:text-6xl max-xl:text-7xl max-xl:h-44 max-lg:w-32 max-lg:h-36 max-sm:text-5xl max-sm:h-20 max-sm:w-20 max-[760px]:w-28">
          {number2}
        </div>
      </div>
      <div className="text-white font-bold text-5xl max-md:w-2/6 max-md:text-2xl max-lg:text-4xl max-sm:text-xl max-sm:w-[90px] text-center">
        {label}
      </div>
    </div>
  )
};