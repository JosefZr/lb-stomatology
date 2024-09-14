import Image from 'next/image'
import React from 'react'

export default function ImageCards({image1,image2, style, text}) {
    return (
        /* From Uiverse.io by eslam-hany */ 
        <div className={` flex flex-col items-between  w-min items-center  ${style}`}>
            <div className="book max-[830px]:max-w-fit w-fit mx-auto">
                <Image
                    src={image1}
                    width={300}
                    height={300}
                    className=' w-auto max-w-fit'
                    alt="Benyahia Mostapha"
                    />
                <div className="cover max-[830px]:max-w-fit w-auto" >
                    <Image
                    src={image2}
                    width={300}
                    height={300}
                    className=' w-auto max-w-fit'
                    alt="Benyahia Mostapha"
                    />
                </div>
            </div>
            <h1 className=' text-center'>
                {text}
            </h1>
        </div>
    )
}
