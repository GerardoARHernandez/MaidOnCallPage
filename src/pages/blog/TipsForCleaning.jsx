const TipsForCleaning = () => {
    return (
      <>
        {/* Hero Section */}
        <section
          className="relative w-full h-64 flex items-center justify-center"
          style={{
            backgroundImage: 'url("/blog1.webp")', // Reemplaza con tu imagen
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
            <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
            <div className="relative z-10 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Tips for Cleaning and Disinfecting Your Garbage Collector</h1>
            </div>
        </section>
  
        <div className="font-sans antialiased text-gray-800 bg-white p-4 max-w-6xl mx-auto">
            <header className="mb-4">
                <p className="text-red-600">Created on: May 21, 2023</p>
            </header>
  
            <section className="text-lg mb-10">
                <p className="py-3">
                    Cleaning the garbage area is an essential task in our homes, even though it may not be the most pleasant one. Developing the habit of cleaning the garbage area frequently will make this chore less unpleasant.
                    Since we generate a significant amount of waste, especially when it is wet, it is important to take out the trash ideally on a daily basis. However, it is not enough to just do that.
                </p>
                <p className="py-3">
                    Wet waste, in particular, gets transferred to the surface of the garbage collector, creating a perfect breeding ground for bacteria and germs. This not only leads to bad odors but can also harm our health. By paying attention to the cleaning of the garbage area, we can prevent these problems and make the task less unpleasant.
                </p>
                <p className="py-3">
                    The garbage area of our house is constantly exposed to food remains, grease, packaging, and all types of waste, which generate germs and bacteria that produce unpleasant smells over time. Additionally, the accumulation of garbage releases a liquid resulting from the natural decomposition of waste.
                </p>
                <p className="py-3">
                    This liquid, known as leachate or percolate, is similar to domestic wastewater but much more concentrated. If you find this black liquid at the bottom of the garbage collector, it’s important to take immediate action by emptying the trash and performing a thorough cleaning and disinfection.
                </p>
                <p className="py-3">
                    Separating the garbage is always the best solution, not only to reduce waste but also to keep your garbage area cleaner. When recycling our waste, it’s important to wash the items properly for correct recycling.
                    By separating and cleaning plastic, glass, paper, etc., we can significantly reduce hygiene problems. On the other hand, making compost with organic waste also helps to reduce waste and prevent the putrefaction of food remains in our garbage.
                </p>
            </section>

            {/* Ajuste de la imagen */}
            <div className="md:w-2/3 pb-12">
                <img src="/blog1.webp" alt="" className="w-full rounded-lg mb-4" />
            </div>
  
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Step by step to clean your garbage bin</h2>
                <ul className="list-inside text-lg list-decimal pb-10">
                    <li>Use plastic gloves to protect your hands from bacteria.</li>
                    <li>Remove the garbage and if there are any remaining items that can be picked up by hand, take the opportunity to dispose of them as well.</li>
                    <li>Apply a disinfectant product to the entire surface and let it sit for a few minutes to take effect.</li>
                    <li>With a wet cloth, scrub the inside and outside of the garbage bin, paying extra attention to corners and small areas to remove any residue.</li>
                    <li>If there are stubborn waste stuck to the garbage collector, use a degreaser to loosen them. Sanitol and Lysol are disinfectant brands that offer degreaser products.</li>
                    <li>Rinse the bin thoroughly with a wet cloth and then dry it thoroughly with a paper towel. Excess moisture promotes the proliferation of bacteria.</li>
                </ul>
            </section>
  
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Tips to maintain a clean garbage bin</h2>
                <ul className="list-disc list-inside text-lg pb-10">
                    <li>It is ideal for the garbage bin to have a lid to prevent odors from escaping. Using a pedal-operated bin can help avoid direct contact with the trash.</li>
                    <li>Use high-quality garbage bags that are the right size for your bin.</li>
                    <li>Do not throw liquids into the trash.</li>
                    <li>To maintain cleanliness for a longer time, place a disinfectant towel at the bottom of the bin before putting in the bag.</li>
                </ul>
                <p className="text-lg mt-4">We hope these tips help you maintain good hygiene in your kitchen and home!</p>
            </section>

            <div className="md:w-1/4 pb-12">
                <img src="/Tips-for-cleaning.webp" alt="" className="w-full rounded-lg mb-4" />
            </div>
        </div>
      </>
    );
  };
  
  export default TipsForCleaning;