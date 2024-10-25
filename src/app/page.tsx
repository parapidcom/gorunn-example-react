import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gorunn Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="h-screen m-0 font-sans">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-center">
          <div className="w-1/2 mx-auto mb-4">
            <Image
              src="/images/gorunn_logo.png"
              alt="Gorunn Logo"
              width={400}
              height={200}
              className="w-full h-auto"
              priority
            />
          </div>
          <div>This Next.js is running on the Gorunn!</div>
        </div>
      </div>
    </>
  );
}
