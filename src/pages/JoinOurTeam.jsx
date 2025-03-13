import FormJoin from "../components/FormJoin";


const JoinOurTeam = () => {


  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/home.webp")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Career At MAID ON CALL</h1>
        </div>
      </section>

      <div className="font-sans antialiased text-gray-800 bg-white p-4 max-w-7xl mx-auto">
        <section className="text-lg mb-7">
          <h1 className="text-4xl font-bold text-blue-950 mb-6 text-center">
            Join Our Team
          </h1>
          <p className="py-3">We are hiring experienced House cleaners. Approximately 20 to 35 hours a week. But more if wanted. Our teams arrive at each job location fully equipped.</p>

          <p className="py-3">As this is a trainable job, it’s very important we find amazing staff with the following qualifications:</p>
          <ul className="list-inside text-lg list-disc pb-5 px-5">
            <li>Trustworthy, reliable and punctual.</li>
            <li>Positive attitude – glass half full 🙂</li>
            <li>Ability to take feedback with stride</li>
            <li>No criminal record and you need to provide criminal check before work date</li>
            <li>Problem solving and organizational skills</li>
            <li>Physically fit</li>
            <li>Background check is required</li>
            <li>Sense of humour helps too</li>
          </ul>

          <p className="py-3"><strong>The Position: House cleaning team member</strong></p>
          <ul className="list-inside text-lg list-disc pb-7 px-5">
            <li>Full time cleaning/housekeeping job: 5 days a week(Monday – Friday) with optional Saturday shifts.</li>
            <li>Fully paid training. No cleaning experience necessary.</li>
            <li>Uniforms and all cleaning materials including our natural cleaning products are provided.</li>
          </ul>

          <p className="py-3"><strong>Benefits</strong></p>
          <ul className="list-inside text-lg list-disc pb-7 px-5">
            <li>Team Members: $15-18/hr + Car-Pooling.</li>
            <li>Team Leaders: $18-22/hr + Paid Travel Time + Bonus + Company Car + Company Cell Phone.</li>
            <li>Bi-Weekly pay</li>
            <li>Bonus</li>
            <li>Tips</li>
          </ul>
        </section>

        <section className="text-lg mb-7">
          <h2 className="text-3xl font-bold text-blue-950 mb-6 text-center">Personal Information</h2>
          <FormJoin />

        </section>
      </div>
    </>
  );
};

export default JoinOurTeam;