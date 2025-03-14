
const ChangeSeason = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/blog-11.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">How to Clean Your Mattress</h1>
        </div>
      </section>

      <div className="font-sans antialiased text-gray-800 bg-white p-4 max-w-6xl mx-auto">
        <header className="mb-4">
          <p className="text-red-600">Created on: March 11, 2023</p>
        </header>

        <section className="text-lg mb-10">
            <p className="py-3">There is the group of people who hate the cold, and the group of people who love it, whatever yours, the reality is one: we are saying goodbye to winter to start spring. This is the best time to make the change of season in our closets and what better way to take advantage of ordering and cleaning it? In this post, we give you some tips to make an efficient and orderly renovation of your clothes.
            </p>

            <div className="md:w-1/2 pt-3 pb-6">
                <img src="/blog-12.webp" alt="Mattress Cleaning" className="w-full rounded-lg mb-4 shadow-sm" />
            </div>

            <h2 className="py-4 text-2xl font-semibold">1. Empty and clean</h2>
            <p className="py-4">The first thing you should do: is remove EVERYTHING. Leave your closet empty and put your clothes in a pile somewhere to organize them later. Having the closet empty, and cleaning it is a much easier and more efficient task. Start by shaking from the top to the bottom, leaving the floor for last, where the shoes are usually, so it is one of the places with the most dirt and dust. When you finish shaking, you should vacuum all the nooks, corners, drawers, etc. Finally, clean and disinfect all the surfaces in your closet, you can use an all-purpose cleaner.</p>

            <h2 className="py-4 text-2xl font-semibold pt-20">2. Organize and save</h2>
            <p className="py-4">Go through each item of clothing you took out of the closet and group them into 3 piles:</p>
            <ul className="list-inside text-lg list-disc pb-5">
                <li><strong>The clothes that stay and put away:</strong>Sincerity with oneself is key here, when reviewing each item, you should ask yourself: do I still like it? Does it have sentimental value? Does it still fit me well? If the answer is no, pass it on to the next group. The clothes that passed the test and you decided to leave, must be stored. For that, we suggest you use plastic boxes to prevent them from getting dusty. Make sure that the clothes you are going to store are clean.</li>
                
                <li><strong>The clothes that go away:</strong> in this group, you must make subcategories: the clothes that you can recycle, sell, or give away, and the ones that have no more possibility of use.</li>
                <li><strong>The clothes that stay and that are useful for the summer:</strong> In this group are those vests, pants, shirts, etc. that you know are useful for any season of the year. The type of organization and order by garment is fundamental, we see what should be hung and what should be folded, what goes in drawers and what goes on shelves. Never pile clothes, fold them, and ideally organize them by colour, it can help you save time when you’re in a hurry, and visually it can be more effective to find what you’re looking for. Take advantage of closet doors to hang accessories like scarves, handkerchiefs, and belts. Finally, use shoe racks, transparent boxes, or shelves at the bottom to accommodate your shoes and keep them organized and visible.</li>
                <div className="md:w-2/4 pb-12 pt-10 h-96">
                    <img src="/cleaning-bedroom.webp" alt="Clean Mattress Tips" className="w-full rounded-lg mb-4 h-full object-cover" />
                </div>
            </ul>
        </section>

        
      </div>
    </>
  )
}

export default ChangeSeason