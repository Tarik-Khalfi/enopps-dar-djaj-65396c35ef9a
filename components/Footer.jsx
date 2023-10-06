'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const [active, setactive] = useState('')
    return (
        <footer className='lg:container relative z-50  lg:space-y-16 px-4 lg:py-10 pb-10 ' >
            <div className='lg:container space-y-7 font-poppins lg:grid grid-cols-12 py-10  items-start'>
                <div className=" col-span-6 space-y-2 lg:space-y-6">
                    <Image src='/assets/logo/logo.svg' alt="logo" width={70} height={70} />
                    <p className='lg:w-[460px] leading-9 pt-5 font-poppins text-[#A1A1A1]'>Dar D&apos;jaj HayMohammadi, Agadir. <br /> Spécialistes de la cuisson du poulet depuis 1978, nous mettons notre art au service de vos papilles😋
                    </p>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <a className='divv' href="https://web.facebook.com/DarDjajAgadir/">
                                <svg className='m-auto w-[26px]   ' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path className='duration-500' d="M44.165 4.16687H5.83171C4.90983 4.16687 4.16504 4.91166 4.16504 5.83354V44.1669C4.16504 45.0887 4.90983 45.8335 5.83171 45.8335H44.165C45.0869 45.8335 45.8317 45.0887 45.8317 44.1669V5.83354C45.8317 4.91166 45.0869 4.16687 44.165 4.16687ZM39.3525 16.3283H36.0244C33.415 16.3283 32.9098 17.5679 32.9098 19.3908V23.4065H39.139L38.3265 29.6929H32.9098V45.8335H26.415V29.6981H20.9827V23.4065H26.415V18.771C26.415 13.3908 29.7015 10.4585 34.5036 10.4585C36.8057 10.4585 38.7796 10.6304 39.3577 10.7085V16.3283H39.3525Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-primary rounded-sm  w-fit m-auto duration-500 bg-[#AAA] block' href="//wa.me/+212626950023 " target='_blanc'>
                                <Image src='/1384023.png' width={24} height={200} alt='' />
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-primary rounded-sm  w-fit m-auto duration-500 bg-[#AAA] block' href="https://www.instagram.com/dar.djaj/ " target='_blanc'>
                                <Image src='/instagram-coreui-icons-v1-0-0.png' width={24} height={200} alt='' />
                            </a>
                        </li>
                        <li>

                        </li>

                    </ul>
                </div>
                <div className='col-span-2 flex flex-col  lg:space-y-5'>
                    <h3 className='lg:text-3xl text-2xl font-semibold'>Menu</h3>
                    <div className='border-t mt-3 ml-1 mb-7 border-[#F09804E5] px-6 border-2  transition-all duration-100  w-fit' />
                    <ul className=" space-y-5 text-base">
                        <li>
                            <Link onClick={() => setactive('home')} className={`${active === 'home' ? 'text-white' : 'text-[#A1A1A1]'}`}
                                href='/'>Accueil</Link>
                        </li>
                        <li>
                            <Link onClick={() => setactive('menu')} className={`${active === 'menu' ? 'text-white' : 'text-[#A1A1A1]'}`}
                                href='/menu'>La Carte</Link>
                        </li>
                        <li>
                            <Link onClick={() => setactive('contact')} className={`${active === 'contact' ? 'text-white' : 'text-[#A1A1A1]'}`}
                                href='/contact'>Nous Contacter</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-span-3 flex flex-col  lg:space-y-5'>
                    <h3 className='lg:text-3xl text-2xl font-semibold'>Nos Informations</h3>
                    <div className='border-t mt-3 ml-1 mb-7 lg:m-0 border-[#F09804E5] px-6 border-2 transition-all duration-100  w-fit' />
                    <ul className=" space-y-5 lg:space-y-5 text-base text-[#A1A1A1]">
                        <li className=' flex gap-3 items-start '>
                            <span className='font-bold lg:text-2xl text-white '>A.</span>
                            <p>
                                Résidence jardins de Souss 3 imm49 mag 22,  Hay Mohamadi Agadir 80080
                            </p>
                        </li>
                        <li className=' flex gap-3 items-end'>
                            <span className='font-bold lg:text-2xl text-white'>T.</span>
                            <p>0528230088</p>
                        </li>
                        <li className=' flex gap-3 items-end'>
                            <span className='font-bold lg:text-2xl text-white'>M.</span>
                            <p>contact@dardjaj.ma</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='text-[#A1A1A1] flex gap-1 border-t w-2/3 lg:w-full lg:pt-10 pt-9 border-[#a1a1a144]'>
                <p>©</p> <p>Copyright Dar d’jaj 2023, All right reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
