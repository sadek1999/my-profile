

const Banner = () => {
    return (
        <div id="home" className='flex flex-col md:flex-row min-h-screen justify-center items-center  '>
            <div className="space-y-2 w-full lg:w-1/2 lg:pl-20 ">
                <h1 className=" text-2xl lg:text-4xl font-bold">Nur Mohammad Sadek Ali</h1>
                <p className="text-xl"> ---MERN stack developer</p>
                <p className=" w-96 pt-8 pb-6 text-xl">I am a MERN Stack developer base in Dhaka,Bangladesh ,with proficiency in a wide range of modern web technologies</p>
                <button className="btn btn-outline btn-info ">Download resume</button>

            </div>
            {/* <div className=" w-full lg:w-1/2 ">
                <img src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/194752812/original/7802a9355c3d1ebe05c0e0cfe28fad3f9aac9a40/develop-full-stack-web-applications-using-mern-stack.jpeg' alt="" />
            </div> */}
        </div>
    );
};

export default Banner;