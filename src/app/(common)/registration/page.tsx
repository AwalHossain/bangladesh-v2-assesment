"use client";
import RegistrationForm from "@/components/AuthUI/RegistrationForm";
import { Suspense } from "react";

// const SkinRegimenForm = dynamic(() => import('@/components/CustomerUI/SkinRegimenForm'), { ssr: false })

export default function RegistrationPage() {
    return (
        <div>
            {/* <div className="mb-[27px]">
                <Button className="w-[131px] h-[25px] bg-black py-1 px-[13px] rounded-[3px]">Login to Klassy</Button>
                <p className="text-[#f90] text-[10px] pt-[9px]">* Login to sync your profile details for more easy step.</p>
            </div> */}
            <Suspense fallback={<div>Loading...</div>}>
                {/* <SkinRegimenForm /> */}
                <RegistrationForm />
            </Suspense>
        </div>
    )
}
