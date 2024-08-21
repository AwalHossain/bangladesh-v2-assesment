import { RegistrationFormDataSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import FormField from "../forms/FormInput";
import { Button } from "../ui/button";

type Inputs = z.infer<typeof RegistrationFormDataSchema>
function RegistrationForm() {

    const process = async (data: Inputs) => {
        console.log("SUCCESS", data);
    }
    const next = () => {
        console.log("Next", getValues());
    }

    const methods = useForm<Inputs>({
        resolver: zodResolver(RegistrationFormDataSchema),
        // defaultValues: {
        //     email: "",
        // },
    });

    const { handleSubmit, trigger, getValues } = methods;


    return (
        <div className="max-w-4xl mx-auto">

            <FormProvider  {...methods} >

                <form onSubmit={methods.handleSubmit(process)}>
                    <div className="space-y-[18px]">
                        <div className="mb-6">
                            <h2 className="text-[15px] md:text-[18px] font-semibold text-center">Let's get started!</h2>
                            <p className="text-center text-[10px] md:text-[14px]">
                                It'll take 2-3 minutes to understand you and your skin concern.
                            </p>
                        </div>
                        {/* <div className=""> */}

                        <div className="sm:max-w-md ">
                            <FormField
                                label='Your Full Name *'
                                name="fullName"
                                type="text"
                                placeholder="Jhon Doe"
                            />
                        </div>
                        <div className="flex justify-between space-x-2">
                            <div className="w-[145px] sm:w-1/2">
                                <FormField
                                    label="Enter your Email *"
                                    name="email"
                                    placeholder="yourmail@gmail.com"
                                />
                            </div>
                            <div className="w-[145px] sm:w-1/2">
                                <FormField
                                    label="Enter your Zip Code  *"
                                    name="zipCode"
                                    placeholder="12345"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between space-x-2">
                            <div className="w-[145px] sm:w-1/2">
                                <FormField
                                    label="Enter your Password *"
                                    name="password"
                                    type="password"
                                    placeholder="anypass124"
                                />
                            </div>
                            <div className="w-[145px] sm:w-1/2">
                                <FormField
                                    label="Confirm Password *"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="anypass124"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="w-full text-center my-5">
                        <Button type="submit" className="bg-black w-24 h-10 mx-auto"

                        >
                            Registration
                        </Button>
                        {/* sign up form */}
                        <p className="text-[10px] md:text-[14px] mt-5">Already have an account? <Link href={"/login"} className="text-[#f90]">Login</Link>
                        </p>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}

export default RegistrationForm;