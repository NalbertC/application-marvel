import { Result } from "../pages/Home"

interface CardPersonagemProps extends Result {

}

export function CardPersonagem({ name, thumbnail }: CardPersonagemProps) {
  return (
    <div className="group border h-96 max-w-[278px] bg-dark  md:max-w-[268px] w-full flex flex-col">
      <div className="flex-1 w-full max-h-[80%]">

        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="" className="border-b-4 border-primary h-full w-full" />
      </div>

      <div className="flex-1 w-full px-4 py-2 group-hover:bg-primary min-h-[20%] transition duration-300 ease-in-out">

        <span className="text-white text-xl font-bold">{name}</span>
      </div>
    </div>
  )
}



