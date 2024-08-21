/* eslint-disable react/no-unescaped-entities */
import { RegistrationFormDataSchema } from "@/lib/formSchema";
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

type Inputs = z.infer<typeof RegistrationFormDataSchema>

function RegistrationForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const process = async (data: Inputs) => {
        setLoading(true);
        console.log("SUCCESS", data);
        if (data) {
            router.push("/dashboard");
        }
        setLoading(false);
    }

    const methods = useForm<Inputs>({
        resolver: zodResolver(RegistrationFormDataSchema),
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
                        className="space-y-6 md:space-y-8"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-4 md:mb-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-center">Let's get started!</h2>
                            <p className="text-center text-sm md:text-base mt-2">
                                It'll take 2-3 minutes
                            </p>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key="character"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Character ImageUrl="/images/reg.svg" />
                            </motion.div>
                        </AnimatePresence>

                        <div className="space-y-4 max-w-md mx-auto">
                            <FormField
                                label='Your Full Name *'
                                name="fullName"
                                type="text"
                                placeholder="John Doe"
                            />

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="w-full sm:w-1/2">
                                    <FormField
                                        label="Enter your Email *"
                                        name="email"
                                        placeholder="yourmail@gmail.com"
                                    />
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <FormField
                                        label="Enter your Zip Code *"
                                        name="zipCode"
                                        placeholder="12345"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="w-full sm:w-1/2">
                                    <FormField
                                        label="Enter your Password *"
                                        name="password"
                                        type="password"
                                        placeholder="anypass124"
                                    />
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <FormField
                                        label="Confirm Password *"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="anypass124"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full text-center mt-6">
                            <Button
                                type="submit"
                                className="bg-black w-full sm:w-auto px-8 py-2 text-white rounded-md hover:bg-gray-800 transition-colors"
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Register"}
                            </Button>
                            <p className="text-sm mt-4">Already have an account? <Link href="/login" className="text-[#f90] hover:underline">Login</Link></p>
                        </div>
                    </motion.div>
                </form>
            </FormProvider>
        </motion.div>
    );
}

export default RegistrationForm;