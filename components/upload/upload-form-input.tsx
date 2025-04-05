'use client';

import { Button } from "@/components/ui/button";
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";
import React, { forwardRef } from "react";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";

interface UploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
}

export const UploadFormInput = forwardRef<HTMLFormElement, UploadFormInputProps>(({ onSubmit, isLoading }, ref) => {
    return (
        <form ref={ref} className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex justify-end items-center gap-1.5">
                <Input id="file"
                    type="file"
                    name="file"
                    accept="application/pdf"
                    className="{cn(isLoading && 'opacity-50 cursor-not-allowed')}"
                    required
                    disabled={isLoading}/>
                <Button disabled={isLoading}>
                    { isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Processing...
                        </>
                        ) : (
                          'Upload your PDF'
                    )}
                </Button>
            </div>
        </form>
    );
});

UploadFormInput.displayName = 'UploadFormInput'

export default UploadFormInput;