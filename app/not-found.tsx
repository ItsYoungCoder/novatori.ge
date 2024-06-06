import Link from "next/link"
import Button from "./components/regButton/Button"

export default () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-full p-20">
            <h1 className="text-6xl font-bold text-red-600 mb-4"><img src="/404.svg" alt="" /></h1>
            <p className="text-1xl text-main-color font-semibold font-geo-sub">გვერდი ვერ მოიძებნა</p>
            <Link href="/" className="text-base rounded-lg mt-10">
                <Button title="მთავარ გვერდზე დაბრუნება" />
            </Link>
        </div>
    )
}
