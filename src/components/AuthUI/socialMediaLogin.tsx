// src/components/Login.jsx
import { auth, googleProvider } from '@/services/firebase';
import { signInWithPopup } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useState } from 'react';



const SocialMediaLogin = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleGoogleSignIn = async () => {
        const provider = googleProvider;
        await signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = result.credential;
                // const token = credential.accessToken;
                // // The signed-in user info.
                const user = result.user;
                setLoading(true);
                router.push("/dashboard");

                console.log(result, "user");

            })
            .catch((error) => {
                // Handle Errors here.
                setLoading(false);
                router.push("/dashboard");
                console.log(error, 'check');
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                const credential = error.credential;
            });

    };
    return (
        <div>
            {
                <div className="my-4 text-center">
                    <button onClick={handleGoogleSignIn} className="bg-blue-400 border-1 rounded-md px-1 py-1">
                        <Image src="/images/google.svg" alt="Google Logo" width={25} height={25} className="w-8 h-8 inline-block" />
                        <span className="text-white">Sign in with Google</span>
                    </button>
                </div>

            }
        </div>
    );
};

export default SocialMediaLogin;