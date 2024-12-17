const Hero = () => {
  return (
    <section className="bg-[url('/src/assets/hero.png')] flex flex-col bg-cover  sm:justify-center  bg-center text-white text-center sm:text-left  py-20 sm:px-36 ">
      <h1 className=" text-5xl sm:text-6xl  pt-2 sm:pt-20 ">Arog Bharat</h1>
      <div >
      <span className="text-sm sm:text-2xl text-red-800 mb-0">Reverse the disease, </span>
      <span className="text-sm sm:text-2xl text-green-800 mb-0">Live with ease</span>
      </div>
      
      <br />
      <a href="#services"><button  id="#offering" className="bg-customBlue px-0 py-2  my-8  w-[296px] text text-white rounded-3xl hover:bg-blue-700">

Start Your Journey
</button></a>
      
      <h3 className="text-lg py-4  mb-0">20k+ Yoga Learners</h3>
      <div className="flex   justify-center sm:justify-start  my-2">
        <img
          src="/path/to/instagram-images.jpg"
          alt="I"
          className="w-12 h-12 rounded-full -mr-2 bg-white"
        />
        <img
          src="/path/to/instagram-images2.jpg"
          alt="I"
          className="w-12 h-12 rounded-full -mr-2 bg-white"
        />
        <img
          src="/path/to/instagram-images3.jpg"
          alt="I"
          className="w-12 h-12 rounded-full -mr-2 bg-white"
        />
        <img
          src="/path/to/instagram-images4.jpg"
          alt="I"
          className="w-12 h-12 rounded-full -mr-2 bg-white"
        />
        <img
          src="/path/to/instagram-images5.jpg"
          alt="I"
          className="w-12 h-12 rounded-full bg-white"
        />
      </div>

      <p className=" w-full sm:w-[500px] h-[100px] text-center sm:text-left px-4">
        Begin your journey to holistic wellness and self-discovery with our
        therapeutic solutions, guiding you toward a healthier
      </p>
    </section>
  );
};

export default Hero;
