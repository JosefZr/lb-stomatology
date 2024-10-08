import useReveal from "@/hooks/useReveal"

export default function  Form() {
    useReveal("horizontal")
    useReveal("vertical")
  return (
    <div className=' mx-auto flex gap-4 flex-col text-center place-content-center xl:max-w-[1200px] max-[500px]:px-2 py-20'>

        <div className=" flex flex-col gap-8 mb-10">
        <div className=' flex flex-col gap-5'>
            <div className='reveal-vertical text-5xl font-bold uppercase max-[400px]:text-3xl max-xs:text-xl'>WANT TO BE A HIGH-VALUE MAN !? </div>
            <h2 className='reveal-vertical text-3xl font-semibold uppercase max-[400px]:text-2xl max-xs:text-lg'>Let me give you The Top 10 keys of how to become successful</h2>
        </div> 

        <div className=' flex flex-col gap-5'>
            <div className='reveal-horizontal-left font-bold text-5xl max-[450px]:text-2xl'>•The world’s Next Gen Justice•</div>
            <h2 className='reveal-horizontal-right text-3xl font-semibold uppercase text-word-purple max-[400px]:text-2xl max-xs:text-lg'>Soon</h2>
        </div>
        </div>
        <button className='btn capitalize w-fit mx-auto'onClick={() => window.open(' https://forms.gle/XPuytR27ih2P96Su7 ', '_blank')} >ЛБ’s Generations</button>
    </div>
  )
}
