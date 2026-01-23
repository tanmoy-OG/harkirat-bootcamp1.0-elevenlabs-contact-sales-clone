import React from 'react'
import { LuRocket } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import { RiBuildingLine } from "react-icons/ri";
import { SiCisco } from "react-icons/si";
import { FaStar } from "react-icons/fa6";

const Aside = () => {
    return (
        <div className="bg-60B text-60W basis-1/2 h-full flex flex-col justify-between">
            <div className="px-14 py-14">
                <a href="" className='hover:text-30B font-serif font-semibold text-xl transition-all inline-flex rounded h-20'>IIElevenLabs</a>
                <div className="flex flex-col gap-6.5">
                    <h1 className='text-5xl tracking-tighter'>Contact our sales team</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-1.5 items-center">
                            <img
                                src="https://elevenlabs.io/assets/contact-sales/rocket.svg"
                                alt=""
                                className='size-5'
                            />
                            <h1 className='inline-flex'>Custom pricing and elevated concurrency</h1>
                        </div>
                        <div className="flex gap-1.5">
                            <img
                                src="https://elevenlabs.io/assets/contact-sales/shield.svg"
                                alt=""
                                className='size-5'
                            />
                            <h1 className='inline-flex'>Enterprise-grade security including SOC II, GDPR and HIPAA compliance</h1>
                        </div>
                        <div className="flex gap-1.5 items-center">
                            <img
                                src="https://elevenlabs.io/assets/contact-sales/enterprise.svg"
                                alt=""
                                className='size-5'
                            />
                            <h1 className='inline-flex'>Enterprise support and SLAs</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col justify-between px-14">
                    <h1 className='text-30W text-sm'>Trusted by 10,000+ leading businesses</h1>
                    <div className="grid items-center grid-cols-5 gap-x-10 gap-y-10 py-14">
                        <img
                            src="https://elevenlabs.io/assets/contact-sales/cisco-white.svg"
                            alt="cisco"
                        />
                        <img
                            src="https://elevenlabs.io/assets/contact-sales/deutsche-telekom-white.svg"
                            alt="telekom"
                        />
                        <img
                            src="https://elevenlabs.io/assets/contact-sales/walt-disney-studios-white.svg"
                            alt="disney"
                        />

                        <img
                            src="https://elevenlabs.io/assets/contact-sales/nvidia-white.svg"
                            alt="nvidia"
                        />

                        <img
                            src="https://elevenlabs.io/assets/contact-sales/salesforce-white.svg"
                            alt="salesforce"
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-0.5">
                            <FaStar className='size-5' />
                            <FaStar className='size-5' />
                            <FaStar className='size-5' />
                            <FaStar className='size-5' />
                            <FaStar className='size-5' />
                        </div>
                        4.5 stars and 1,059+ reviews
                    </div>
                </div>
                <div className="bg-60B relative w-full h-[250px]">
                    <div className="wave wave1 z-100"></div>
                    <div className="wave wave2 z-90 opacity-50"></div>
                    <div className="wave wave3 z-80 opacity-20 mb-2"></div>
                    <div className="wave wave4 z-70 opacity-70 mb-6"></div>
                </div>
            </div>
        </div>
    )
}

export default Aside