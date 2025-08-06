import React from 'react';

function Footer() {
  return (
    <div className='bg-blue-900 w-full text-white text-center pt-9 pb-5'>
      <h1>Let’s turn reality into digital reality</h1>
      <h1>I’m always open to meaningful collaborations, freelance projects, or just a good tech talk. Don’t hesitate to reach out.</h1>
      <h1 className="mt-2">© 2025 Idris Yussuf,  Full stack Developer & Creative Technologist</h1>
      <p>Crafted with precision and  passion</p>
      <div className='flex justify-center mt-4 gap-4 text-2xl'>
        <a href="https://github.com/idris-1351" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin text-white"></i>
        </a>
        <a href="mailto:idris@1351.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
