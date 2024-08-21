"use client";
import LoginForm from "@/components/AuthUI/LoginForm";
import { Suspense } from "react";

// const SkinRegimenForm = dynamic(() => import('@/components/CustomerUI/SkinRegimenForm'), { ssr: false })

export default function LoginPage() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {/* <SkinRegimenForm /> */}
                <LoginForm />
            </Suspense>
        </div>
    )
}
