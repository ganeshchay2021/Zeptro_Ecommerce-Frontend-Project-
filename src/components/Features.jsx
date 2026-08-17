import { Clock, Lock, RotateCcw, Truck } from 'lucide-react'
import React from 'react'

const Features = () => {
    const features = [
        { icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100' },
        { icon: Lock, text: 'Secure Payment', subtext: '100% protected payments' },
        { icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy' },
        { icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service' },
    ]
    return (
        <section className='bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10'>
                        {
                            features.map((feature,index)=>{
                                return (
                                    <div className='flex items-center gap-x-5 sm:justify-center' key={index}>
                                        <feature.icon className='h-10 w-10 text-gray-600'/>
                                        <div>
                                            <p className='font-medium text-gray-900'>{feature.text}</p>
                                            <p className='text-gray-500 text-sm mt-1'>{feature.subtext}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </section>
    )
}

export default Features