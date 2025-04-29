import { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';

const Home  = () => {
	const contactRef = useRef(null);
	const aboutRef = useRef(null);
	const FqRef = useRef(null);
	interface SectionRef {
		current: HTMLElement | null;
	}

	const scrollToSection = (ref: SectionRef): void => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		let lastScrollTop = 0;  

		const handleScroll = () => {
			const hcf = document.querySelector(".hcf-profile");
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;

			if (scrollTop > lastScrollTop) {
				if (hcf) {
					hcf.classList.add("hcf-profile-fixed");
				}
			} else if (scrollTop < lastScrollTop) {
				if (hcf) {
					hcf.classList.remove("hcf-profile-fixed");
				}
			}

			lastScrollTop = scrollTop;
		};


 		window.addEventListener("scroll", handleScroll);

 		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	
	return (
		<>
			<div>
				<div className="">
					<HeroSection
						scrollToSection={scrollToSection}
						featuresRef={FqRef}
						contactRef={contactRef}
						aboutRef={aboutRef}
					/>
					{/* <div className='bg-white'>
						<ClaimLandingSection />
					</div> */}
					<div className='!bg-[#eff6ff] relative'>
						<FeaturesGrid />
					</div>
					<div className='!bg-white relative' ref={aboutRef}>
						<InfoSection />
					</div>
					<div className='relative bg-white' ref={FqRef}>
						<HomeFAQs />
					</div>
					<div className='bg-white relative' ref={contactRef}>
						<ContactForm />
					</div>
					{/* <div className='bg-white'>
						<MainFooter />
					</div> */}
				</div>
			</div>
		</>
	);
};

export default Home;