
import { motion } from 'framer-motion'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
    return (
        <div className='container mx-auto py-10 lg:px-5 w-full overflow-hidden' id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-blod mb-2 text-center'>Customer <span
                className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
            <p className='text-center text-gray-500 max-w-80 mb-12 mx-auto'>Real Stories from Those Who Found Home With Us</p>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[340px] shadow-lg rounded border border-gray-300 px-8 py-12 text-center'>
                        <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                        <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 mb-4 text-red-500 '>
                            {Array.from({ length: testimonial.rating }, (_, index) => (
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Testimonials
