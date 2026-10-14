import { Check, Mail, Search, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ConfirmationCard({
  icon: HeaderIcon = Check,
  title = "Thanks for your application!",
  description = "We've received your request for early access to the GEMU Engine. Our team will review your application and get back to you as soon as possible.",
  email = "gamu@gamu.games",
  sectionTitle = "WHAT HAPPENS NEXT?",
  steps = [
    {
      icon: CheckCircle2,
      title: "Application received",
      subtitle: "You're on our list.",
    },
    {
      icon: Search,
      title: "Under review",
      subtitle: "We'll get to know your project.",
    },
    {
      icon: Mail,
      title: "You'll hear from us",
      subtitle: "Keep an eye on your inbox.",
    },
  ],
  buttonText = "Back to homepage",
  onButtonClick = () => console.log('Button clicked'),
}) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#18132B]/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-white/5 font-sans">
      
      {/* Top Header Icon */}
      {HeaderIcon && (
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#2A1D45] flex items-center justify-center text-[#A855F7]">
            <HeaderIcon className="w-6 h-6 stroke-[2.5]" />
          </div>
        </div>
      )}

      {/* Main Title & Description */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl sm:text-4xl sm:leading-tight font-bold tracking-tight text-white">
          {title}
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Email Confirmation Notice */}
      {email && (
        <div className="flex items-center justify-center gap-2.5 text-gray-300 text-sm mb-10 text-center">
          <Mail className="w-4 h-4 text-[#A855F7] shrink-0" />
          <span>
            You’ll receive a confirmation email shortly at <strong className="font-semibold text-white">{email}</strong>.
          </span>
        </div>
      )}

      {/* Divider */}
      <hr className="border-white/10 mb-8" />

      {/* "What Happens Next" Section */}
      <div className="text-center">
        {sectionTitle && (
          <h2 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-8">
            {sectionTitle}
          </h2>
        )}

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#2A1D45] flex items-center justify-center text-[#A855F7] mb-1">
                  <StepIcon className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-sm font-medium text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 leading-snug">
                  {step.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <button
          onClick={onButtonClick}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#8B5CF6] text-[#C4B5FD] font-medium text-sm hover:bg-[#8B5CF6]/10 hover:text-white transition-all duration-200 active:scale-95"
        >
          <span>{buttonText}</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}