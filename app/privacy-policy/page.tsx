
const PrivacyPolicy = () => {
  return (
    <>
      <main className="bg-gray-50 min-h-screen py-12 px-6">
        <div className="main-contain">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <p className="mb-6">
            At <span className="font-semibold">Techsol Management Consultants</span>, we are committed to protecting your privacy.
            This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">When you use our <span className="font-semibold">Contact Us</span> form, we may collect the following personal information:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
            </ul>
            <p className="mt-4">We do not collect any other personal information unless you voluntarily provide it.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">The information you provide is used solely for the purpose of:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Responding to your inquiries or requests</li>
              <li>Communicating with you regarding our services</li>
            </ul>
            <p className="mt-4">We do <span className="font-semibold">not</span> use your information for marketing purposes or share it with third parties.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p>
              We take reasonable precautions to ensure your personal information is protected against unauthorized access,
              alteration, disclosure, or destruction. However, please be aware that no method of internet transmission or
              electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Sharing of Information</h2>
            <p>
              We do not sell, rent, or share your personal data with third parties. We may share information only if required by law
              or to protect our legal rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Withdraw consent to our use of your information</li>
            </ul>
            <p className="mt-4">
              To make any such requests, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="mb-2">
              If you have any questions or concerns regarding this Privacy Policy, please contact:
            </p>
            <p className="font-semibold">Techsol Management Consultants</p>
            <p>Email: <a href="mailto:info@techsol-bh.com" className="text-blue-600 underline">info@techsol-bh.com</a></p>
          </section>
        </div>
      </main>
    </>
  );
}


export default PrivacyPolicy