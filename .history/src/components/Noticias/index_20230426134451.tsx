import Image from "next/image";

export function Noticias() {
  return (
    <>
      <div className="bg-gray-500 w-4/6 h-64 p-8">
        <div className="flex flex-row">
          <div className="square w-2/5 p-8 bg-green-300">
            <Image
              src="next.svg"
              alt="Minha imagem"
              width={500}
              height={500}
            />
          </div>

          <div className="w-3/5 p-8">
            <h1>Noticias max 5 palavras</h1>
            <h2 className="font-bold">Sub</h2>
            <p>Notícia Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam repellat ad? Distinctio commodi doloribus, porro magnam inventore iusto voluptatibus alias corporis tempora tenetur blanditiis animi nemo voluptas accusantium non!</p>
          </div>

        </div>

      </div>

      <div className="w-full h-full flex justify-center items-center">
      <div className="relative h-full w-full">
        <Image
          src="next.svg"
          alt="Descrição da imagem"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
    </>
  );
}
