
const Dishwasher = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/blog4.webp")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">How to Wash the Dishwasher</h1>
        </div>
      </section>

      <div className="font-sans antialiased text-gray-800 bg-white p-4 max-w-6xl mx-auto">
        <header className="mb-4">
          <p className="text-red-600">Created on: April 27, 2023</p>
        </header>

        <section className="text-lg mb-10">
          <p className="py-3">Have a machine dishwasher it is very helpful, we there is a lot of work left when it comes to having that wash the dishes and it is an important resource to save water.<br></br>Like than the washing machine, it is essential to maintain the dishwasher clean and in good conditions to maximize the washing potential and its good operation. Tea we left here these simple cleaning steps and tips you dishwasher.
          </p>
          <p className="py-3">Although this constantly exposed to soap and water hot machine dishwasher does not clean itself by the simple fact of throwing it to walk. The remains of grease, food and undissolved detergent accumulate , which over time they cause bad smell, stagnation and will that you slab is poorly washed.
          </p>
        </section>

        {/* Ajuste de la imagen */}
        <div className="md:w-2/3 pb-12">
          <img src="/blog4.webp" alt="Dishwasher Cleaning" className="w-full rounded-lg mb-4" />
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-7">As clean you dishwasher:</h2>
          <ul className="list-inside text-lg list-decimal pb-10">
            <li className="py-2">Remove food debris after each use with paper towel. </li>
            <li className="py-2">A once a week the drain of the Dishwasher with a little dishwasher. In this way you avoid jams and obstructions in the pump and bad smells.</li>
            <li className="py-2">Eliminates grease and food debris that are left at the door with an anti-grease. Clean the top and sides. Scrub around the door with a brush submerged in water hot soapy, passing by all the spaces to guarantee that out all the dirt.</li>
            <li className="py-2">Take out the shelves and compartments, remove the remains of food and clean equal than in the previous step.</li>
            <li className="py-2">Happens a microfiber cloth soaked in dishwasher by the rubber and the frame of the door. Do not forget the rubber at the bottom of the door, it is a zone where is usually accumulate mold.</li>
            <li className="py-2">Remove and rinse the filter all the weeks. If the filter this stuck, dirt will stay permanently giving laps inside. Can extract it and wash it under water and the help of a brush. rub gently to remove all residue.</li>
            <li className="py-2">After that you finish cleaning everything, place a capsule select the highest temperature program that Get the machine and start it up. This Cascade cleaner helps to remove scale, grease and odors that are formed in the machine.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-7">Tips for Good Maintenance of your Dishwasher:</h2>
          <ul className="list-disc list-inside text-lg pb-10">
            <li>After each washed leave the door open by about 15 minutes, this tea it will help to aerate the machine and reduce humidity.</li>
            <li>Don’t put too many dishes: if you put many plates and no left good accommodated, can pass that they do not wash well and can even break. Place them with the space suitable to each other.</li>
            <li>Close the lid: do not leave the lid of the Detergent open before starting the wash cycle, since that if you don’t close it, the soap goes away directly to the pipe.</li>
            <li>Uses dishwasher salt: yes have glasses that end up with water stains hard and tartar tea recommend wear salt anti tartar, which It is used to soften the water.</li>
            <li>Avoid add a lot of detergent to wash , this will not leave the dishes further clean and the most probable is that finish with plates covered with a soap layer.</li>
            <li>Uses products special for dishwashers: do not use soap regular liquid now that does too much foam and it can to damage your machine.</li>
            <li>The heaviest goes below: the pots, pans and dishes always must go to the bottom already that is the most machine resistant.</li>
          </ul>
          <p className="text-lg mt-4 font-medium">By following these steps and tips, you can keep your dishwasher clean and functioning efficiently, ensuring your dishes are always spotless.</p>
        </section>
      </div>
    </>
  );
};

export default Dishwasher;