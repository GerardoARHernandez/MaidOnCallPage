
import ButtonAppoinment from '../../components/Date/ButtonAppoinment'

const StagingBasic = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/service-17.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white mb-8">Staging Basic</h1>
          <ButtonAppoinment />
        </div>
      </section>
    
      <div className="container mx-auto p-4 pt-24 px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {/* Texto (2/3 del espacio) */}
          <div className="md:col-span-4 pb-20 text-lg">
            <p className='text-center'>We will transform your house by using your very own stuff.  This redesign process will result in your house becoming valuable and attractive to a large portion of the market. We’ll change your home focal points, rearrange your artwork, modify your flow patterns and clearly set your anchor elements for each room… We’ll even improve your house overall luminosity. You can use our service to simply change the look of your house and get the energy flowing or to make your house more attractive to potential buyers.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StagingBasic