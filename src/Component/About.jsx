import React from "react";
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants"


const About = () => {
    const [ref, InView] = useInView({
        threshold: 0.5,
    })
    return (
        <>
            <section className="section" id="about" ref={ref}>
                <div className="container mx-auto">
                    <div className="flex  flex-col gap-y-10  lg:flex-row lg:items-center  lg:gap-x-20 lg:gap-y-0 h-screen ">
                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
                            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
                        <motion.div 
                        variants={fadeIn("left",0.5)} 
                        initial="hidden"
                        whileInView={'show'} viewport={{once:false, amount:0.7}} 
                        className="flex-1">
                            <h2 className=" h2  font-bold text-accent" >About Me</h2>
                            <h3 className="h3 mb-4">I am a Freelance Frontend Developer almmost a year of experience</h3>
                            <p className="mb-6" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, esse eos optio voluptatibus illum aspernatur temporibus sequi debitis commodi pariatur incidunt, totam sed veritatis assumenda voluptatem expedita iusto ut eius.</p>
                            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                                <div >
                                    <div className=" text-[40px] font-tertiary text-gradient mb-2">
                                        {InView ?
                                            <CountUp start={0} end={10} duration={3} /> : null}

                                    </div>
                                    <div className="font-primary text-sm tracking-[2px]">
                                        Months as <br /> a Developer
                                    </div>
                                </div>
                                <div >
                                    <div className=" text-[40px] font-tertiary text-gradient mb-2">
                                        {InView ?
                                            <CountUp start={0} end={25} duration={3} /> : null}

                                    </div>
                                    <div className="font-primary text-sm tracking-[2px]">
                                        Projects <br /> Completed
                                    </div>
                                </div>
                                <div >
                                    <div className=" text-[40px] font-tertiary text-gradient mb-2">
                                        {InView ?
                                            <CountUp start={0} end={30} duration={3} /> : null}
                                        +
                                    </div>
                                    <div className="font-primary text-sm tracking-[2px]">
                                        Customer <br /> Review
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-lg">Contact Me</button>
                                <a href="#" className="text-gradient btn-link"> My Resume</a>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>
        </>);
}

export default About;