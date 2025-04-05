'use client';

import { generatePdfSummary, storePdfSummaryAction } from '@/actions/upload-actions'
import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./upload-form-input";
import { z } from "zod";
import { toast } from 'sonner';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingSkeleton } from '@/components/upload/loading-skeleton';


const schema = z.object({
    file: z
    .instanceof(File, {message: 'Invalid file'})
    .refine((file) => file.size <= 20 * 1024 * 1024,
        'File size must be less than 20MB',
    )
    .refine((file) => file.type.startsWith('application/pdf'),
        'File must be a PDF'
    ),
});

export default function UploadForm() {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

    const showSuccessToast = () => {
        toast.success('Success! Your action was completed.');
      };
    
      // Function to show error toast
      const showErrorToast = () => {
        toast.error('Oops! Something went wrong.');
      };

      const showUploadingToast = () => {
        toast('Uploading PDF', {
          description: 'Uploading your PDF, this might take a while!',
          duration: 3000, // Optional: set the duration for the toast
          style: {
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
          }
        });
    };

      const showProcessingToast = () => {
        toast('Processing PDF', {
          description: 'Hang tight, Our AI is working on your PDF! ✨',
          duration: 3000, // Optional: set the duration for the toast
          style: {
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
          }
        });
    };

    const showSavingToast = () => {
        toast('Saving PDF', {
          description: 'Hang tight, We are saving your summary! ✨',
          duration: 3000, // Optional: set the duration for the toast
          style: {
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
          }
        });
    };

    const summaryGeneratedToast = () => {
        toast('✨ Summary Generated!', {
          description: 'Your PDF has been successfully summarised and saved',
          duration: 3000, // Optional: set the duration for the toast
          style: {
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
          }
        });
    };

        const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
            onClientUploadComplete: () => {
                console.log("uploaded successfully!");
                showSuccessToast(); // Show success toast after upload
            },
            onUploadError: (err) => {
                console.error(err);
                showErrorToast(); // Show error toast on upload error
            },
            // onUploadBegin: ({ file }) => {
            //     console.log("upload has begun for", file);
            // },
        });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const formData = new FormData(e.currentTarget);
            const file = formData.get('file') as File;

            // Validating the fields
            const validatedFields = schema.safeParse({ file })

            if (!validatedFields.success) {
                console.log(validatedFields.error.flatten().fieldErrors.file?.
                [0] ?? 'Invalid file');
                showErrorToast();
                setIsLoading(false);
                return;
            }

            showUploadingToast();
            
            // Schema with zod

            // Upload the file to uploadthing
            const resp = await startUpload([file]);
            if(!resp || !resp[0]?.serverData?.fileUrl) {
                showErrorToast();
                setIsLoading(false);
                return;
            }

            showProcessingToast();

            // Parse the pdf using langchain
            const transformedResp = resp.map(item => ({
                serverData: {
                    userId: item.serverData.userId,
                    file: {
                        url: item.serverData.fileUrl,
                        name: file.name,
                    },
                },
            }));
            const result = await generatePdfSummary(transformedResp as [{
                serverData: {
                    userId: string;
                    file: {
                        url: string;
                        name: string;
                    };
                };
            }]);

            const { data, message } = result || { data: null, message: null };

            if(data) {
                let storeResult: any;
                showSavingToast();

                if(data.summary) {
                    // Save to db
                    storeResult = await storePdfSummaryAction({
                        summary: data.summary,
                        fileUrl: resp[0].serverData.fileUrl,
                        title: data.title,
                        fileName: file.name,
                    });

                    summaryGeneratedToast();
                    formRef.current?.reset();
                    // Redirect to summary page
                    router.push(`/summaries/${storeResult.data.id}`);
                }
            }
        } catch(error) {
            setIsLoading(false);
            console.error('Error occured', error);
            formRef.current?.reset();
        } finally {
            setIsLoading(false);
        }
    };

    return (            
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200 dark:border-gray-800" />
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-background px-3 text-muted-foreground text-sm">
                        Upload PDF
                    </span>
                </div>
            </div>
            <UploadFormInput isLoading={isLoading} ref={formRef} onSubmit={handleSubmit} />
            {isLoading && (
                <>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-200 dark:border-gray-800" />
                        </div>
                        <div className='relative flex justify-center'>
                            <span className='bg-background px-3 text-muted-foreground text-sm'>
                                Processing
                            </span>
                        </div>
                    </div>
                    <LoadingSkeleton />
                </>
            )}
        </div>
    );
}