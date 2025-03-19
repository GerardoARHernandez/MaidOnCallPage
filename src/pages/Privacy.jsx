
const Privacy = () => {
  return (
    <>
        <section
            className="relative w-full h-64 flex items-center justify-center"
            style={{
                backgroundColor: '#09487c',
            }}
        >
            <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
            <div className="relative z-1 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            </div>
        </section>

        <div className="min-h-screen bg-blue-50 pt-12 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-xl p-6 text-lg">
                <p className="py-3">At Website <strong>SHR Multiservice,</strong> one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that are collected and recorded by our website and how we use it.</p>
                <p className="py-3">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at {''}
                <a href="mailto:shrmultiverse@gmail.com" className="text-blue-600">
                shrmultiverse@gmail.com
                </a>.</p>
                <p className="py-3">This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in SHR Multiservice. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                <h2 className="text-xl font-semibold py-4">Consent</h2>
                <p className="py-3">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                <h2 className="text-xl font-semibold py-4">Information we collect</h2>
                <p className="py-3">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p className="py-3">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p className="py-3">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

                
                <p className="py-3">We use the information we collect in various ways, including:</p>
                
                <ul className="list-disc list-inside text-gray-900 mx-5">
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>

                <h2 className="text-xl font-semibold py-4">Cancellation</h2>
                <p className="py-3">We don’t accept same-day cancellations, We require 48 hours’ of cancellation notice prior to the appointment. Otherwise, SHR Multiservice is allowed to charge a cancellation fee of  $65.00. For cancellation or any changes on the scheduled time, you can notify us via phone at <a href="tel:+6132657228" className="text-blue-600">613-618-0969</a>. Please notify us 48 hours before your scheduled time.</p>

            </div>
        </div>
    </>
  )
}

export default Privacy