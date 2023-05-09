import React from "react"
import { motion } from "framer-motion";

// import logo from "../images/logo.jpg";

import { fadeIn } from "../variants";
const Contact = () => {
    return (<>
        <section className="section py-16 lg:section" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">

                    <motion.div className="flex-1 flex justify-start  items-center "
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
                    ><div>
                            <h4 className="text-xl uppercase text-accent font-mediium mb-2 tracking-wide" >Get in touch</h4>
                            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">Let's work <br />together</h2>
                        </div>

                    </motion.div>
                    <motion.form
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 border rounded-2xl fex fex-col gap-y-6 pb-24  p-6  items-start">
                        <input type="text"
                            placeholder="Your Name"
                            className="bg-transparent border-0 border-b  py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" />
                        <input type="text"
                            placeholder="Your Email"
                            className="bg-transparent border-0 border-b  py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" />

                        <textarea className="bg-transparent border-0 border-b  py-12 outline-none w-full placeholder:text-white focus:border-accent resize-none transition-all" placeholder="Your Message" ></textarea>
                        <button className="btn btn-lg">Send Message</button>
                    </motion.form>
                </div>
            </div>
        </section>
    </>);
}

export default Contact;