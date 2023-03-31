import Image from 'next/image';
import Link from "next/link";
export default function FirstPost() {
    return (
        <>
            <h1>First post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>

            <Image src="/images/profile.jpg"
                   alt="Jamie Greatorex"
                   height={144}
                   width={144}
           />
        </>
    )
}