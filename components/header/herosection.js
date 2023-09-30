'use client'
import Image from "next/image"

export default function Herosection(props) {
    console.log(props)
    const bg = "http://localhost:1337" + props.img;
console.log(bg);
    
    return (
        <div className={`hero gap-[222px] flex `} style={{ backgroundImage: `url(${bg})` }}>
            <div className="textdiv">
                <p className="texta">
                    {props.dataa.texta}
                </p>
                <p className="textb">
                {props.dataa.textb}
                </p>
                <div className="flex flex-col gap-[10px] mt-[10px]">
                    {
                        props.datab.map((e,i)=>{
                            return(
                                <div className="flex">
                        <Image src='/item.png' width={50} height={50}></Image>
                        <p className="relative left-[-20px] textc">
                            {e.textc}
                        </p>
                    </div>
                            )
                        })
                    }
                    {/* <div className="flex">
                        <Image src='/item.png' width={50} height={50}></Image>
                        <p className="relative left-[-20px] textc">
                            Better Methods, Best Outcome
                        </p>
                    </div>
                    <div className="flex">
                        <Image src='/item.png' width={50} height={50}></Image>
                        <p className="relative left-[-20px] textc">
                            Strategic Partnership Approach
                        </p>
                    </div>
                    <div className="flex">
                        <Image src='/item.png' width={50} height={50}></Image>
                        <p className="relative left-[-20px] textc">
                            Multicultural Approach
                        </p>
                    </div> */}
                </div>
                <div>
                    <button className="butt  hover:bg-white hover:text-[#F60] float-right mb-[20px]">{props.dataa.button}</button>
                </div>
            </div>
            <div className="viddiv">

            </div>
        </div>
    )
}