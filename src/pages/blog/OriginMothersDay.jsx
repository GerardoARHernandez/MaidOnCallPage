

const OriginMothersDay = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/blog2.webp")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Origin of Mother's Day: Why We Give Away Flowers</h1>
        </div>
      </section>

      <div className="font-sans antialiased text-gray-800 bg-white p-4 max-w-6xl mx-auto">
        <header className="mb-4">
          <p className="text-red-600">Created on: May 10, 2023</p>
        </header>

        <section className="text-lg mb-7">
          <p className="py-3">
            Mother’s Day is one of those dates that is hard to forget. Do you want to give a unique touch to this celebration? Here you will find gift ideas and plans for your mother to enjoy her day as she deserves. Discover when and for what it is celebrated, and be inspired by interesting stories about one of the events and specials all over the world.
          </p>
        </section>

        <section className="mb-6 text-lg ">
          <h2 className="text-3xl font-semibold mb-2">Mother's Day</h2>
            <p className="py-3"> “Mom” was probably one of the first words that you pronounced, and also one of the most frequently repeated, for thousands of different reasons. Few people can occupy a special place in our lives like that of a mother. That’s why Mother’s Day is a golden opportunity to have a special detail with her and give her thanks for always being there, in good times and in bad.</p>

            <p className="py-3">Did you know that in ancient times, mothers were already celebrated? The goddess Isis was known as the Great Mother Goddess in Egyptian mythology and was an object of worship due to her association with fertility.</p>

            <p className="py-3">This belief arrived in the Greek and Roman civilizations, which also adored their own deities. The Greeks revered Rhea as the mother of all the Olympian gods, while the Romans organized a celebration known as the Hilaria each year, during which they made offerings to the Mother Goddess Cybele in her temple.</p>
        </section>

        <section className="mb-6 text-lg ">
          <h2 className="text-2xl font-semibold mb-2">Fantastic gift ideas for Mother's Day</h2>
            <p className="py-3"> Mother’s Day is right around the corner, so it’s time to start planning for this great occasion. Of course, the best idea is to send her flowers on May 14th. Simply visit our selection of flowers for Mother’s Day and choose the one that you prefer.</p>
            <p className="py-3">But don’t stop at just a detail. Make sure that the day is perfect from start to finish by arranging an activity to spend time with your mother. We want to introduce you to some ideas, so keep reading and discover them!</p>

            <h3 className="text-xl font-semibold my-2">A relaxation day</h3>
            {/* Ajuste de la imagen */}
            <div className="md:w-1/2 pb-12 pt-9">
                <img src="/blog2.webp" alt="History of Mother's Day" className="w-full rounded-lg mb-4" />
            </div>
            <p className="py-3">Your mother is always thinking about you: taking care, listening, advising, and speaking very kindly. It’s clear that, after so much dedication, she needs a little rest, and there’s no better way to get it than with a visit to a spa. Book some hours in one of these centers and give the gift of relaxation to your mom in the form of a massage, sauna, and jacuzzi. She will thank you eternally!</p>

            <h3 className="text-xl font-semibold my-2">A makeover</h3>
            {/* Ajuste de la imagen */}
            <div className="md:w-1/2 pb-12 pt-9">
                <img src="/blog-9.webp" alt="History of Mother's Day" className="w-full rounded-lg mb-4" />
            </div>
            <p className="py-3">Mothers are always busy: working, fixing the house, doing errands, and more. With so much hustle, they rarely have time for themselves. Why don’t you give her a beauty and self-care day? You can start with facial cleansing, followed by a visit to the hairdresser, and finish with an afternoon of shopping. And when you finish this tour, take her to dinner somewhere elegant!</p>

            <h3 className="text-xl font-semibold my-2">A day sports</h3>
            <p className="py-3">Not all mothers are interested in relaxation and tranquility. Maybe yours is motivated to carry out animated activities, so it can be a good idea to take her to do risk sports. For example, a very popular option is to jump with a parachute. You can even make the jump together! You can also go rafting, climbing, or something healthy but quieter, like a walk in the mountains or a bike ride.</p>
            <div className="md:w-1/2 pb-12 pt-9">
                <img src="/blog-10.webp" alt="History of Mother's Day" className="w-full rounded-lg mb-4" />
            </div>

            <h3 className="text-xl font-semibold my-2">A voucher for a cleaning</h3>
            <p className="py-3">Surely, you have thought that doing the cleaning for the house could be the best gift that you could give for Mother’s Day. What better gift than the gift of time for that woman who brought you to life and has been so patient in washing your clothes and keeping your mess in order? It’s time to dedicate her time to what she likes. In addition, you have to give her thanks in some way.</p>
            <div className="md:w-1/2 pb-4 pt-9">
                <img src="/image-3.webp" alt="History of Mother's Day" className="w-full rounded-lg mb-4" />
            </div>
            <ul className="list-inside text-lg list-decimal pb-5">
                <li>You will not only be giving away a cleaning but also time for yourself.</li>
                <li>It’s an expression of love and affection</li>
                <li>Further time to share with family. Take advantage and go to a park; or to that site to which has always wanted to go and never go by lack of time</li>
            </ul>

            <p>Having that deep clean your home is a task complicated, but with Maid On Call everything be further easy. It’s not about cleaning, it’s about the health and well-being of your beings dear ones consult already our deep cleaning services and choose the one that best suits your needs!</p>
        </section>

        <h2 className="font-semibold text-2xl pb-14 pt-8">HAPPY MOTHERS DAY</h2>

      </div>
    </>
  );
};

export default OriginMothersDay;