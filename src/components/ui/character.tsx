
import Image from "next/image";



const Character = ({ ImageUrl }: { ImageUrl: string }) => (
    <div className="flex justify-center mb-[15px]">
        <div className="relative w-">
            <Image src={ImageUrl} width="90" height={90} alt="Character" className="rounded-full" />
        </div>
    </div>
);


export default Character;