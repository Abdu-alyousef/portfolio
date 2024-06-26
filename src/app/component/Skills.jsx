"use client"
import Image from "next/image"
import Container from "./Container"
export default function Skills  () {
    return (
        <Container>
        <div  className="mt-10">
            <div className="border flex flex-col items-center gap-12 py-10 rounded overflow-hidden shadow-lg bg-gray-50">
                <h1 className="font-bold text-2xl uppercase- text-gray-800 opacity-90 border-l-[7px] pl-2 border-gray-800">Skills</h1>
                <div className="flex flex-col gap-4 px-6">
                <p className="font-semibold text-gray-800 opacity-95">My expertise encompasses a wide array of frontend technologies, including:</p>
                <ul className="list-disc text-gray-700 text-sm pl-5">
                    <li>HTML5, CSS3, and JavaScript for building dynamic and visually stunning websites.</li>
                    <li>Modern CSS frameworks like Scss, Tailwind CSS, and Material-UI for rapid prototyping and responsive design.</li>
                    <li>JavaScript libraries and frameworks such as React.js and Next.js for building scalable and interactive web applications.</li>
                    <li>Version control systems like Git for seamless collaboration and code management.</li>
                </ul>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center gap-2">
                    <Image src="/javascript.svg" alt="Logo" width={25} height={25} />
                    <span className="font-semibold text-sm uppercase text-gray-700">JAVASCRIPT</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Image src="/html.svg" alt="Logo" width={25} height={25} />
                    <span className="font-semibold text-sm uppercase text-gray-700">HTML5</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Image src="/css3.svg" alt="Logo" width={25} height={25} />
                    <span className="font-semibold text-sm uppercase text-gray-700">CSS3</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Image src="/nextjs.svg" alt="Logo" width={25} height={25} />
                    <span className="font-semibold text-sm uppercase text-gray-700">NEXTJS</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Image className="ring-white ring-2 rounded-full" src="/react.svg" alt="Logo" width={25} height={25} />
                    <span className="font-semibold text-sm uppercase text-gray-700">REACT</span>
                    </div>
                   
                </div>
            </div>
        </div>
        </Container>
    )
}