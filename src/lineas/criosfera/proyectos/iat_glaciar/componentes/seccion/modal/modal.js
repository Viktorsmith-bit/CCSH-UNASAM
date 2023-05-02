import Image from 'next/image';

export default function Resumen(props){
    return(
        <div className='absolute h-screen left-0 top-0 z-40'>
            <div onClick={props.closeModal} className='fixed flex justify-center items-center h-screen w-full opacity-image px-4'> 
                <div className='relative dimension-modal'><Image className='object-contain border border-gray-300' layout='fill' src='/section/Mapa_TrabajoModelamiento.jpg' alt='Grupo de investigación'/></div>
            </div>
        </div>
    );
}