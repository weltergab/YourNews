import Image from "next/image";

function NoticiaFull() {

  return (
    <div className='bg-color-bg bg-center bg-cover bg-no-repeat mt-1 min-h-screen items-center flex flex-col'>

      <h1>Noticia Full</h1>
      <div className="bg-color-bg2 items-center flex flex-col w-full max-w-5xl">
        <div className="h-96 w-full border-color-bg2 bg-green-300 relative overflow-hidden">
          <Image
            src="/vert.jpg"
            alt="Minha imagem"
            fill
            style={{ objectFit: 'cover' }} // object-fit: "contain"
          />
        </div>
        <div className="h-auto py-6 mx-3 px-6 flex flex-col relative">
          <h1 className="font-medium pb-20 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum vitae dolorum officia</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit enim voluptates, repellat necessitatibus et ipsam fugit, officiis pariatur incidunt aliquid corrupti delectus repellendus? Unde minima reprehenderit consequuntur odio quos.</p>
        </div>
      </div>

    </div>
  )
}

export default NoticiaFull;