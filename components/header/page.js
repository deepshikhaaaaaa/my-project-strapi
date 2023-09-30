'use client'


export default function Header() {
    // console.log(props.dataa)

    return (




       <div>
         <nav class="flex items-center justify-between bg-[#F16622] h-20 shadow-2xl">
            <div class="logo">
                <h1 class="text-white ml-4 cursor-pointer text-2xl">Logo here</h1>
            </div>
            <ul class="flex">
                <li>
                    <a class="text-[#F16622] mr-4 bg-white pt-4 p-4 pr-5 pl-5 hover:bg-gray-100 transition-all rounded" href="#"><i class="fas fa-home"></i> Home</a>
                </li>
                <li>
                    <a class="text-[#F16622] mr-4 bg-white pt-4 p-4 pr-5 pl-5 hover:bg-gray-100 transition-all rounded" href="#"><i class="fas fa-question"></i> About</a>
                </li>
                <li>
                    <a class="text-[#F16622] mr-4 bg-white pt-4 p-4 pr-5 pl-5 hover:bg-gray-100 transition-all rounded" href="#"><i class="fas fa-reply"></i> Contact</a>
                </li>
            </ul>
        </nav>
       
       </div>

    )
}