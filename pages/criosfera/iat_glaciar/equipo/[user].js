import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import Head from 'next/head';
import Layout from '../../../../src/layout';
import Nav from '../../../../src/shared/nav/nav';
import {listaTesis} from '../../../../src/lineas/criosfera/proyectos/iat_glaciar/componentes/produccion/lista/lista.tesis';
import laguna_pequeña from '../../../../public/fondos/Laguna_pequeña.JPG';

export default function Home () {
    const router = useRouter();
    console.log(router.query.user)
    return (
        <Layout>
            <Head>
                <title>Criósfera, Clima y Seguridad Hídrica</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/inaigem.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

            </Head>
            <main>
                <Nav />
                <div className=''>
                    <Image className='w-full cover' src={laguna_pequeña} height={1200} alt='Grupo de investigación'/>
                    <Link href='/criosfera/iat_glaciar'>
                        <a>
                            <code><h1 className='flex items-center justify-center lg:hidden absolute bottom-0 left-0 bg-white h-12 w-12 font-bold text-color text-white text-xl'>{`<`}</h1></code>
                        </a>
                    </Link>
                </div>
                <div className='flex justify-center lg:justify-between -mt-24 pb-16 px-4 lg:px-16'>
                    {
                        listaTesis.map((item)=>{
                            if(item.team[parseInt(router.query.user.slice(0, 1))].user === router.query.user){
                                return <Fragment key={item.id}>
                                    <Link href={`/criosfera/iat_glaciar/produccion/${item.ruta}`} >
                                        <a className='h-7 mt-32'>
                                            <div className='flex lg:flex hidden lg:flex'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                                                </svg>
                                                <h1 className='font-bold text-color'>Volver</h1>
                                            </div>
                                        </a>
                                    </Link>
                                    <div className='flex flex-col flex-1 w-full md:max-w-2xl lg:max-w-2xl'>
                                        <div className='relative rounded-full cover border-2 border-white z-20 mx-auto w-40 h-40 lg:w-56 lg:h-56'><Image className='rounded-full' layout='fill' src={`${item.team[parseInt(router.query.user.slice(0, 1))].foto}`} alt='Grupo de investigación'/></div>
                                        <div className='mt-3'>
                                            <h1 className='text-center font-bold text-xl lg:text-2xl text-color'>{item.team[parseInt(router.query.user.slice(0, 1))].name}</h1>
                                            <h1 className='text-center text-base text-color'>{item.team[parseInt(router.query.user.slice(0, 1))].cargo}</h1>
                                            <div className='flex flex-wrap justify-center gap-2 lg:gap-5 mt-3'>
                                                <div className='flex gap-1'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#434040" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                                                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                                                    </svg>
                                                    <h1 className='text-center text-color'>{item.team[parseInt(router.query.user.slice(0, 1))].profesion}</h1>
                                                </div>
                                                <div className='flex gap-1'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#434040" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                                    </svg>
                                                    <h1 className='text-center text-color'>{item.team[parseInt(router.query.user.slice(0, 1))].ubicacion}</h1>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className='w-10 h-1 background-color mx-auto mt-5'></div>
                                        <div className='mt-10'>
                                            <h1 className={`text-base text-justify text-color ${item.team[parseInt(router.query.user.slice(0, 1))].especialidad === null?'hidden':'block'}`}>{item.team[parseInt(router.query.user.slice(0, 1))].especialidad}</h1>
                                            <h1 className='mt-3 text-base text-justify text-color'>{item.team[parseInt(router.query.user.slice(0, 1))].descripcion}</h1>
                                        </div>                               
                                        <div className='footer mt-10 mr-auto'>
                                            <div className='flex flex-wrap gap-2'>
                                                <div className='flex items-center gap-2 bg-gray-200 py-2 px-4 cursor-pointer rounded-md'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#434040" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                                    </svg>
                                                    <a href={item.team[parseInt(router.query.user.slice(0, 1))].contacto.correo}><h1 className='text-color'>{item.team[parseInt(router.query.user.slice(0, 1))].contacto.email}</h1></a>
                                                </div>
                                                <a href={item.team[parseInt(router.query.user.slice(0, 1))].redes.linkedin} rel="noopener" target='_blank' className={`bg-gray-200 py-2 px-4 rounded-md text-color ${item.team[parseInt(router.query.user.slice(0, 1))].redes.linkedin === null?'hidden':'block'} `}><h1>LinkedIn</h1></a>
                                                <a href={item.team[parseInt(router.query.user.slice(0, 1))].redes.orcid} rel="noopener" target='_blank' className={`bg-gray-200 py-2 px-4 rounded-md text-color ${item.team[parseInt(router.query.user.slice(0, 1))].redes.orcid === null?'hidden':'block'} `}><h1>ORCID</h1></a>
                                                <a href={item.team[parseInt(router.query.user.slice(0, 1))].redes.ctvitae} rel="noopener" target='_blank' className={`bg-gray-200 py-2 px-4 rounded-md text-color ${item.team[parseInt(router.query.user.slice(0, 1))].redes.ctvitae === null?'hidden':'block'} `}><h1>CTI Vitae</h1></a>
                                                <a href={item.team[parseInt(router.query.user.slice(0, 1))].redes.researchgate} rel="noopener" target='_blank' className={`bg-gray-200 py-2 px-4 rounded-md text-color ${item.team[parseInt(router.query.user.slice(0, 1))].redes.researchgate === null?'hidden':'block'} `}><h1>ResearchGate</h1></a>
                                            </div>
                                        </div>                                
                                    </div>
                                    <h1 className='mt-32 font-bold text-color hidden lg:block'>{item.team[parseInt(router.query.user.slice(0, 1))].equipo}</h1>
                                </Fragment>
                            }
                        })
                    }
                </div>
            </main>
        </Layout>
    )
}