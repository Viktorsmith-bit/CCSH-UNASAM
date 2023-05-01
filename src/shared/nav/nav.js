import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavMobile from './components/nav.mobile';
import { useRouter } from 'next/router'

export default function Nav(){
    const [state, setState] = useState(false);
    const router = useRouter()

    const open = (e)=>{
        e.preventDefault(), setState(true)
    }
    const close = (e)=>{
        e.preventDefault(), setState(false)
    }

    return(
        <nav className='h-20' id='inicio'>
            <nav className='fixed h-20 w-full lg:hidden z-30 background-color border-b border-gray-300 opacity-nav'>
                <div className='flex items-center justify-between h-20 px-4 lg:px-10'>
                    {
                        !state ? <svg onClick={open} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>: <svg onClick={close} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    }
                    <Image src='/logos/Logo_UNASAM.png' width={60} height={68} alt='Grupo de investigación'/>
                </div>
                { !state ? null: <NavMobile />} 
            </nav>
            <nav className='fixed h-20 flex justify-between items-center px-10 w-full hidden lg:flex z-30 background-color border-b border-gray-300 opacity-nav'>
                <Link href='/'>
                    <a className='w-40'>
                        <Image src='/logos/Logo_UNASAM.png' width={60} height={68} alt='Grupo de investigación'/>
                    </a>
                </Link>
                <div className='flex gap-7'>
                    <Link href="/"><a><h1 className={`cursor-pointer ${router.asPath == '/'?'border-b-2 border-gray-900':null}`}>Inicio</h1></a></Link>
                    <Link href="/criosfera"><a><h1 className={`cursor-pointer ${router.asPath == '/criosfera'?'border-b-2 border-gray-900':null}`}>Criósfera</h1></a></Link>
                    <Link href="/clima"><a><h1 className={`cursor-pointer ${router.asPath == '/clima'?'border-b-2 border-gray-900':null}`}>Clima</h1></a></Link>
                    <Link href="/seguridadhidrica"><a><h1 className={`cursor-pointer ${router.asPath == '/seguridadhidrica'?'border-b-2 border-gray-900':null}`}>Seguridad Hídrica</h1></a></Link>
                    <Link href="/visor"><a><h1 className={`cursor-pointer ${router.asPath == '/visor'?'border-b-2 border-gray-900':null}`}>Visor de mapas</h1></a></Link>
                </div> 
                <Image className='w-64' src='/logos/LogoGICCSH_H_SF.png' width={300} height={65} alt='Grupo de investigación'/>
            </nav>
        </nav>
    );
}