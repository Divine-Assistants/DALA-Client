import React from 'react'

export function About() {
  return (
    <>
        <div className='w-[90%] m-auto'>
            <div className=''>
              <div className='md:hidden text-left pt-[138px] mb-[181px] '>
                      <h1 className='font-semibold text-[#1E1E1E] text-[36px] mb-[5px] '>About DALA</h1>
                      <p className='text-[16px] text-black  '>Learn more about DivineAssistants Learning Academy</p>
              </div>
                  <div className='hidden md:block md:rounded-[15px] md:w-[100%] md:m-auto md:mt-[76px] md:relative md:mb-[256px]   '>
                      <img src="/images/about-back.svg" alt="" />
                      <h1 className='font-semibold md:text-[55px] text-[#FAFAFA] absolute z-10 md:top-[30%] md:left-[30%] lg:text-[75px] lg:top-[35%] lg:left-[35%]   '>About Us</h1>
                  </div>
            </div>
            <div className='lg:flex lg:gap-[89px] lg:items-center lg:m-auto lg:mb-[186px] '>
                <div className='bg-black mb-[40px] lg:w-[45%]    '>
                  <video autoPlay loop className='lg:h-[100%] md:w-[100%]'>
                      <source src="./videos/about-video.mp4"   />
                 </video>    
               </div>
                <div className='mb-[40px] lg:w-[50%]  '>
                    <h1 className='text-[#1E1E1E] font-semibold text-[24px] mb-[5px] md:text-[50px] '>About Us</h1>
                    <p className='text-[#1E1E1E] text-[16px] md:text-[28px]  '>
                    DALA is an incredible arm of DivineAssistants that came to life in 2023. It is a unique learning academy with a mission to provide quality training to youths in the tech space, promoting growth and development. The youth who complete the training program are provided with an opportunity to be apprentices with the company and potentially be retained. Since its inception, DALA has made significant strides towards its mission of developing young talent into tech leaders of tomorrow, providing them with a platform to make a lasting impression. Through this initiative, DivineAssistants is making a substantial contribution to the community by creating a better future for the youth and helping them reach their potential.
                    </p> 
                </div>
            </div>
            </div>
            <div className='lg:mb-[388px] text-[20px] bg-[FAFAFA] shadow-[5px_5px_15px_rgba(0,0,0,0.1)] rounded-[5px] flex lg:flex lg:items-center items-center gap-[29px] lg:gap-[163px] justify-around lg:justify-around py-[20px] lg:py-[28px] mb-[205px] lg:w-[80%]  lg:shadow-[15px_15px_15px_rgba(0,0,0,0.1)] lg:rounded-[15px]  lg:m-auto lg:text-center '>
                <p className='md:text-[32px] lg:text-[50px]'><span className='font-semibold md:text-[44px] lg:text-[64px]  '>20k+</span> students</p>
                <p className='md:text-[32px] lg:text-[50px]'><span className='font-semibold md:text-[44px] lg:text-[64px] '>70</span> Tutors</p>
                <p className='md:text-[32px] lg:text-[50px]'><span className='font-semibold md:text-[44px] lg:text-[64px] '>150k+</span> courses</p>
            </div>
            <div className='w-[90%] m-auto lg:flex lg:items-center lg:gap-[61px] lg:flex-row-reverse  '>
              <div className='w-fit m-auto mb-[40px] lg:w-[40%]  lg:mt-[0px] '>
              <img src="/images/Macbook-Pro.svg" alt="Laptop Display" className='lg:w-[100%] lg:w-[100%] ' />
              </div>
              <div className='lg:w-[50%] '>
              <h2 className='font-semibold text-[24px] md:text-[38px] lg:text-[50px] text-[#1E1E1E] '>Online and Video Based Learning Platform</h2>
              <p className=' text-[#1E1E1E] text-[16px] md:text-[24px] mb-[210px] '>DALA is a short video-based learning academy that offers administrative and business management programs. Our programs are designed to provide students with the knowledge and skills they need to successfully manage an organization or develop a business.

Our program curriculum covers crucial topics such as financial literacy, communication strategies, project management, problem solving, decision making and organizational development. We emphasize the importance of understanding the concepts of leadership, management styles, negotiation tactics and strategic planning. With our coursework, students can gain an understanding of how to increase productivity in their workplace while developing their own professional career paths. DALA provides a high-quality learning experience for our students with its short video lectures which are supplemented by assignments and assessments so that participants can measure their progress as they learn. The courses also include case studies from real-world scenarios where students can apply the concepts learned in class in practical scenarios.</p>
              </div>
            </div>
    </>
  )
}
