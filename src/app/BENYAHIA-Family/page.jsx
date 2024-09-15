"use client";

import ImageCards from "./components/ImageCards";

export default function BENYAHIAFamily() {
    return (
        <div className=" flex flex-row max-[830px]:flex-col max-[830px]:gap-28 justify-center max-[830px]:items-center gap-14 max-w-fit mx-auto pt-20 pb-28">
            <ImageCards 
                image1={"/family/mus2.jpg"} 
                image2={"/family/mus1.jpg"} 
                style=" gap-5  "
                text={(
                    <>
                    <span className=" font-bold">Dr.M.BENYAHIA</span><br/>
                    With over 30 years in the field, he's constantly updating his dental knowledge to provide you with a unique experience !"    
                    </>
                )}
            />
            <ImageCards  
                image1={"/family/lotfi2.jpg"} 
                image2={"/family/lotfi1.jpg"}  
                image3={"/family/lotfi3.jpg"}  
                style=" gap-5"
                text={(
                    <>
                        <span className=" font-bold">L.BENYAHIA</span>(H-V-M)
                        <br />
                        • Studying at Kazan State Medical University.
                        <br />
                        • The leader of  <br />
                            <span 
                                className='hover:text-word-purple cursor-pointer' 
                                onClick={() => window.open('https://t.me/lbstoma1', '_blank')}
                            > •ЛБ-STOMATOLOGY 🦷.</span><br /> 
                            <span 
                                className='hover:text-word-purple cursor-pointer' 
                                onClick={() => window.open(' https://forms.gle/XPuytR27ih2P96Su7 ', '_blank')}
                            > •ЛБ’s Generations 🌍.</span><br />
                            <span 
                                className='hover:text-word-purple cursor-pointer' 
                                onClick={() => window.open(' https://forms.gle/TxhJ66vKRvBA6ywC9', '_blank')}
                            > • ⁠ЛБ-THE MAN .</span>  
                    </>
                )}
            />
        </div>
    );
}
