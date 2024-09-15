"use client";
import Image from 'next/image'

export default function ImageCards({image1,image2,image3, style, text}) {
    return (
        /* From Uiverse.io by eslam-hany */ 
        <div className={` flex flex-col items-between  w-min items-center  ${style}`}>
            <div className="book max-[830px]:max-w-fit max-h-fit w-fit mx-auto">
                <Image
                    src={image1}
                    width={300}
                    height={300}
                    className='pointer-events-none w-auto max-w-fit'
                    alt="Benyahia Mostapha"
                    />
                    {image3 ==="/family/lotfi3.jpg"&&(
                        <Image
                        src={image3}
                        width={300}
                        height={300}
                        className='pointer-events-none w-auto max-w-fit'
                        alt="Benyahia Mostapha"
                        />
                    )}
                <div className="cover max-[830px]:max-w-fit w-auto" >
                    <Image
                    src={image2}
                    width={300}
                    height={300}
                    className='pointer-events-none w-auto max-w-fit'
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
