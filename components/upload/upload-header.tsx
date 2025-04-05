import { Badge } from "@/components/ui/badge";
import { Sparkle } from "lucide-react";
import { MotionDiv } from "../common/motion-wrapper";
import { itemVariants } from "@/utils/constants";

export default function UploadHeader() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 text-center">
            <MotionDiv
             variants={itemVariants}
             className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
                <Badge variant={'secondary'}
                    className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-rose-100 transition-colors">
                    <Sparkle className="h-6 w-6 mr-2 text-rose-600 animate-pulse" 
                            style={{ width: '20px', height: '20px' }}/>
                        <p className="text-base">AI-Powered Content Creation</p>
                    </Badge>
            </MotionDiv>
            <MotionDiv
              variants={itemVariants}
              className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Start uploading{' '}
                <span className="relative inline-block">
                    <span className="relative z-10 px-2">your PDF's</span>
                    <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
                    </span>{' '}
            </MotionDiv>
            <MotionDiv
              initial= {{ opacity: 0 }}
              whileInView= {{ opacity: 1 }}
              transition= {{ duration: 0.5, delay: 0.3 }}
              variants={itemVariants}
              className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">
                <p>Upload your PDF and let our AI do the magic! ✨</p>
            </MotionDiv>
        </div>
    );
}