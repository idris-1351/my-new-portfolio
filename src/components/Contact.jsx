import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

function Contact() {
  return (
    <div className="p-10">
      {/* <Header /> */}
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="text-gray-600 mt-2">Feel free to reach out via the platforms below:</p>

      <ul className="mt-4 space-y-2 text-blue-600 underline">
        <li><a href="mailto:idrisyussuf23@gmail.com"> Email</a></li>
        <li><a href="https://github.com/idris-1351" target="_blank">GitHub Profile</a></li>
        <li><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">LinkedIn Profile</a></li>
      </ul>

      {/* <Footer /> */}
    </div>
  );
}

export default Contact;
