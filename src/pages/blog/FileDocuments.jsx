import React from 'react'

const FileDocuments = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/blog8.webp")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">How to File Documents at Home and in the Office</h1>
        </div>
      </section>

      <div className="font-sans antialiased text-gray-800 bg-white p-4 max-w-6xl mx-auto">
        <header className="mb-4">
          <p className="text-red-600">Created on: March 22, 2023</p>
        </header>

        <section className="text-lg mb-7">
          <p className="py-3">Today we are going to see as file documents both at home and in the office. I’m going to give them some ideas to create a filing system efficient and very practical. From now on <i>all documents</i> will be always at hand and well organized. Come on there!</p>
        </section>

        <section className="mb-6 text-lg">
            <h3 className="text-2xl font-semibold mb-4">Check you inbox</h3>
            <p className='py-3'>The first step to knowing what that file is review all home or office inboxes. Keeping your file up to date will be much easier Yeah <strong>you distribute the documents, letters, or files in different mailboxes</strong> according to the theme. For example, the cards related to invoices they will go in a mailbox priority, work documents or projects will go in a mailbox separately and, by last, little files with importance like advertising.</p>

            <h3 className="text-2xl font-semibold py-4">Have the file on hand</h3>
            <p className='py-3'>Is important to know where we have the file Both at home and in the office must have a place specifically for the archive of invoices, documents important, contracts, income statements, etc. All we know is that both at home and in the office we have a large volume of paperwork that, not maintained or ordered, we are accumulates until we reached a point of no return. When you get to that spot we no longer know neither by where to start ordering.</p>
            <p className='py-3'>At home, we can use a cabinet or drawer specific to our file. to order the house bills such as water, electricity, or gas we have a <strong>trick:</strong> use a file plastic filing cabinet like the one they take the children to school. usually have departments separated, with colored markers to differentiate the matter, they fold and close with a rubber. Is practical, small, cheap, very useful, and easy to find anywhere in shop. with a solution like this, we will have all the household bills kept in a compartment small, so we don’t will steal space for other things.</p>

            <div className="md:w-1/2 pb-12 pt-5">
                <img src="/House-cleaning-4.webp" alt="History of Mother's Day" className="w-full rounded-lg mb-4" />
            </div>
            
        </section>

        <section className="mb-6 text-lg">
            <h2 className="text-2xl font-semibold mb-4">Stationeries, your best friends</h2>

            <p className="py-3">From now on you will see the stationers with others’ eyes. File cabinets, boxes, markers, stickers … all these gadgets are designed to do our life further easy and more neat. <strong>Quantify the volume of documents that you have</strong> and separate them by subject to make you an idea of what type of filing cabinets you will need. From there get the accessories suitable (boxes, folders, filing cabinets…)</p>
            
            <div className="md:w-1/2 pb-12 pt-5">
                <img src="/House-cleaning-5.webp" alt="History of Mother's Day" className="w-full rounded-lg mb-4" />
            </div>
            
        </section>

        <section className="mb-6 text-lg">
            <h2 className="text-2xl font-semibold mb-4">Mark everything with its name</h2>

            <p className="py-3">Don’t you forget to mark each thing with his name? It won’t be worth anything Order all your files Yeah later you doesn’t know where to find them. <strong>Uses blank labels</strong> to write the name of each thing or uses a color sequence. By For example, blue for water, green for light, or orange for gas.</p>
            
            <div className="md:w-1/2 pb-12 pt-5">
                <img src="/House-cleaning-6.webp" alt="History of Mother's Day" className="w-full rounded-lg mb-4" />
            </div>
            
        </section>

        <section className="mb-6 text-lg">
            <h2 className="text-2xl font-semibold mb-4">At the end of the year close the folder or file cabinet</h2>

            <p className="py-3">Don’t reuse or follow it using at the end of the cycle annually or you will lose the order by complete. The most logical way to order the documents of an office or a house is to do it by <strong>years naturally.</strong> When you need to look for something you will find it much easier. Do you need further help? do you want advice about something specific? Do not hesitate to comment and We will help as much as possible!</p>
            
            <div className="md:w-1/2 pb-12 pt-5">
                <img src="/House-cleaning-1.webp" alt="History of Mother's Day" className="w-full rounded-lg mb-4" />
            </div>
            
        </section>

      </div>
    </>
  )
}

export default FileDocuments