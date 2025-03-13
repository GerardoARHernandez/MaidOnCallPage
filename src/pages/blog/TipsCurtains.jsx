

const TipsCurtains = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/blog6.webp")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Follow these tips to wash your fabric curtains</h1>
        </div>
      </section>

      <div className="font-sans antialiased text-gray-800 bg-white p-4 max-w-6xl mx-auto">
        <header className="mb-4">
          <p className="text-red-600">Created on: April 4, 2023</p>
        </header>

        <section className="text-lg mb-7">
          <p className="py-3">
          Curtains are an essential part of home decoration and, like furniture, they accumulate a lot of dust and dirt over time. This is why it is <strong>Maid On Call.</strong> We recommend washing them every three months and one way to remember it is to do it with each change of season.
          </p>
        </section>

        <section className="mb-6 text-lg">
          <h2 className="text-3xl font-semibold mb-2">Here are some tips for a successful wash.</h2>
            <ul className="list-inside text-lg list-decimal pb-5">
                <li className='py-3 pt-6'><strong>Check the material of your curtains:</strong> First you must check the type of fabric the curtains are made of, pay attention to the labels and in case they do not have them, check with the place where you bought them, only then can you make sure that they do not spoil the fabric.</li>

                <li className='py-3'><strong>Define the type of washing:</strong> You can wash the curtains in the washing machine by hand depending on how delicate the fabric is, in both cases make sure to remove all rings or metal parts before. If your curtains have stains you can apply them before washing them <a href="https://puntolimpieza.cl/products/baciaqua-limpiador-especializado-3l?utm_campaign=blog&utm_content=producto1&utm_id=20220407&utm_medium=email&utm_source=newsletter" className='text-blue-500 hover:text-blue-700' target="_blank" rel="noopener noreferrer">BaciAqua</a> directly on the problem, leave it to act for a few minutes, rub and then rinse to wash as normal. USA <a href="https://puntolimpieza.cl/search?q=detergente+piel&authenticity_token=IM0Lp4jLJW4zYtEo1amXYjUAMsGt15jDR6ub0ww%2FXNc%3D?utm_source=newsletter&utm_medium=email&utm_campaign=blog&utm_id=20220407&utm_content=producto2" className='text-blue-500 hover:text-blue-700' target="_blank" rel="noopener noreferrer">mild detergent</a> for delicate garments and in the case that you have white curtains, you can add bleach to the wash or use a special detergent for white clothes. If you need to wash them by hand you can use your bathroom tub or a very large container and never wash them with Hot water.</li>

                <li className='py-3'><strong>Be careful with drying:</strong> Set a gentle spin in your washing machine and let it hang outdoors. You can apply spray remove rapid wrinkles touch to prevent them from being wrinkled.</li>
            </ul>

            <p className='py-1'>For the maintenance of your curtains and thus prevent them from accumulating a lot of dust and dirt, we recommend that during the weekly cleaning of your home, go over the curtains with the vacuum cleaner (on low power). You can do it without removing it from its support or hooks, much easier</p>
            <p className='py-3'>Clean curtains will not only give your home a spotless look, but will also keep you and your family safe from respiratory diseases or allergies!</p>
        </section>

        <div className="md:w-1/2 pb-12 pt-1">
                <img src="/tips-to-wash.jpg" alt="History of Mother's Day" className="w-full rounded-lg mb-4" />
            </div>

      </div>
    </>
  )
}

export default TipsCurtains