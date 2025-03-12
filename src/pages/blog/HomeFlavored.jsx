
const HomeFlavored = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/blog5.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Keep Your Home Flavored and Give Atmosphere to Your Spaces</h1>
        </div>
      </section>

      <div className="font-sans antialiased text-gray-800 bg-white p-4 max-w-6xl mx-auto">
        <header className="mb-4">
          <p className="text-orange-600">Created on: April 4, 2023 </p>
        </header>

        <section className="text-lg mb-10">
          <p className="py-3 font-semibold">
            A home set promotes the well-being of the family and helps the feeling of order and cleanliness in your spaces. your scented house will calm you mind while tea you relax after a hard day of work or study , giving said _ place a presence much more cozy . Experts they say that a smell welcome can help you sleep better.
          </p>
          <p className="py-3">
          But the options for setting and flavoring are so varied like the places where they love each other apply. In the company we know very well of all the variety of air fresheners, and we want help you to choose your own for the place that further love.
          </p>
        </section>

        {/* Ajuste de la imagen */}
        <div className="md:w-2/3 pb-12">
          <img src="/blog5.webp" alt="Home Flavored" className="w-full rounded-lg mb-4" />
        </div>

        <section className="mb-6 text-lg">
            <h2 className="text-2xl font-semibold mb-6">1. Identify well the dimensions of the space.</h2>
            <p className="py-3">Volume of the place that we want aromatize is extremely important. You’re welcome it serves spray deodorant environmental an once a day in a space wide and tall, and a sprinkler electric maybe this oversized for a room small.</p>

            <p className="py-3">For spaces wide as living rooms, living rooms, or lounges, we recommend a device with air freshener interchangeable and timer, has a superior capacity in space and volume of flavoring. the capsules interchangeable can buy them in various fragrances.</p>

            <div className="md:w-1/2 pb-2">
                <img src="/home-flavored-1.webp" alt="Home Flavored" className="w-full rounded-lg mb-4" />
            </div>

            <p className="py-3">For spaces further small , like kitchens , rooms , bathroom , you can occupy the air freshener <a href="https://puntolimpieza.cl/search?q=Feebreze&options%5Bprefix%5D=last" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Febreze Small Spaces</a>, or <a href="https://puntolimpieza.cl/search?q=Space+Air+Freshener&options%5Bprefix%5D=last" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Space Air Freshener</a> Sticks Airwick Littles. Both products they have a self-diffusing gel. designed to maintain a constant, smooth and long-lasting aroma duration.</p>

            <p className="py-3">If you are looking something further controllable, you we recommend deodorants environmental <a href="https://puntolimpieza.cl/collections/desodorante-y-aromatizante/products/airwick-desodorante-ambiental-electrico-vainilla-1unid?utm_source=newsletter&utm_medium=email&utm_campaign=blog&utm_id=20230203&utm_content=producto4" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer ">Airwick Electrics</a>. They connect to the current to your liking and also have capsules interchangeable with a wide variety of fragrances.</p>
        </section>

        <section className="mb-6 text-lg">
            <h2 className="text-2xl font-semibold mb-6">2. Avoid the spread of bad guys smells</h2>
            <p className="py-3">Although can be very easy grant a good aroma to you home, withdraw the less nice can be very difficult. For carpets, curtains, or other type of textiles that have suffered some accident or just have taken bad smell for the time, you can use always the <strong>Odor Eliminator Febreze strong. </strong>This can be a great ally to appease sources of dirt in the environment</p>

            <p className="py-3">The dump always can be a focus of bad odors in the kitchen or bathrooms, for which also have solution: <a href="https://puntolimpieza.cl/products/rayen-desodorante-ambientador-basurero-1unid?_pos=9&_sid=31cde537d&_ss=r?utm_source=newsletter&utm_medium=email&utm_campaign=blog&utm_id=20230203&utm_content=producto6" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Odor neutralizer Rayen</a>. A device easy to use, and with tremendous results.</p>

            <div className="md:w-1/2 pb-2">
                <img src="/home-flavored-2.webp" alt="Home Flavored" className="w-full rounded-lg mb-4" />
            </div>
            
        </section>

        <section className="mb-6 text-lg">
            <h2 className="text-2xl font-semibold mb-6">3. Choose good your fragrances</h2>
            <p className="py-3">Choose a fragrance suitable for space that want set the scene is key. The experts recommend use fragrances further soft and sweet for rooms and bathrooms, and odors further strong and herbal in spaces common as kitchen and living rooms.</p>

            <p className="py-3">By last, you recommend give a lap by all <a href="https://puntolimpieza.cl/collections/desodorante-y-aromatizante?utm_source=newsletter&utm_medium=email&utm_campaign=blog&utm_id=20230203&utm_content=producto6" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">our aisle of flavorings and air fresheners</a>. Exists a wide variety of products and fragrances that they can help you what you home be a much more space nice to you, you family and who tea visit.</p>

            <div className="md:w-1/2 pb-2">
                <img src="/home-flavored-3.webp" alt="Home Flavored" className="w-full rounded-lg mb-4" />
            </div>            
        </section>
      </div>
    </>
  );
};

export default HomeFlavored;