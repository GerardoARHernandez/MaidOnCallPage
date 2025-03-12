

const CleanMattress = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/blog3.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-45"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">How to Clean Your Mattress</h1>
        </div>
      </section>

      <div className="font-sans antialiased text-gray-800 bg-white p-4 max-w-6xl mx-auto">
        <header className="mb-4">
          <p className="text-red-600">Created on: April 27, 2023</p>
        </header>

        <section className="text-lg mb-10">
            <p className="py-3">
                Have a bed clean and disinfected is essential for health and good sleep. It is a place very important to our rest and tranquility. Over time, the mattress goes staining and deteriorating, affected by dust, mites and dirt and sweat that we detach, it is not enough just to wash the bed sheets weekly, the mattress has to be cleaned from time to time to avoid the appearance of mites, stains and germs. Here tea we left some tips to clean it in depth.
            </p>

            <div className="md:w-1/2 pt-3 pb-6">
                <img src="/blog3.webp" alt="Mattress Cleaning" className="w-full rounded-lg mb-4 shadow-sm" />
            </div>

            <p className="pb-4">Remember that, for any stain, the most important is Act fast. So you’ll get top results.<br></br>First , use the vacuum cleaner to remove all residual dirt . and although seem that you mattress this clean , you we suggest all shapes suck it up each time that change the sheets , remember that the mattresses accumulate dust and mites that are invisible to our eyes.</p>

            <p className="py-4">For stains superficial, easy to remove, mixes Dishwasher (you we suggest the dishwashers dawn) with water, pour the mixture into a spray bottle and with a cloth absorbent go rubbing about the stains, in this way you can remove dirt and absorb excess liquid. go rinsing the cloth from time to time . Also can wear some Oxiclean stain remove and do the same process. Finally, clarify with a cloth wet and leaves dry. Make sure the mattress be 100 % dry before repositioning the sheets.</p>

            <p className="py-4">For stains further complex , you can repeat the same above process , but after spraying the mixture or applying a stain remover , sprinkle baking soda about the stain and leave it rest for at least a couple of hours . Bicarbonate tea will help remove better the stains and neutralize odors. After a couple of hours, remove the remains of bicarbonate, you can use the vacuum cleaner for this.</p>

            <p className="py-4">Other method is apply water oxygenated with a sprayer by the entire surface of the mattress and leave Act by about 20 or 30 minutes. Then you clear it up with a rag wet and leave dry.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Tips for maintaining your mattress:</h2>
          <ul className="list-inside text-lg list-disc pb-5">
            <li>Clean it thoroughly at least twice a year.</li>
            <li>Change the bed sheets as minimum a once a week</li>
            <li>Don’t make the bed barely tea get up first ventilate with the windows open, in this way sheets and mattress are oxygenated.</li>
            <li>Uses a it covers mattress to protect and avoid that the stains get to him. these are
            more easy to clean already that you can put them in the washing machine.</li>
            <li>When make the bed , shake the sheets and the pillows to avoid the proliferation of
            dust mites.</li>
            <li>Remember than life useful of the mattress is about 10 years.</li>
          </ul>
        </section>

        <h2 className="text-xl font-medium py-3">With these tips and products keep you mattress clean and spot free!</h2>

        <div className="md:w-2/4 pb-12">
          <img src="/clean-mattress.webp" alt="Clean Mattress Tips" className="w-full rounded-lg mb-4" />
        </div>
      </div>
    </>
  );
};

export default CleanMattress;