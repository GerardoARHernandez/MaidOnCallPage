import React from 'react'

const DifferenceSanitizer = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/blog-13.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Difference between Sanitizers and Disinfectants</h1>
        </div>
      </section>

      <div className="font-sans antialiased text-gray-800 bg-white p-4 max-w-6xl mx-auto">
        <header className="mb-4">
          <p className="text-red-600">Created on: February 24, 2023</p>
        </header>

        <section className="text-lg mb-10">
            <p className="py-3">Most likely, in recent years you have heard the word “disinfectant” more than necessary, due to the pandemic we have experienced. Still , most people probably don’t know the difference between sanitizers and disinfectants. The terms disinfectant and sanitizer tend to lead to confusion on many occasions, however, there are some differences between the two cleaning and disinfection processes and in this post we will explain it to you, as well as the products that you should use for each case.</p>

            <h2 className="py-4 text-2xl font-semibold">The process of disinfecting</h2>
            <p className="py-4">Before diving into the world of cleaning, disinfection or sanitizing products, it is essential, first of all, to understand what each process means and what it consists of. Disinfection is reducing the amount of germs and bacteria on a surface, eliminating them with a specific and effective product for it. For this we will use a disinfectant, a product capable of eliminating these microorganisms that can cause a large number of diseases, especially in the case of viruses and fungi. Disinfection has been, during the pandemic, a very important process, considered essential in the normal functioning of our lives.</p>

            <h2 className="py-4 text-2xl font-semibold">Sanitize, what does it mean?</h2>
            <p className="py-2">Sanitization is a hygienic treatment that eliminates pathogens present on an object or surface through the use of physical or chemical products, which are called “sanitizing agents.”</p>

            <p>The procedure eradicates all or almost all contaminants that represent significant threats to public health, such as viruses and bacteria.</p>
            <p>Sanitizing machine, to enhance the effectiveness of their application and avoid risks. Product of its manipulation.</p>

            <h2 className="py-4 text-2xl font-semibold">Disinfectant and sanitizer, what's the difference?</h2>
            <p className="py-4">Both products are therefore used to eliminate germs and bacteria, but the difference is where we will use both products, that is, which areas we will need to disinfect or sanitize. For example, if we are going to disinfect the areas where we handle food in a kitchen, it is best to use a sanitizer, since they are a little more delicate with surfaces and will not lose their effectiveness. However, the time it takes for the sanitizer to kill germs is longer and can be up to 30 seconds.</p>
            <p className="py-4">If what we need is to eliminate bacteria and viruses efficiently and quickly, we will need to use a disinfectant, since, in just 5 seconds, it will be capable of eliminating up to 99.99% of bacteria, viruses and fungi. What we must be clear about is that both products will not have the same effectiveness and speed when it comes to eliminating bacteria and viruses, and if what we are looking for is a safe and fast elimination of bacteria and viruses, we cannot risk it and it is more advisable to use an approved and effective disinfectant.</p>

            <div className="md:w-1/2 pt-3 pb-6">
                <img src="/virus.webp" alt="Mattress Cleaning" className="w-full rounded-lg mb-4 shadow-sm" />
            </div>

        </section>

        
      </div>
    </>
  )
}

export default DifferenceSanitizer