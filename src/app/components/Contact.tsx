import React from 'react'
 
 const Contact = () => {
   return (
     <div className='h-96 bg-white w-screen flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-indigo-500 '>Contact Us!</h1>
        <p className='text-lg my-6 text-center  max-w-md w-ful mx-3 text-gray-700'>Got an idea, project, or collab in mind? Let’s build something amazing together—reach out anytime.</p>
        <button className="button my-5"><a href="mailto:therealteejay25@gmail.com">Reach out to us!</a></button>
     </div>
   )
 }
 
 export default Contact