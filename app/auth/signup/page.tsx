import Link from "next/link"

export default () => {
    return (
        <main className="flex justify-center">
            <div className="w-3/12" >

                <div className="my-9 flex justify-center">
                <img src="/logo.png" width={35} className="mr-1" alt="" /><h1 className="text-3xl font-geo font-medium text-main-color inline-flex">Novatori.ge</h1>
                </div>

                <div className="p-7 border border-primary-100 rounded-md">

                    <h1 className="font-geo mb-10 text-main-color font-semibold text-2xl">შექმენი აქაუნთი</h1>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">სახელი</label>
                        <input type="text" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Davit" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">გვარი</label>
                        <input type="text" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ambokadze" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">ელ-ფოსტა</label>
                        <input type="text" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">პაროლი</label>
                        <input type="text" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*******" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">გაიმეორე პაროლი</label>
                        <input type="text" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" />
                    </div>
                    
                    <div className="flex items-center my-5">

                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                      </div>

                      <div className="ml-3 text-sm">
                        <label className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">Terms and Conditions</Link></label>
                      </div>

                    </div>

                    <div className="border py-2 flex justify-center bg-primary-btn rounded-md hover:bg-primary-900 transition cursor-pointer">
                        <button className=" text-white font-geo text-base">რეგისტრაცია</button>
                    </div>

                    <div className="font-geo my-5">
                        <p className="font-light text-gray-500">უკვე გაქვს ანგარიში? <Link href="/auth/login" className="font-medium text-primary-600 hover:underline">შესვლა</Link></p>
                    </div>

                </div>

            </div>
        </main>
    )
}