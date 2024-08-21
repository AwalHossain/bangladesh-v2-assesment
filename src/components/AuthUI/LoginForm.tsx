import { LoginFormDataSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import FormField from "../forms/FormInput";
import { Button } from "../ui/button";

type Inputs = z.infer<typeof LoginFormDataSchema>
function LoginForm() {

    const process = async (data: Inputs) => {
        console.log("SUCCESS", data);
    }
    const next = () => {
        console.log("Next", getValues());
    }

    const methods = useForm<Inputs>({
        resolver: zodResolver(LoginFormDataSchema),
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

                        <div className="sm:max-w-md mx-auto">
                            <FormField
                                label='Your email address *'
                                name="email"
                                type="text"
                                placeholder="yourmail@gmail.com"
                            />
                        </div>
                        <div className="sm:max-w-md mx-auto">
                            <FormField
                                label='Enter password *'
                                name="password"
                                type="text"
                                placeholder="anypass124"
                            />
                        </div>
                        <div className="w-full text-center">
                            <Button type="submit" className="bg-black w-24 h-10 mx-auto"

                            >
                                Login
                            </Button>
                            {/* sign up form */}
                            <p className="text-[10px] md:text-[14px] mt-5">Don't have an account? <Link href="/login" className="text-[#f90]">Sign up</Link>
                            </p>
                        </div>


                    </div>
                </form>
            </FormProvider>
        </div>
    );
}

export default LoginForm;