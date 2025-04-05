import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { MotionDiv, MotionH1, MotionH2, MotionSection, MotionSpan } from "@/components/common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";

const buttonVariants = {
    scale: 1.05,
    transition: {
        type: 'spring',
        damping: 10,
        stiffness: 300,
    },
}

export default function HeroSection() {
    return (
    <MotionSection 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 mx:w-7xl">
                <MotionDiv
                initial= {{ opacity: 0 }}
                whileInView= {{ opacity: 1 }}
                transition= {{ duration: 0.5, delay: 0.1 }}
                 variants={itemVariants}
                 className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
                    <Badge variant={"secondary"} className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-rose-100 transition-colors duration-200 group-hover:text-rose-600">
                    <Sparkles className="mr-2 text-rose-600 animate-pulse" style={{ width: '20px', height: '20px' }} />
                        <p className="text-base text-rose-600">Powered by AI</p>
                    </Badge>
                </MotionDiv>
            <MotionH1
             initial= {{ opacity: 0 }}
             whileInView= {{ opacity: 1 }}
             transition= {{ duration: 0.5, delay: 0.1 }}
             variants={itemVariants}
             className="font-bold py-6 text-center">
                Transform PDFs into{' '}
                <span className="relative inline-block">
                    <MotionSpan 
                        transition= {{ duration: 0.5, delay: 0.1 }}
                        whileHover={buttonVariants}
                        className="relative z-10 px-2">
                            Clear, Concise
                    </MotionSpan>
                    <span className="absolute inset-0 bg-rose-200/50 -rotate rounded-lg transform -skew-y-1" aria-hidden="true"></span>
                </span>{' '}
                Summaries
            </MotionH1>
            <MotionH2 
                initial= {{ opacity: 0 }}
                whileInView= {{ opacity: 1 }}
                transition= {{ duration: 0.5, delay: 0.1 }}
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
                    Get a sleek, visually appealing summary of your document in seconds.
            </MotionH2>
            <MotionDiv variants={itemVariants} whileHover={buttonVariants}
                initial= {{ opacity: 0 }}
                whileInView= {{ opacity: 1 }}
                transition= {{ duration: 0.5, delay: 0.2 }}>
                <Button variant={'link'} className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg-py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 font-bold hover:no-underline shawdow-lg transition-all duration-300">
                    <Link href={"/#pricing"} className="flex gap-2 items-center">
                        <span>Try SumAI</span>
                        <ArrowRight className="animate-pulse" />
                    </Link>
                </Button>
            </MotionDiv>
    </MotionSection>
    );
} 