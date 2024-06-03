import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image 
        src="/sprinkles.svg" 
        width={15000}
        height={100} 
        alt="Sprinkles"
      />
    </main>
  )
}
