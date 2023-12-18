
import profileimg from './../../../img/Firefly_20231209154000-removebg-preview.png'
const About = () => {
    return (
        <div id='about'>
            <h1 className="text-center text-4xl font-bold mb-10">About Me </h1>
            <div className=' flex flex-col-reverse  md:flex-row justify-center items-center gap-5 md:gap-20 '>
                <div className=' flex items-center justify-center'>
                    <img className='h-60 w-64' src={profileimg} alt="" />
                </div>
                <div className='w-[400px]'>
                    <p className=''>
                        Hello! I'm Nur Mohammad Sadek Ali, a MERN stack developer based in Dhaka, Bangladesh.
                        <br />
                        <br />
                        Currently pursuing a degree in Computer Science and Engineering from
                        <span className="text-blue-300 font-semibold"> Eastern University</span>. As a MERN
                        Stack Developer, I specialize in Node.js,Express.js , and MongoDB for
                        robust data management. On the front-end, I leverage React, 
                        Tailwind CSS  to create captivating and responsive web
                        applications, delivering exceptional user experiences. I excel in
                        collaborative settings, working seamlessly with cross-functional teams
                        to deliver exceptional web applications.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;