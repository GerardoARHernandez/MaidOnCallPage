import { useForm } from 'react-hook-form';
import AlertMessage from './AlertMessage';

const FormJoin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 p-2 rounded">First Name *</label>
          <input
            type="text"
            {...register('firstName', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm"
          />
          {errors.firstName && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>
        <div>
          <label className="block text-gray-700 p-2 rounded">Last Name *</label>
          <input
            type="text"
            {...register('lastName', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm"
          />
          {errors.lastName && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 p-2 rounded">Email *</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm"
          />
          {errors.email && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>
        <div>
          <label className="block text-gray-700 p-2 rounded">Phone *</label>
          <input
            type="text"
            {...register('phone', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm"
          />
          {errors.phone && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 p-2 rounded">Address *</label>
          <input
            type="text"
            {...register('address', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm"
          />
          {errors.address && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>
        <div>
          <label className="block text-gray-700 p-2 rounded">City *</label>
          <input
            type="text"
            {...register('city', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm"
          />
          {errors.city && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>
        <div>
          <label className="block text-gray-700 p-2 rounded">Province *</label>
          <input
            type="text"
            {...register('province', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm"
          />
          {errors.province && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>
      </div>

      {/* Work Qualifications */}
      <h2 className="text-2xl font-semibold text-blue-950 mt-6">Work Qualifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 p-2 rounded">Are you eligible to work in Canada? *</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('eligibleToWork', { required: true })}
                value="Yes"
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                {...register('eligibleToWork', { required: true })}
                value="No"
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.eligibleToWork && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>

        <div>
          <label className="block text-gray-700 p-2 rounded">Do you have a valid Driver's License? *</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('hasDriverLicense', { required: true })}
                value="Yes"
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                {...register('hasDriverLicense', { required: true })}
                value="No"
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.hasDriverLicense && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>

        <div>
          <label className="block text-gray-700 p-2 rounded">Do you have a reliable vehicle for driving to jobs? *</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('hasReliableVehicle', { required: true })}
                value="Yes"
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                {...register('hasReliableVehicle', { required: true })}
                value="No"
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.hasReliableVehicle && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 p-2 rounded">Do you have a valid insurance on this vehicle? *</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('hasVehicleInsurance', { required: true })}
                value="Yes"
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                {...register('hasVehicleInsurance', { required: true })}
                value="No"
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.hasVehicleInsurance && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>

        <div>
          <label className="block text-gray-700 p-2 rounded">Do you speak *</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register('languages', { required: true })}
                value="English"
                className="form-checkbox"
              />
              <span className="ml-2">English</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                {...register('languages', { required: true })}
                value="French"
                className="form-checkbox"
              />
              <span className="ml-2">French</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                {...register('languages', { required: true })}
                value="Other"
                className="form-checkbox"
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
          {errors.languages && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>

        <div>
          <label className="block text-gray-700 p-2 rounded">Are comfortable wearing PPE (supplied by the employer)? *</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('comfortableWithPPE', { required: true })}
                value="Yes"
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                {...register('comfortableWithPPE', { required: true })}
                value="No"
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.comfortableWithPPE && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 p-2 rounded">Can you lift up to 30 pounds? *</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('canLift30lbs', { required: true })}
                value="Yes"
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                {...register('canLift30lbs', { required: true })}
                value="No"
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.canLift30lbs && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>

        <div>
          <label className="block text-gray-700 p-2 rounded">Do you have professional cleaning experience? *</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('hasCleaningExperience', { required: true })}
                value="Yes"
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                {...register('hasCleaningExperience', { required: true })}
                value="No"
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.hasCleaningExperience && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>

        <div>
          <label className="block text-gray-700 p-2 rounded">When is the earliest date you are available for work? *</label>
          <input
            type="date"
            {...register('availableDate', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm"
          />
          {errors.availableDate && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 p-2 rounded">If you speak another language - please specify:</label>
          <input
            type="text"
            {...register('otherLanguage')}
            className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm"
          />
        </div>

        <div>
          <label className="block text-gray-700 p-2 rounded">Total hours available per week? *</label>
          <input
            type="number"
            min={0}
            {...register('hoursAvailable', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm"
          />
          {errors.hoursAvailable && <AlertMessage type='error'>This field is required</AlertMessage>}
        </div>

        <div>
          <label className="block text-gray-700 p-2 rounded">How did you hear about SHR Multiservice General home services? *</label>
          <input
            type="text"
            {...register('hearAboutUs')}
            className="mt-1 block w-full rounded-md border border-gray-500 shadow-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 p-2 border border-gray-400 rounded">Please attach your resume here</label>
        <input
          type="file"
          {...register('resume')}
          className="mt-1 block w-full rounded-md border-gray-800 shadow-sm"
        />
      </div>

      <div className='py-6 flex items-center flex-col'>
        <button
          type="submit"
          className="inline-flex justify-center py-3 border border-transparent shadow font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default FormJoin;