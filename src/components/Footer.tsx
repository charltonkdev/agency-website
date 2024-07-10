'use client'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function Footer() {
    const listItemsRef = useRef([]);
    const spanItemsRef = useRef([]);

    useEffect(() => {
        const handleMouseEnter = (item: { querySelector: any; addEventListener?: (arg0: string, arg1: { (): void; (): void; }) => void; __enterHandler?: () => void; __leaveHandler?: () => void; }) => {
            const textInitial = item.querySelector('.initial');
            const textHover = item.querySelector('.hover');
            gsap.to(textInitial, {
                yPercent: -100,
                perspective: 1000,
                rotationX: 90,
                duration: 1,
                ease: 'power4.out',
            });
            gsap.to(textHover, {
                yPercent: 0,
                perspective: 1000,
                rotationX: 0,
                duration: 1,
                ease: 'power4.out',
            });
        };

        const handleMouseLeave = (item: { querySelector: any; addEventListener?: (arg0: string, arg1: { (): void; (): void; }) => void; __enterHandler?: () => void; __leaveHandler?: () => void; }) => {
            const textInitial = item.querySelector('.initial');
            const textHover = item.querySelector('.hover');
            gsap.to(textInitial, {
                yPercent: 0,
                perspective: 1000,
                rotationX: 0,
                duration: 1,
                ease: 'power4.out',
            });
            gsap.to(textHover, {
                yPercent: 100,
                perspective: 1000,
                rotationX: -90,
                duration: 1,
                ease: 'power4.out',
            });
        };

        const addEventListeners = (item: { querySelector: (arg0: string) => any; addEventListener: (arg0: string, arg1: { (): void; (): void; }) => void; __enterHandler: () => void; __leaveHandler: () => void; }) => {
            const textHover = item.querySelector('.hover');
            gsap.set(textHover, { yPercent: 100, perspective: 1000, rotationX: -90 });

            const enterHandler = () => handleMouseEnter(item);
            const leaveHandler = () => handleMouseLeave(item);

            item.addEventListener('mouseenter', enterHandler);
            item.addEventListener('mouseleave', leaveHandler);

            // Store handlers to remove them later
            item.__enterHandler = enterHandler;
            item.__leaveHandler = leaveHandler;
        };

        const removeEventListeners = (item: { removeEventListener: (arg0: string, arg1: any) => void; __enterHandler: any; __leaveHandler: any; }) => {
            item.removeEventListener('mouseenter', item.__enterHandler);
            item.removeEventListener('mouseleave', item.__leaveHandler);
        };

        listItemsRef.current.forEach(addEventListeners);
        spanItemsRef.current.forEach(addEventListeners);

        return () => {
            listItemsRef.current.forEach(removeEventListeners);
            spanItemsRef.current.forEach(removeEventListeners);
        };
    }, []);

    return (
        <footer className="flex relative flex-col container py-12 h-screen justify-evenly">
            <div className='flex flex-col'>
                <ul className="flex flex-col gap-5 uppercase w-24">
                    {['About', 'Services', 'Works', 'Contact'].map((text, index) => (
                        <li
                            key={index}
                            ref={(el) => (listItemsRef.current[index] = el)}
                            className="relative overflow-hidden h-5 cursor-pointer"
                        >
                            <span className="block initial absolute top-0 left-0 w-full h-full">{text}</span>
                            <span className="block hover absolute top-0 left-0 w-full h-full">{text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-full relative overflow-hidden group/line py-12'>
                <h1 className='w-full text-[15vw] uppercase leading-none'>Let&apos;s Talk</h1>
                <span className='block w-full bg-white h-3 -translate-x-full group-hover/line:translate-x-0 duration-500' />
            </div>
            <div className='w-full flex flex-col md:flex-row gap-10 justify-between'>
                <div className='flex gap-10 uppercase'>
                    <div className=' relative overflow-hidden group/line cursor-pointer'>
                        <h1 className='leading-none pb-2'>mail</h1>
                        <span className='block bg-white h-[2px] -translate-x-full group-hover/line:translate-x-0 group-hover/line:opacity-100 opacity-0 duration-500' />
                    </div>
                    <div className=' relative overflow-hidden group/line cursor-pointer'>
                        <h1 className='leading-none pb-2'>github</h1>
                        <span className='block bg-white h-[2px] -translate-x-full group-hover/line:translate-x-0 group-hover/line:opacity-100 opacity-0 duration-500' />
                    </div>
                    <div className=' relative overflow-hidden group/line cursor-pointer'>
                        <h1 className='leading-none pb-2'>linkedin</h1>
                        <span className='block bg-white h-[2px] -translate-x-full group-hover/line:translate-x-0 group-hover/line:opacity-100 opacity-0 duration-500' />
                    </div>
                </div>
                <div className='flex gap-10 uppercase'>
                    <span>2024 © CharltonK.dev</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
