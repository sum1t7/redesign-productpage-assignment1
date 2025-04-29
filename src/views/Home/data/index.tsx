import ArrowSvg from "@/assets/svg/NoMedia";
import GlobeSvg from "@/assets/svg/NoMedia";
import HandSvg from "@/assets/svg/NoMedia";
import HelplineSvg from "@/assets/svg/NoMedia";
import RevenueSvg from "@/assets/svg/NoMedia";
import SupportSvg from "@/assets/svg/NoMedia";
import { ReactNode } from "react";

interface HeroData {
    icon: ReactNode;
    title: string;
}

export const heroNewData: HeroData[] = [
    {
        icon: <HelplineSvg width={60} height={60} />,
        title: '24/7 Support for patient',
    },
    {
        icon: <SupportSvg width={60} height={60} />,
        title: 'Lead Generation Support',
    },
    {
        icon: <RevenueSvg width={60} height={60} />,
        title: 'Boost Revenue',
    },
    {
        icon: <ArrowSvg width={60} height={60} />,
        title: 'Patient Conversation',
    },
    {
        icon: <HandSvg width={60} height={60} />,
        title: 'Build Digital Business',
    },
    {
        icon: <GlobeSvg width={60} height={60} />,
        title: 'Online Website With AI Agent',
    },
];
