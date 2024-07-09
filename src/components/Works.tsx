import { MdOutlineArrowOutward } from "react-icons/md";
import { workItems } from "../data/index";

export default function Works() {
    return (
        <section id="works" className="relative flex flex-col w-full h-full bg-black py-20">
            <h3 className="text-xl text-white z-50 container pb-5">
                Our Services
            </h3>
            {workItems.map((item) => (
                <div key={item.id} className="flex justify-evenly container py-20 border-b-2 group">
                    <div className="flex flex-col p-6 gap-2 justify-between">
                        <div>
                            <h2 className="text-4xl font-semibold pb-3">{item.title}</h2>
                            <p className="pb-12">{item.description}</p>
                            <div className="grid">
                                <div className="flex gap-10 pb-4">
                                    <span className="w-[30%]">Category:</span>
                                    <span className="w-[50%]">{item.category}</span>
                                </div>
                                <div className="flex gap-10">
                                    <span className="w-[30%]">Tag:</span>
                                    <span className="w-[50%]">{item.tag}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="flex gap-4">
                            Project Details <MdOutlineArrowOutward />
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-full h-full overflow-hidden rounded-3xl">
                            <img src={item.img} alt={item.title} sizes="objectFit" 
                            width="auto"
                            height="auto"
                            className="group-hover:scale-105 duration-300"/>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
}
