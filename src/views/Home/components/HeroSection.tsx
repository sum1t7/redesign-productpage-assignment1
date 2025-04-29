import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
import CountUp from 'react-countup';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="bg-Blue1 w-full border-b-2 relative flex flex-col overflow-hidden">
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className="min-h-[92vh] pt-16 md:pt-20 flex items-center">
                <img
                    src={smallBG}
                    alt="background_image"
                    className="md:hidden h-full w-full object-cover absolute top-0 left-0 z-[-10]"
                />

                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 md:mb-10 capitalize text-white">
                        <span className="text-Blue3">AI front office </span> <br className="hidden md:block" />
                        <span>for healthcare agents</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl lg:text-2xl mb-6 md:my-8 text-white font-light">
                        Create <span className="text-Blue3 font-bold">AI Store</span> in 2 min <br className="hidden sm:block" />
                         Scale with 
                        <span className="font-bold text-Blue3">
                            Digital Marketing
                        </span>
                    </p>

                    <div className="mb-8 md:mb-12">
                        <HcfSignupPopup 
                            popupButtonStatus 
                            buttonChildren={
                                <Button 
                                    block 
                                    variant='solid' 
                                    className='rounded-[5px] w-full max-w-[200px]'
                                >
                                    Get Started
                                </Button>
                            } 
                        />
                    </div>

                    <div className="text-white flex gap-6 md:gap-12 flex-wrap">
                        <div className="text-center md:text-left">
                            <h1 className="text-2xl text-Blue3 md:text-3xl font-bold">
                                <CountUp end={2100} duration={2} />
                                <span className="text-Blue0 ml-1">+</span>
                            </h1>
                            <p className="text-base md:text-lg capitalize">qualified doctors</p>
                        </div>
                        
                        <div className="text-center md:text-left">
                            <h1 className="text-2xl text-Blue3 md:text-3xl font-bold">
                                <CountUp end={1000} duration={2} />
                                <span className="text-Blue0 ml-1">+</span>
                            </h1>
                            <p className="text-base md:text-lg capitalize">hospitals</p>
                        </div>
                        
                        <div className="text-center md:text-left">
                            <h1 className="text-2xl text-Blue3 md:text-3xl font-bold">
                                <CountUp end={800} duration={2} />
                                <span className="text-Blue0 ml-1">+</span>
                            </h1>
                            <p className="text-base md:text-lg capitalize">Treatment Plans</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;