import React from 'react'
import Image from 'next/image'

const SocialM = () => {
    return (
        <section>
            <div className='grid lg:grid-cols-4 grid-cols-2 transition-all  container lg:h-[200px] '>
                <div className='lg:p-20 p-16  lg:border-r divv   border-[#aaaaaa6b]  items-center'>
                    <a href="https://web.facebook.com/people/Dar-Djaj-HayMohammadi/61550976088422/" target='_blank'>
                        <svg className='m-auto ' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path className='duration-500' d="M44.165 4.16687H5.83171C4.90983 4.16687 4.16504 4.91166 4.16504 5.83354V44.1669C4.16504 45.0887 4.90983 45.8335 5.83171 45.8335H44.165C45.0869 45.8335 45.8317 45.0887 45.8317 44.1669V5.83354C45.8317 4.91166 45.0869 4.16687 44.165 4.16687ZM39.3525 16.3283H36.0244C33.415 16.3283 32.9098 17.5679 32.9098 19.3908V23.4065H39.139L38.3265 29.6929H32.9098V45.8335H26.415V29.6981H20.9827V23.4065H26.415V18.771C26.415 13.3908 29.7015 10.4585 34.5036 10.4585C36.8057 10.4585 38.7796 10.6304 39.3577 10.7085V16.3283H39.3525Z" fill="#AAAAAA" />
                        </svg>
                    </a>
                </div>
                <div className='lg:p-20 p-16  lg:border-r divv border-[#aaaaaa6b] '>
                    <a className='hover:bg-primary rounded-lg p-1 w-fit m-auto duration-500 bg-[#AAA] block' href="https://www.tripadvisor.fr/Restaurant_Review-g293731-d12227987-Reviews-Dar_D_jaj-Agadir_Souss_Massa.html" target='_blanc'>
                        <Image src='/tripadvisor.svg' width={35} height={20} className=' ' alt='' />
                    </a>
                </div>
                <div className='lg:p-20 p-16  lg:border-r divv border-[#aaaaaa6b]  '>
                    <a href="https://www.instagram.com/dar.djaj/" target='_blanck'>
                        <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path className='duration-500' d="M24.9934 18.0529C21.1679 18.0529 18.046 21.1748 18.046 25.0003C18.046 28.8258 21.1679 31.9477 24.9934 31.9477C28.8189 31.9477 31.9408 28.8258 31.9408 25.0003C31.9408 21.1748 28.8189 18.0529 24.9934 18.0529ZM45.8304 25.0003C45.8304 22.1234 45.8565 19.2725 45.6949 16.4008C45.5333 13.0652 44.7724 10.1048 42.3332 7.6657C39.8889 5.22134 36.9338 4.46562 33.5982 4.30405C30.7212 4.14248 27.8703 4.16854 24.9986 4.16854C22.1217 4.16854 19.2708 4.14248 16.3991 4.30405C13.0635 4.46562 10.1031 5.22655 7.66399 7.6657C5.21963 10.1101 4.46391 13.0652 4.30234 16.4008C4.14077 19.2777 4.16683 22.1286 4.16683 25.0003C4.16683 27.8721 4.14077 30.7282 4.30234 33.5999C4.46391 36.9355 5.22484 39.8958 7.66399 42.335C10.1083 44.7793 13.0635 45.535 16.3991 45.6966C19.276 45.8582 22.1269 45.8321 24.9986 45.8321C27.8756 45.8321 30.7264 45.8582 33.5982 45.6966C36.9338 45.535 39.8941 44.7741 42.3332 42.335C44.7776 39.8906 45.5333 36.9355 45.6949 33.5999C45.8617 30.7282 45.8304 27.8773 45.8304 25.0003ZM24.9934 35.6898C19.0779 35.6898 14.3039 30.9158 14.3039 25.0003C14.3039 19.0849 19.0779 14.3108 24.9934 14.3108C30.9089 14.3108 35.6829 19.0849 35.6829 25.0003C35.6829 30.9158 30.9089 35.6898 24.9934 35.6898ZM36.1207 16.3695C34.7396 16.3695 33.6242 15.2542 33.6242 13.873C33.6242 12.4919 34.7396 11.3765 36.1207 11.3765C37.5019 11.3765 38.6172 12.4919 38.6172 13.873C38.6176 14.201 38.5533 14.5258 38.428 14.8289C38.3027 15.1319 38.1188 15.4073 37.8869 15.6392C37.655 15.8711 37.3796 16.055 37.0766 16.1803C36.7735 16.3056 36.4487 16.3699 36.1207 16.3695Z" fill="#AAAAAA" />
                        </svg>
                    </a>
                </div>

                <div className='lg:p-20 p-16   divv  '>
                    <a className='hover:bg-primary rounded-lg p-1 w-fit m-auto duration-500 bg-[#AAA] block' href="//wa.me/+212626950023 " target='_blanc'>
                        <Image src='/1384023.png' width={35} height={20} className=' ' alt='' />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default SocialM