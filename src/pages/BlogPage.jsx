import React from 'react';

const BlogPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/certificate.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
        </div>
      </section>

      {/* Blog Posts Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-blue-50 rounded-lg shadow-xl overflow-hidden mb">
            <a href="/tips-for-cleaning-and-disinfecting-your-garbage-collector">
              <img
                src="/blog1.webp" // Reemplaza con la imagen del blog post
                alt="Blog Post 1"
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
              Tips for Cleaning and Disinfecting Your Garbage Collector</h2>
              <p className="text-gray-600 mb-4">
              Cleaning the garbage area is an essential task in our homes, even though it may not be the most pleasant one. Developing the habit of cleaning the garbage area frequently will make this chore less unpleasant. 
              </p>
              <a href="/tips-for-cleaning-and-disinfecting-your-garbage-collector" className="text-blue-600 hover:text-blue-700 font-semibold">
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-blue-50 rounded-lg shadow-xl overflow-hidden">
            <a href="/origin-of-mothers-day-why-that-give-away-flowers">
              <img
                src="/blog2.webp" // Reemplaza con la imagen del blog post
                alt="Blog Post 2"
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Origin of Mother’s Day. Why we Give Away Flowers?</h2>
              <p className="text-gray-600 mb-4">
              Mother’s Day is one of those dates that is hard to forget. Do you want to give a unique touch to this celebration? Here you will find gift ideas and plans for your mother to enjoy her day as she deserves.
              </p>
              <a href="/origin-of-mothers-day-why-that-give-away-flowers" className="text-blue-600 hover:text-blue-700 font-semibold">
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-blue-50 rounded-lg shadow-xl overflow-hidden">
            <a href="/how-to-clean-your-mattress">
              <img
                src="/blog3.webp" // Reemplaza con la imagen del blog post
                alt="Blog Post 3"
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">How to clean your mattress</h2>
              <p className="text-gray-600 mb-4">
                Have a bed clean and disinfected is essential for health and good sleep. It is a place very important to our rest and tranquility.
              </p>
              <a href="/how-to-clean-your-mattress" className="text-blue-600 hover:text-blue-700 font-semibold">
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-blue-50 rounded-lg shadow-xl overflow-hidden">
            <a href="/how-to-wash-the-dishwasher">
              <img
                src="/blog4.webp" // Reemplaza con la imagen del blog post
                alt="Blog Post 4"
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">How to wash the dishwasher?</h2>
              <p className="text-gray-600 mb-4">
              Have a machine dishwasher it is very helpful, we there is a lot of work left when it comes to having that wash the dishes and it is an important resource to save water.
              </p>
              <a href="/how-to-wash-the-dishwasher" className="text-blue-600 hover:text-blue-700 font-semibold">
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="bg-blue-50 rounded-lg shadow-xl overflow-hidden">
            <a href="/keep-your-home-flavored">
              <img
                src="/blog5.webp" 
                alt="Blog Post 5"
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Keep your home flavored and give atmosphere to your spaces</h2>
              <p className="text-gray-600 mb-4">
              A home set promotes the well-being of the family and helps the feeling of order and cleanliness in your spaces. Your scented house will calm you mind while tea you relax after a hard day of work or study, giving said place a presence much more cozy. Experts they say that a smell welcome can help you sleep better.
              </p>
              <a href="/keep-your-home-flavored" className="text-blue-600 hover:text-blue-700 font-semibold">
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 6 */}
          <div className="bg-blue-50 rounded-lg shadow-xl overflow-hidden">
            <img
              src="/blog6.webp" // Reemplaza con la imagen del blog post
              alt="Blog Post 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Follow these tips to wash your fabric curtains</h2>
              <p className="text-gray-600 mb-4">
              Curtains are an essential part of home decoration and, like furniture, they accumulate a lot of dust and dirt over time. This is why it is Maid On Call. We recommend washing them every three months and one way to remember it is to do it with each change of season.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 7 */}
          <div className="bg-blue-50 rounded-lg shadow-xl overflow-hidden">
            <img
              src="/blog7.webp" // Reemplaza con la imagen del blog post
              alt="Blog Post 7"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Tricks to Keep the Children’s Room Ordered And Gain Space</h2>
              <p className="text-gray-600 mb-4">
              Let’s see some tricks that I always recommend to keep tidy the children ‘s room and also gain some space. I’m going to teach the best containers for your bedroom, some ideas to store toys and furniture further practical that you can place in your room. Let’s go to it!
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 8 */}
          <div className="bg-blue-50 rounded-lg shadow-xl overflow-hidden">
            <img
              src="/blog8.webp" // Reemplaza con la imagen del blog post
              alt="Blog Post 8"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">How to File Documents at Home and in the Office</h2>
              <p className="text-gray-600 mb-4">
              Today we are going to see as file documents both at home and in the office. I’m going to give them some ideas to create a filing system efficient and very practical. From now on all documents will be always at hand and well organized. Come on there!
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                Read More →
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BlogPage;