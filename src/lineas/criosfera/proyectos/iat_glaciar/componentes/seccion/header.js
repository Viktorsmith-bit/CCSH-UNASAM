export default function Header(){
    return(
        <div className='relative height-image'>
            <Image className='cover' layout='fill' src='/section/Criosfera.jpg' alt='Grupo de investigación'/>
            <div className='absolute top-0 left-0 flex justify-center items-center px-4 lg:px-0 w-full height-image'>
                <div className='flex-1 w-full md:max-w-2xl lg:max-w-7xl'>
                    <div className='flex-1 w-full md:max-w-2xl lg:max-w-xl p-4 lg:p-8 bg-white rounded-md opacity'>
                        <h1 className='font-extrabold text-4xl lg:text-6xl mt-2'>IAT GLACIAR</h1>
                        <div className="h-0.5 w-20 bg-gray-900 mt-3"></div>
                        <h1 className='mt-3'>Análisis de la dinámica glaciar, clima y disponibilidad hídrica.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}