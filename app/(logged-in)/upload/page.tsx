import BgGradient from "@/components/common/bg-gradient";
import { MotionDiv } from "@/components/common/motion-wrapper";
import UploadForm from "@/components/upload/upload-form";
import UploadHeader from "@/components/upload/upload-header";
import { hasReachedUploadLimit } from "@/lib/user";
import { containerVariants } from "@/utils/constants";
import { currentUser } from "@clerk/nextjs/server";
import { Upload } from "lucide-react";
import { redirect } from "next/navigation";

export const maxDuration = 60;

export default async function Page() {
    const user = await currentUser();

    if(!user?.id) {
        redirect('/sign-in');
    }

    const userId = user.id;

    const { hasReachedLimit } = await hasReachedUploadLimit(userId);

    if(hasReachedLimit) {
        redirect('/dashboard');
    }

    return (
        <section className="min-h-screen">
            <BgGradient />
            <MotionDiv
              initial= {{ opacity: 0 }}
              whileInView= {{ opacity: 1 }}
              transition= {{ duration: 0.5, delay: 0.1 }}
              variants={containerVariants}
             className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
               <div className="flex flex-col items-center justify-center gap-6 text-center">
                <UploadHeader />
                <UploadForm />
               </div>
            </MotionDiv>
        </section>
    );
}