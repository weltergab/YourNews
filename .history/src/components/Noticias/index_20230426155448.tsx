import Image from "next/image";

export function Noticias() {
  return (
    <>
      <div className="flex flex-col items-center">

        <div className="bg-gray-500 max-w-7xl h-64 p-8 m-8 flex justify-center items-center">

          <div className="w-2/5 p-8 bg-green-300">
            
              <Image
                src="next.svg"
                alt="Minha imagem"
                fill
              />
            
          </div>
          <div className="w-3/5 p-8">
            <h1>Noticias max 5 palavras</h1>
            <h2 className="font-bold">Sub</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, minus! Quidem rerum iure a cumque unde ducimus exercitationem laudantium. Laboriosam non voluptatem, fuga atque repudiandae quibusdam eius necessitatibus eligendi reprehenderit!</p>
          </div>

        </div>


        <div className="bg-gray-500 w-4/6 h-64 p-8">
          <div className="flex justify-center items-center">
            <div className="w-2/5 p-8 bg-green-300">
              <Image
                src="vercel.svg"
                alt="Minha imagem"
                width={500}
                height={500}
                object-fit= "cover"
              />
            </div>
            <div className="w-3/5 p-8">
              <h1>Noticias max 5 palavras</h1>
              <h2 className="font-bold">Sub</h2>
              <p>Notícia Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam repellat ad? Distinctio commodi doloribus, porro magnam inventore iusto voluptatibus alias corporis tempora tenetur blanditiis animi nemo voluptas accusantium non!</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
