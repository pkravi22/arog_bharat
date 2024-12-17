const CallNowButton = () => {
    const phoneNumber = "+1234567890"; // Replace with your desired phone number
  
    return (
      <div className="bg-customBlue py-6">
        <h1 className="text-white text-md font-bold mb-4">Confused? Call us</h1>
        <div>
        <a
          href={`tel:${+917752810581}`}
          className="bg-green-500 text-white font-bold py-2  px-2 md:px-4 rounded-3xl shadow-lg hover:bg-green-600 transition duration-300"
        >
          Call Now
        </a>
        </div>
       
      </div>
    );
  };
  
  export default CallNowButton;