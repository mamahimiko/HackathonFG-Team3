import { Clock, Users, Mail, MoveRight } from "lucide-react"
import TitleKits from "../TitleKits"

const RequestAccess = () => {
    return (
        <div className="bg-[#201A35] w-full">
            <div className="p-20 flex flex-row gap-20 w-fit mx-auto max-w-[1440px]">
                <div className=" flex flex-col gap-6">
                    <TitleKits 
                        label="EARLY ACCESS APPLICATION"
                        title="Tell us a bit about yourself."
                        text="We’re inviting creators and studios to help shape the GEMU Engine. Tell us who you are and what you’d love to build."
                        className="max-w-none xl:h-auto"
                    />
                    <div className="flex-col gap-4.75 text-text-purple">
                        <div className="flex gap-[13.5px]">
                            <Clock className="w-4.75 text-primary"/>
                            <p>Takes around 5 minutes</p>
                        </div>
                        <div className="flex gap-[13.5px]">
                            <Users className="w-4.75 text-primary" />
                            <p>For indie creators and studios</p>
                        </div>
                        <div className="flex gap-[13.5px]">
                            <Mail className="w-4.75 text-primary" />
                            <p>We’ll follow up by email</p>
                        </div>
                    </div>
                    <img src="/request.png" alt="request img" className="w-105 h-81 rounded-2xl"  />
                    <p className="text-small text-text-purple">Big ideas. Small blocks. Endless possibilities.</p>
                    <div className="flex flex-col gap-2 pt-5">
                        <p className="text-text-primary body-text">A question before you apply?</p>
                        <p className="text-primary flex flex-row gap-2 menu">Talk to the GEMU community <MoveRight /></p>
                    </div>
                </div>
                <div className="p-9 rounded-2xl bg-bg-surface text-text-primary">
                    <div className="flex flex-col gap-2">  
                        <p className="section-heading">Request early access</p>
                        <p className="text-text-purple text-small">Let’s get to know you. Fields marked * are required.</p>
                    </div>
                    <span className="flex my-7  border-b border-text-purple"></span>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-1.5 items-center leading-none">
                            <span className="text-primary body-state-label">01</span>
                            <p className="subheading">About you</p>
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="flex flex-col">
                                <label>Name *</label>
                                <input className="input w-full bg-bg-input border border-border-line2 rounded-l" name="name" />
                            </div>
                            <div className="flex flex-col">
                                <label>Email *</label>
                                <input className="input w-full bg-bg-input border border-border-line2 rounded-l" name="email" />
                            </div>
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="flex flex-col">
                                <label>Studio/Individual *</label>
                                <input className="input w-full  bg-bg-input border border-border-line2 rounded-l" name="studio"  />
                            </div>
                            <div className="flex flex-col">
                                <label>Studio name *</label>
                                <input className="input w-full  bg-bg-input border border-border-line2 rounded-l" name="studio name" />
                            </div>
                        </div>
                    </div>
                    <span className="flex my-7  border-b border-text-purple"></span>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-1.5 items-center leading-none">
                            <span className="text-primary body-state-label">01</span>
                            <p className=" subheading">About you</p>
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="flex flex-col">
                                <label>Project type *</label>
                                <input className="input w-full bg-bg-input border border-border-line2 rounded-l" name="project type" />
                            </div>
                            <div className="flex flex-col">
                                <label>Team size *</label>
                                <input className="input w-full bg-bg-input border border-border-line2 rounded-l" name="team size *" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label>What are you planning to build? *</label>
                                <input className="input w-full bg-bg-input border border-border-line2 rounded-l" />
                                <p className="text-text-purple text-small">A short overview is perfect. Tell us what excites you about your idea.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label>Project or portfolio link</label>
                                <input className="input w-full bg-bg-input border border-border-line2 rounded-l" />
                                <p className="text-text-purple text-small">Optional — a website, prototype or portfolio helps us get to know your work.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestAccess