import React from 'react'

const Form = () => {
  return (
    <div className="bg-60W text-10B basis-1/2 px-32 pt-5 flex flex-col justify-center">
        <div action={null} className='flex flex-col gap-8 mx-auto w-full max-w-[600px]'>
            <div className="flex flex-col gap-3">
                <h1 className='text-4xl tracking-tight'>Contact sales form</h1>
                <h1 className='text-30B'>Please fill out the form below to get started</h1>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <h1 className=''>Company Website</h1>
                    <input type="text" placeholder='elevenlabs.io' className='outline-1 outline-10W focus:outline-10B rounded-xl p-3 px-4'/>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className=''>Business Email</h1>
                    <input type="email" placeholder='example@elevenlabs.io' className='outline-1 outline-10W focus:outline-10B rounded-xl p-3 px-4'/>
                </div>
            </div>
            <div className="flex justify-between items-center py-6">
                <button className='bg-30B text-60W rounded-full hover:cursor-not-allowed active:scale-98 px-4 py-2.5' onClick={null}>Next</button>
                <div className="flex gap-2">
                    <div className="bg-10B h-1 w-18 rounded-full"></div>
                    <div className="bg-10F h-1 w-18 rounded-full"></div>
                    <div className="bg-10F h-1 w-18 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form