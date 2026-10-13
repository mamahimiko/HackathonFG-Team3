import { CircleCheck,ArrowRight } from "lucide-react"
import TitleKits from "../TitleKits"

const ToolsSection = () => {
    return (
        <div className="bg-bg-surface w-full">
            <div className="p-20 max-w-360 mx-auto">
                    <div className="flex justify-between">
                    <TitleKits
                    label={"THE ENGINE, IN ACTION"}
                    title={"Tools for limitless worlds."}
                    className="max-w-none xl:h-auto pb-10"
                    />
                </div>
                <div className="flex justify-between">
                    <img src="/tools.png" alt="Tools img"  className="w-185 h-auto"/>
                    <div className="w-121 flex flex-col gap-6">
                        <p className="text-text-primary subheading">Build without limits. <br/> An engine made for creators.</p>
                        <p className="text-text-secondary body-text">Shape every block, bring your world to life and build experiences worth sharing. Your ideas stay at the heart of the process.</p>
                        <div className="flex flex-col gap-[14.5px] text-text-primary body-state-label">
                            <p className="flex gap-3"><CircleCheck className="text-primary w-4.5" />Flexible voxel system</p>
                            <p className="flex gap-3"><CircleCheck className="text-primary w-4.5" />Real-time rendering</p>
                            <p className="flex gap-3"><CircleCheck className="text-primary w-4.5" />Multiplayer support</p>
                            <p className="flex gap-3"><CircleCheck className="text-primary w-4.5" />Easy integration with Steam</p>
                        </div>
                        <div className="border border-[#2D2050] w-fit py-[13px] px-[22px] menu items-center leading-none">
                            <p className=" flex text-primary gap-3">Explore GEMU Engine<ArrowRight className="w-[17px]" /> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolsSection