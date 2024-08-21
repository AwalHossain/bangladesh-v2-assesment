/* eslint-disable react/no-unescaped-entities */
'use client';
import { LoginFormDataSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import FormField from "../forms/FormInput";
import { Button } from "../ui/button";
import Character from "../ui/character";
import SocialMediaLogin from "./socialMediaLogin";

type Inputs = z.infer<typeof LoginFormDataSchema>

function LoginForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const process = async (data: Inputs) => {
        setLoading(true);
        console.log("SUCCESS", data);
        if (data) {
            router.push("/dashboard");
        }
    }

    const methods = useForm<Inputs>({
        resolver: zodResolver(LoginFormDataSchema),
    });

    const { handleSubmit } = methods;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto px-4 py-8"
        >
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(process)}>
                    <motion.div
                        className="space-y-6 md:space-y-6"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-2 md:mb-4">
                            <h2 className="text-xl md:text-2xl font-semibold text-center">Login to your Account!</h2>

                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key="character"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Character ImageUrl="/images/Login.svg" />
                            </motion.div>
                        </AnimatePresence>

                        <div className="space-y-4 max-w-md mx-auto">
                            <FormField
                                label='Your email address *'
                                name="email"
                                type="text"
                                placeholder="yourmail@gmail.com"
                            />
                            <FormField
                                label='Enter password *'
                                name="password"
                                type="password"
                                placeholder="anypass124"
                            />
                        </div>

                        <div className="w-full text-center">
                            <Button
                                type="submit"
                                className="bg-black w-full sm:w-auto px-8 py-2 text-white rounded-md hover:bg-gray-800 transition-colors"
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </Button>
                            <p className="text-sm mt-4">Don't have an account? <Link href="/registration" className="text-[#f90] hover:underline">Sign up</Link></p>
                        </div>
                    </motion.div>
                </form>
            </FormProvider>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <SocialMediaLogin />
            </motion.div>
        </motion.div>
    );
}

export default LoginForm;