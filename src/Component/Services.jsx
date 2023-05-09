import React from 'react';
// icons    
import { BsArrowUpRight } from "react-icons/bs"
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const services = [
    {
        name: "WEB DEVELOPMENT",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque dolore ullam perspiciatis voluptatem! Natus dignissimos fuga eligendi nihil expedita eveniet dolore cumque explicabo, architecto, odio magni assumenda aspernatur deserunt! Provident!",
        link: "Learn More"
    },
    {
        name: "WEB DEVELOPMENT1",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque dolore ullam perspiciatis voluptatem! Natus dignissimos fuga eligendi nihil expedita eveniet dolore cumque explicabo, architecto, odio magni assumenda aspernatur deserunt! Provident!",
        link: "Learn More"
    },
    {
        name: "WEB DEVELOPMENT2",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque dolore ullam perspiciatis voluptatem! Natus dignissimos fuga eligendi nihil expedita eveniet dolore cumque explicabo, architecto, odio magni assumenda aspernatur deserunt! Provident!",
        link: "Learn More"
    },
    {
        name: "WEB DEVELOPMENT3",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque dolore ullam perspiciatis voluptatem! Natus dignissimos fuga eligendi nihil expedita eveniet dolore cumque explicabo, architecto, odio magni assumenda aspernatur deserunt! Provident!",
        link: "Learn More"
    },
    // {
    //     name: "WEB DEVELOPMENT4",
    //     Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque dolore ullam perspiciatis voluptatem! Natus dignissimos fuga eligendi nihil expedita eveniet dolore cumque explicabo, architecto, odio magni assumenda aspernatur deserunt! Provident!",
    //     link: "Learn More"
    // },
    // {
    //     name: "WEB DEVELOPMENT5",
    //     Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque dolore ullam perspiciatis voluptatem! Natus dignissimos fuga eligendi nihil expedita eveniet dolore cumque explicabo, architecto, odio magni assumenda aspernatur deserunt! Provident!",
    //     link: "Learn More"
    // },
]

export default function Services() {
    return (
        <section className="section" id="services">
            <div className="container mx-auto">
                <div className=' flex flex-col lg:flex-row'>
                    {/* {text} */}
                    <motion.div
                     variants={fadeIn("right", 0.3)}
                     initial="hidden"
                     whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
                    className="flex-1 lg:bg-about lg:bg-bottom  bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
                        <h2 className='h2 text-accent'>  What I DO </h2>
                        <h3 className='h3 max-w-[455px] mb-16'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eligendi pariatur? Minima quasi, est ipsa, fugiat ullam quibusdam voluptas in quod
                        </h3>
                        <button className='btn btn-sm'>See my work</button>
                    </motion.div>
                    < motion.div 
                     variants={fadeIn("left", 0.5)}
                     initial="hidden"
                     whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
                    className="flex-1">
                        <div>
                            {services.map((service, index) => {
                                const { name, Description, link } = service
                                return (
                                    <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                                        <div className='max-w-[476px]'> <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                                            <p className='font-secondary leading-tight'>{Description}</p>
                                        </div>
                                        <div className='flex flex-col flex-1 items-end'>
                                            <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center ' href="#">
                                                <BsArrowUpRight />
                                            </a>
                                            <a className='text-gradient text-sm' href="#">
                                                {link}
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </ motion.div>
                </div>
            </div>
        </section>
    )
}