'use client';
export default function Nexthead(props) {
    console.log(props.data)
    return (
        <div>
            <div className="nexthead h-[70px] flex w-full">

<div className=" flex overflow-auto">
    
{
                    (props.data).map((e, i) => {
                        return (
                            <div className="h-[80px] p-2 justify-center flex items-center">
                                <p className=" text-white border-solid border-l-[2px] border-white h-[70px] font-[500] pl-[18px] pt-[8px] w-[180px] ">
                                    {e.link}
                                </p>
                            </div>
                        )
                    })
                }
                 {/* <div className="h-[80px] justify-center flex items-center">
                    <p className=" text-white border-solid border-l-[2px] border-white h-[70px] font-[500] pl-[18px] pt-[8px] w-[168px]">
                        MARKET RESEARCH
                        & ANALYSIS
                    </p>
                </div>
                <div className="h-[80px] justify-center flex items-center">
                    <p className=" text-white border-solid border-l-[2px] border-white h-[70px] font-[500] pl-[18px] pt-[8px] w-[150px]">TRANSCRIPTION
                        SERVICES
                    </p>
                </div>
                <div className="h-[80px] justify-center flex items-center">
                    <p className=" text-white border-solid border-l-[2px] border-white h-[70px] font-[500] pl-[18px] pt-[8px]  w-[142px]">
                        MULTILINGUAL
                        CALL CENTER
                    </p>
                </div>
                <div className="h-[80px] justify-center flex items-center">
                    <p className=" text-white border-solid border-l-[2px] border-white h-[70px] font-[500] pl-[18px] pt-[8px] w-[126px]">
                        DATA ENTRY
                        SERVICES
                    </p>
                </div>
                <div>

                    <p className=" text-white border-solid border-l-[2px] border-white h-[70px] font-[500] pl-[18px] pt-[8px] w-[111px]">
                        CREATIVE
                        SERVICES
                    </p>
                </div>
                <div className="h-[80px] justify-center flex items-center">
                    <p className=" text-white border-solid border-l-[2px] border-white h-[70px] font-[500] pl-[18px] pt-[8px] w-[158px]">
                        PHOTO EDITING
                        SERVICES
                    </p>
                </div>
                <div className="h-[80px] justify-center flex items-center">
                    <p className=" text-white border-solid border-l-[2px] border-white h-[70px] font-[500] pl-[18px] pt-[8px] w-[177px]">
                        VIRTUAL ASSISTANT
                        SERVICES
                    </p>
                </div> */}

</div>


               
            </div>
        </div>
    )
}