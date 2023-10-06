import { Contact, Footer, HeaderProp, Menu, Nav, SocialM } from '@/components'
import Image from 'next/image'

export default function Home() {
    return (
        <main className='blackb  lg:space-y-20'>
            <section className='bg-[url("/Rectangle2.png")] space-y-[100px] bg-cover bg-no-repeat'>
                <Nav />
                <HeaderProp font='font-poppins' text='Nous contacter' />
            </section>
            <Contact />
            <Menu />
            <SocialM />
            <section>
                <iframe
                    className='w-full h-[700px]'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.53827682547006!2d-9.569650014026001!3d30.43644259329542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b79c4db41773%3A0x14274dfe2f39efd1!2sDar%20D&#39;jaj!5e0!3m2!1sar!2sma!4v1696497152345!5m2!1sar!2sma" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

        </main>
    )
}
