import { TypingAnimation } from "../components/magicui/typing-animation";
import { TextAnimate } from "../components/magicui/text-animate";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import { ShimmerButton } from "../components/magicui/shimmer-button";

import Image1 from "../assets/image1.png";
import Image2 from "../icons/ml.png";
import Image3 from "../icons/accurate.png";

import Image4 from "../icons/record.png";
import Image0 from "../assets/img0.jpeg";

function Homepage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      credits: "2,000 free monthly credits",
      features: [
        "FLORA editor + all models",
        "3 projects",
        "1 week of generation history",
        "Project sharing",
        "Purchase more credits",
      ],
      buttonText: "Get this plan",
    },
    {
      name: "Professional",
      price: "$16",
      subtext: "per month billed annually",
      credits: "10,000 free monthly rollover credits",
      badge: "Best value",
      features: [
        "Everything in Starter, plus",
        "50 projects",
        "Credits roll over to next month",
        "Unlimited generation history",
        "Custom asset storage",
        "Commercial use",
      ],
      buttonText: "Get this plan",
    },
    {
      name: "Agency",
      price: "$48",
      subtext: "per month billed annually",
      credits: "60,000 free monthly rollover credits",
      features: [
        "Everything in Professional, plus",
        "Unlimited project files",
        "10% off additional credits",
      ],
      buttonText: "Get this plan",
    },
    {
      name: "AI Partner",
      price: "Custom",
      subtext:
        "Master creative AI workflows with personalized guidance from FLORA",
      features: [
        "Everything in Agency, plus",
        "Custom-built workflows tailored for your use-case",
        "Slack channel with founders & FLORA's AI team",
        "White glove onboarding for the whole team",
      ],
      buttonText: "Get in touch",
    },
  ];

  return (
    <>
      <nav className="bg-gradient-to-r from-teal-600 to-green-400 py-6 px-8 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white text-2xl font-bold flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15 9H9L12 2Z" fill="white" />
              <path d="M12 22L9 15H15L12 22Z" fill="white" />
            </svg>
            Report.AI
          </span>
        </div>

        <div className="hidden md:flex space-x-8 text-white text-lg">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Our USP
          </a>
          <a href="#" className="hover:underline">
            FAQs
          </a>
          <a href="#" className="hover:underline">
            Our Model
          </a>
        </div>

        <div>
          <a href="#">
            <InteractiveHoverButton className="bg-black text-white border-black">
              Try Now
            </InteractiveHoverButton>
          </a>
        </div>
      </nav>
      <section className="bg-gradient-to-r from-teal-500 to-green-400 py-16 px-6 text-white text-center h-150px">
        <span>
          <div className="flex flex-col items-center justify-center text-center max-w-full">
            <h1 className="text-white text-3xl md:text-5xl font-bold pb-3">
              Seamless Report Generator with <br></br> Maximum Accuracy
            </h1>
            <p className="text-white text-lg md:text-xl mt-4 max-w-4xl pb-10">
              Revolutionizing diagnostics with AI, our X-ray report generator
              delivers instant, accurate, and automated radiology reports,
              enhancing efficiency and precision for healthcare professionals.
            </p>
            <div className="flex justify-center gap-4">
              <ShimmerButton className="shadow-4xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Get Started
                </span>
              </ShimmerButton>
              <button className="bg-white text-teal-600 border border-white hover:bg-gray-100 font-bold py-3 px-6 rounded-md">
                Learn More
              </button>
            </div>
          </div>
          <span>
            <image src={Image0} className="h-52 w-64"></image>
          </span>
        </span>
        
      </section>
      <div>
        <span className="flex justify-center pt-20 text-2xl font-extralight tracking-widest">
          <TypingAnimation>Revolutizing Health with AI</TypingAnimation>
        </span>
        <span className="flex justify-center pt-2 text-4xl font-semibold">
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-xl font-normal"
          >
            AI-Powered X-Ray Analyzer
          </TextAnimate>
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-8 md:px-16 py-12">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-left pl-20">
          <h2 className="text-3xl font-semibold text-black">
            No bug left <span className="text-green-500">behind</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Cover everything. With all development requirements naturally linked
            to testing, you'll never overlook another test. Now, quality is
            built right into everything you develop.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center pt-11">
          <img src={Image1} className=" h-80  shadow-2xl" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-6xl w-full py-8 items-center justify-center  ">
          <div className="grid grid-cols-4 gap-8 border-gray-300 pb-4 relative "></div>
          <div className="grid grid-cols-3 gap-8 border-b border-gray-300 py-4 relative">
            <div className="pr-4 pb-2 border-r pt-5 border-gray-300">
              <h3 className="text-black text-2xl font-semibold">
                Natural Deployment
              </h3>
              <p className="font-light pt-3">
                Deploy production-ready models with OpenAI API Compliance by
                describing what you need.
              </p>
            </div>
            <div className="pr-4 pb-2 border-r pt-5 border-gray-300">
              <h3 className="text-black text-2xl font-semibold">
                End-to-End Experience
              </h3>
              <p className="font-light pt-3">
                Build complete AI solutions using natural conversation, from
                data to deployment.
              </p>
            </div>
            <div className="pr-4 pb-2   pt-5 border-gray-300">
              <h3 className="text-black text-2xl font-semibold">
                End-to-End Experience
              </h3>
              <p className="font-light pt-3">
                Build complete AI solutions using natural conversation, from
                data to deployment.
              </p>
            </div>

            <div className="pr-4 pb-2 border-r pt-5 border-gray-300">
              <h3 className="text-black text-2xl font-semibold">
                End-to-End Experience
              </h3>
              <p className="font-light pt-3">
                Build complete AI solutions using natural conversation, from
                data to deployment.
              </p>
            </div>
            <div className="pr-4 pb-2 border-r pt-5 border-gray-300">
              <h3 className="text-black text-2xl font-semibold">
                End-to-End Experience
              </h3>
              <p className="font-light pt-3">
                Build complete AI solutions using natural conversation, from
                data to deployment.
              </p>
            </div>
            <div className="pl-4 pt-5">
              <h3 className="text-black text-2xl font-semibold">
                End-to-End Experience
              </h3>
              <p className="font-light pt-3">
                Build complete AI solutions using natural conversation, from
                data to deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-white px-6">
        <div className="text-center max-w-4xl">
          {/* Heading */}
          <h5 className="text-xl tracking-widest text-gray-500 uppercase">
            Powering the
          </h5>
          <h2 className="text-5xl font-semibold text-black mb-14">
            Software Quality Lifecycle
          </h2>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-60">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <img src={Image2} alt="Feature 1" className="h-28 w-28 mb-4" />
              <h3 className="text-3xl font-semibold w-80">
                Cover All Your Bases
              </h3>
              <p className="text-gray-600 max-w-xs text-2xl w-80 mt-3">
                Optimize every part of the SDLC value chain with Xray’s powerful
                range of solutions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <img src={Image3} alt="Feature 2" className="h-28 w-28 mb-4" />
              <h3 className="text-3xl font-semibold w-60">Always On Call</h3>
              <p className="text-gray-600 w-80 text-2xl mt-3">
                Resolve issues fast, no matter when they come up, with
                award-winning 24/7 customer support.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <img src={Image4} alt="Feature 3" className="pb-4 h-30 w-28" />
              <h3 className="text-3xl font-semibold  w-60">Expert Network</h3>
              <p className="text-gray-600 max-w-md text-2xl w-80 mt-3">
                Tap into our network of industry leaders for top-of-the-line
                training, sales demos, and solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-black text-white py-12 px-6">
        <h3 className=" pb-10 flex items-center justify-center text-3xl font-extralight">
          Our Pricing
        </h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#121212] p-6 rounded-xl border border-gray-800 shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              {plan.badge && (
                <span className="bg-green-600 text-xs text-white px-2 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <p className="text-3xl font-bold my-2">{plan.price}</p>
              {plan.subtext && (
                <p className="text-gray-400 text-sm">{plan.subtext}</p>
              )}
              <p className="text-gray-400 text-sm mt-2">{plan.credits}</p>

              <ul className="mt-4 space-y-2 text-gray-400">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    ✅ <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Xray Test Management</a>
              </li>
              <li>
                <a href="#">Xray Exploratory Testing</a>
              </li>
              <li>
                <a href="#">Xray Enterprise</a>
              </li>
              <li>
                <a href="#">Xray Premium Onboarding</a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Solutions</h3>
            <h4 className="text-gray-300 font-medium">By Use Case</h4>
            <ul className="space-y-2 text-gray-400 mb-4">
              <li>
                <a href="#">Agile Testing</a>
              </li>
              <li>
                <a href="#">Test Automation</a>
              </li>
              <li>
                <a href="#">Exploratory Testing</a>
              </li>
            </ul>
            <h4 className="text-gray-300 font-medium">By Industry</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Finance</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Medical</a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Partners</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Find a Partner</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">Become a Partner</a>
              </li>
              <li>
                <a href="#">Integrate with Xray</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">eBooks</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
              <li>
                <a href="#">Xray Academy</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Migration to Cloud</a>
              </li>
              <li>
                <a href="#">Solution Architecture</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">News & Press</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
