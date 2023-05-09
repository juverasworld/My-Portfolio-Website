import React from "react";
import { motion } from "framer-motion";

import logo from "../images/logo.jpg";

import { fadeIn } from "../variants";
const Work = () => {
    return (<>
        <section className="section" id="work">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row  gap-x-10">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex-col flex gap-y-12  mb-10 lg:mb-0">
                        <div>
                            <h2 className="h2 leading-tight text-accent"> My Latest <br />Works </h2>

                            <p className="max-w-sm mb-16"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid amet sit tempora quod accusantium quia aspernatur vel qui quam molestias molestiae iusto, nobis quasi alias. Qui iusto necessitatibus quaerat dolor.</p>
                            <button className="btn btn-sm "> View all Projects</button>
                        </div>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl" >
                            <div className=" group-hover:bg-black/70 w-full h-full absolute z-40  transition-all duration-300"></div>
                            <img className=" group-hover:scale-125 transition-qll duration-500 " src={logo} alt="" />

                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 "><span className="text-gradient">UI?UX</span> </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">Project Title</span>

                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col  gap-y-10"><div className="group relative overflow-hidden border-2 border-white/50 rounded-xl" >
                            <div className=" group-hover:bg-black/70 w-full h-full absolute z-40  transition-all duration-300"></div>
                            <img className=" group-hover:scale-125 transition-qll duration-500 " src={logo} alt="" />

                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 "><span className="text-gradient">UI?UX</span> </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">Project Title</span>

                            </div>
                        </div>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl" >
                            <div className=" group-hover:bg-black/70 w-full h-full absolute z-40  transition-all duration-300"></div>
                            <img className=" group-hover:scale-125 transition-qll duration-500 " src={logo} alt="" />

                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 "><span className="text-gradient">UI?UX</span> </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">Project Title</span>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

        </section>
    </>);
}

export default Work;