import React from 'react'

export function Tutor() {
  return (
    <>
                      <div className='bg-[url("/images/about-back2.svg")] pt-[54px] pb-[54px] mb-[95px] '>
                  <div className='w-[90%] m-auto mb-[26px] text-center md:w-[60%] '>
                    <h2 className='text-[#004AAD] font-semibold text-[24px] mb-[26px] md:text-[36px] '>Becoming a DALA tutor in 5 easy steps</h2>
                    <p className='font-semibold  text-[13px] text-[#1E1E1E] mb-[26px] md:text-[20px] '>Click on the button below
Fill a form and an email will be sent shortly after
A meeting schedule between you and HR will be sent for evaluation
Upon successful evaluation, a Tutor Identification Code (TIC) will be sent to your email
Log In as a tutor <span className='text-[#004AAD]'>AND VOILA!!!</span></p>
                 <button className='font-semibold text-[16px] md:text-[20px] text-[#FAFAFA] py-[18px] px-[25px] rounded-[10px] bg-[#004AAD]  mb-[40px] m-auto  '>Become a DALA tutor</button>
                  </div>
                  <div className='flex items-center justify-between md:gap-[15px] md:justify-around   '>

                       <div className='rounded-[10px] w-[33px] h-[258px] md:w-[15%] md:-translate-y-[98px] md:h-[200px] lg:h-[258px]  '>
                          <img src="/images/tutor-side.png" alt="Become a tutor" className='w-[100%] h-[100%] rounded-[10px] md:hidden' />
                          <img src="/images/tutor3.png" alt="Become a tutor" className='w-[100%] h-[100%] rounded-[10px] hidden md:block ' />
                        </div>

                        <div className='rounded-[10px] w-[278px] h-[258px] md:w-[15%] md:mt-[73px] hidden md:block md:h-[200px] lg:h-[258px] '>
                          <img src="/images/tutor3.png" alt="Become a tutor" className='w-[100%] h-[100%] rounded-[10px]' />
                        </div>

                        <div className='rounded-[10px] w-[278px] h-[258px] md:w-[20%] md:-translate-y-[26px] md:h-[200px] lg:h-[258px] '>
                          <img src="/images/tutor3.png" alt="Become a tutor" className='w-[100%] h-[100%] rounded-[10px]' />
                        </div>

                        <div className='rounded-[10px] w-[278px] h-[258px] md:w-[15%] md:mt-[73px] hidden md:block md:h-[200px] lg:h-[258px] '>
                          <img src="/images/tutor3.png" alt="Become a tutor" className='w-[100%] h-[100%] rounded-[10px]' />
                        </div>

                        <div className='rounded-[10px] w-[33px] h-[258px] md:w-[15%] md:h-[200px] lg:h-[258px]  md:-translate-y-[98px] '>
                          <img src="/images/tutor-side2.png" alt="Become a tutor" className='w-[100%] h-[100%] rounded-[10px] md:hidden ' />
                          <img src="/images/tutor3.png" alt="Become a tutor" className='w-[100%] h-[100%] rounded-[10px] hidden md:block ' />
                        </div>
                  </div>
              </div>
    </>
  )
}
