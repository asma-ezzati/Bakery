import aboutpic from '../assets/about.jpg'

const About=()=>{
    return(
        <section id="about" className="py-12 px-4 md:px-16">
            <div className="flex flex-col items-center justify-center gap-4 p-4 md:flex-row md:gap-8">
            <img src={aboutpic} alt="About Us" className="w-2xl  rounded-lg shadow-lg"></img>
            <div>
            <h1 className="text-amber-950 text-2xl font-bold text-center md:text-left">Baked Fresh Every Morning, Made with Love</h1>
            <p className="text-amber-800 text-center md:text-left">Our bakery began with a simple idea: good bread takes time, care, and honest ingredients. Every morning before sunrise, our bakers start kneading, shaping, and baking so that your table is filled with warm, freshly made treats.</p>
            <p className="text-amber-800 text-center md:text-left">We use only natural ingredients and traditional recipes passed down with passion. From golden croissants to rich chocolate pastries, everything we make is crafted to bring a little joy to your day.</p>
            </div>
            </div>

        </section>
    )
}
export default About