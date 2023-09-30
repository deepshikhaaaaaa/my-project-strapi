'use client'
import Image from "next/image"

export default function Herosection() {
    return (
        <div className="hero gap-[222px] flex">
            <div className="textdiv">
                <p className="texta">
                    Turn Your Insights into Action With
                </p>
                <p className="textb">
                    MULTICOUNTY MARKET RESEARCH COMPANY
                </p>
                <div className="flex flex-col gap-[10px] mt-[10px]">
                    <div className="flex">
                        <Image src='/item.png' width={50} height={50}></Image>
                        <p className="relative left-[-20px] textc">
                            Custom Solution, Specific to your Brand
                        </p>
                    </div>
                    <div className="flex">
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
                    </div>
                </div>
                <div>
                    <button className="butt  hover:bg-white hover:text-[#F60] float-right">FREE CONSULTATION</button>
                </div>
            </div>
            <div className="viddiv">

            </div>
        </div>
    )
}