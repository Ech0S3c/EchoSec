interface CountDownCardProps {
  label: string,
  number1: number,
  number2: number,
}

export default function CountDownCard({label, number1, number2}: CountDownCardProps){
  return (
    <div className="w-auto h-auto flex flex-col justify-center items-center pb-8">
      <div className="flex pb-8 gap-px shadow-sm">
        <div className="w-44 h-[250px] rounded-[20px] bg-white flex justify-center items-center text-black font-bold text-9xl font-montserrat">
          {number1}
        </div>
        <div className="w-44 h-[250px] rounded-[20px] bg-white flex justify-center items-center text-black font-bold text-9xl font-montserrat">
          {number2}
        </div>
      </div>
      <div className="text-white font-bold text-5xl">
        {label}
      </div>
    </div>
  )
};