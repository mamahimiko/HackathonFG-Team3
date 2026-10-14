import { Play,Zap,Users,Cloud } from "lucide-react"
import Head from "next/head"
import Header from "../Header"

const HeroSection = () => {
    return (
        <section className="relative w-full bg-[url('/hero-bg.png')] bg-size-[100%_auto] overflow-hidden bg-no-repeat bg-accent">
            <Header />
            <div className="absolute inset-0 bg-linear-to-r from-bg-dark via-bg-dark/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-t from-bg-surface/90 via-bg-surface/40 to-transparent pointer-events-none" />
            <div className="relative z-10 px-20">
                <div className="flex flex-col gap-6.5 leading-[1.06] pt-22.5 pb-46.25 ">
                    <div  className="text-small bg-bg-black border border-border-line rounded-full w-fit px-3 py-2 flex items-center gap-[5.5px]">
                        <span className="w-1.5 h-1.5 rounded-xs bg-bg-icon shrink-0 translate-y-[0.5px]"></span>
                        <p className="text-small text-text-primary">EARLY ACCESS APPLICATIONS OPEN</p>
                    </div>
                    <h1 className="main-title text-text-primary">Powerful voxel <br/> game development.</h1>
                    <h3 className="body-text text-text-purple max-w-130">Create, iterate and launch games with a modern voxel engine built for everyone. From indie creators to professional studios.</h3>
                    <div className="text-text-primary font-semibold">
                        <p className="flex gap-2.5 menu items-center leading-none">
                            <Play className="w-4.5 shrink-0"/>Explore
                        </p>
                    </div>
                </div>
                <div className="pb-12.5 body-state-label text-text-primary flex justify-between border-t border-text-primary pt-8 ">
                    <div className="flex gap-9">
                        <p className="flex"><Zap className="w-4.5 text-bg-icon" />Real-time rendering</p>
                        <p className="flex"><Users  className="w-4.5 text-bg-icon" />Multiplayer ready</p>
                        <p className="flex"><Cloud  className="w-4.5 text-bg-icon" />Steam integration</p>
                    </div>
                    <div>
                        <p> A WORLD OF POSSIBILITIES. BUILT IN VOXELS.</p>
                    </div>
                </div>
            </div> 
        </section>
    )
}
export default HeroSection