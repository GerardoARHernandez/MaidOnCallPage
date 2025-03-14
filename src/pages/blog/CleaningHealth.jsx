

const CleaningHealth = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/blog-12.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">How to Clean Your Mattress</h1>
        </div>
      </section>

      <div className="font-sans antialiased text-gray-800 bg-white p-4 max-w-6xl mx-auto">
        <header className="mb-4">
          <p className="text-red-600">Created on: March 11, 2023</p>
        </header>

        <section className="text-lg mb-10">
            <p className="py-3">Many times, we ignore the number of health and safety benefits that having a clean house gives us, even more so if we live with more people and children. Perhaps it is something that gives us the impression that it is not so serious, but it is always better to be safe than sorry, and just as it is in the details where a small carelessness can risk the safety of your home, also maintaining hygiene ensures better health to all.</p>

            <div className="md:w-1/2 pt-3 pb-6">
                <img src="/blog-11.webp" alt="Mattress Cleaning" className="w-full rounded-lg mb-4 shadow-sm" />
            </div>

            <h2 className="py-4 text-2xl font-semibold">1. Security</h2>
            <p className="py-4">We can apply basic security measures in our homes to avoid possible accidents and have a safe environment for the people who live in it. We explain some of them:</p>

            <h3 className="py-4 text-xl font-semibold pt-3">Home appliances:</h3>
            <p className="py-2">Keeping our household appliances clean can prevent accidents. From the plug to the inside of the appliance and the electrical area must be kept free of dust and dirt to avoid electrical failures. When cleaning an electrical appliance, from the refrigerator to a television, always turn it off and if possible, unplug it. Make sure the appliances are properly installed. For example, if you have a clothes dryer, check the lint filters, and keep them clean, since if they get clogged, they can burn with the heat and additionally the motor can burn. The same with machines that use water and electricity, such as washing machines and dishwashers, make sure that they are well installed and that the water outlet hose never comes into contact with the electrical part. Never handle electronic devices with wet hands or near liquids.</p>

            <h3 className="py-4 text-xl font-semibold pt-3">Kitchen:</h3>
            <p className="py-2">In the kitchen, it is where more accidents occur because hot liquids and materials are used in the preparation of food. On the other hand, it is in this place where spills of all kinds occur that can be dangerous. For the same reason we recommend: Sweep and mop the kitchen floor after you’ve finished cooking. Clean the grease that accumulates in the kitchen, hood, ceramics and walls. This is very important because the fat catches fire when there is a fire nearby. The same on the grill, especially in the lower tray where the fat falls on gas grills. When we cook with oil, splashes usually occur because the boiling oil reacts with the water, so many times when placing food that contains water in the pan, the oil splashes. One option to avoid this is to put a pot lid on the pan so you don’t burn yourself or stain everything with oil. Another trick is to add a bit of salt where the bubbles come out, the salt falls to the bottom of the pan, trapping the water so it stops splashing. Be careful with the handling of raw foods and the kitchen elements you use to prepare them; raw meats contain bacteria and toxins that are dangerous to health. Tables, knives, and countertops must be disinfected after handling this type of food.</p>

            <h3 className="py-4 text-xl font-semibold pt-3">Order:</h3>
            <p className="py-4">Clutter can be very dangerous in an emergency: any dropped object can hinder and delay a quick exit. Cleanliness and order free up spaces and prevent risks of falls and trips</p>

            <div className="md:w-1/2 pt-3 pb-6">
                <img src="/cleaning-3.webp" alt="Mattress Cleaning" className="w-full rounded-lg mb-4 shadow-sm" />
            </div>

            <h2 className="py-4 text-2xl font-semibold">2. Health:</h2>
            <p className="py-2">Keeping the house clean decreases, the chances of contracting diseases: people who live in an unsanitary environment are more susceptible to diseases caused by bacteria, allergens or pests. Some care that we recommend you review are: Regular cleaning of our house is the best way to prevent allergies. Shaking or vacuuming often decreases breathing problems in people with allergies, asthma, or other respiratory problems by relieving them. On the other hand, we must worry about eliminating the sources of mould in our houses. </p>
            <p className="py-2">The presence of humidity and mould is one of the factors that can cause allergies the most. To avoid this, we must ventilate the spaces most prone to developing humidity, such as cellars, kitchens, and bathrooms, and ventilate them periodically. You should pay special attention to the bathroom, where many surfaces and objects can develop bacteria due to humidity. Air renewal and correct disinfection are essential. </p>
            <p className="py-2">When it comes to mental health, the simple act of cleaning a house can help relieve stress. Actions such as sweeping or washing the dishes help us disconnect from issues that may concern us. Having a clean and tidy house generates a feeling of calm and well-being. The cleaning process has been recognized worldwide as an action that provides benefits for mental health. Helps release frustration, anger, and anxiety. As you can see, incorporating some basic hygiene measures in your home is essential to reduce the chances of having accidents and illnesses, improving our quality of life.</p>
            
        </section>

        
      </div>
    </>
  )
}

export default CleaningHealth