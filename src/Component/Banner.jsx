import React from 'react';

import logo from "../images/logo.jpg"

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { FadeIn, fadeIn } from "../variants"

const Banner = () => {
    return (<>
        <section className='min-h-[85vh] lg:min-h-[78vh] flex  items-center' id="home">
            <div className="container mx-auto">
                <div className='flex flex-col gap-y-8 lg:flex-row  lg:items-center lg:gap-x-12 '>

                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1 
                        variants={fadeIn("up", 0.3)} 
                        initial="hidden"
                        whileInView={'show'} viewport={{once:false, amount:0.7}} className='text-[45px] font-bold leading-[0.8] lg:text-[100px] '>OBASI <span>VERA</span></motion.h1>

                        <motion.div
                         variants={fadeIn("up",0.4)} 
                         initial="hidden"
                         whileInView={'show'} viewport={{once:false, amount:0.7}} 
                        className='mb-6 text-[26px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'><span className='text-white  mr-4'>I am a </span>
                            <TypeAnimation sequence={[
                                "Developer",
                                2000,
                                "COntent Writer",
                                2000,
                                "Blockchain",
                                2000
                            ]}
                                speed={50}
                                className="text-accent"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>

                        <motion.p className=' mb-8 max-w-lg mx-auto  lg:mx-0'
                         variants={fadeIn("up",0.5)} 
                         initial="hidden"
                         whileInView={'show'} viewport={{once:false, amount:0.7}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vero illo error tempore nulla delectus voluptatem recusandae, animi cum harum, voluptates provident, eveniet nobis soluta odio distinctio. Delectus, porro ipsam.</motion.p>
                        <motion.div 
                         variants={fadeIn("up",0.6)} 
                         initial="hidden"
                         whileInView={'show'} viewport={{once:false, amount:0.7}} 
                        className=' flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'><button className='btn btn-lg'>Contact Me</button>
                            <a href="#" className='text-gradient btn-link'> My Portfolio</a></motion.div>

                        <motion.div 
                         variants={fadeIn("up",0.7)} 
                         initial="hidden"
                         whileInView={'show'} viewport={{once:false, amount:0.7}} 
                        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href="#"> <FaLinkedin /></a>
                            <a href="#"> <FaGithub /></a>
                            <a href="#"> <FaTwitter /></a>
                        </motion.div>
                    </div>
                    <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'
                     variants={fadeIn("down",0.5)} 
                     initial="hidden"
                     whileInView={'show'}  
                    >
                        <img src={logo} alt="" className='w-[100%]' />
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Banner;