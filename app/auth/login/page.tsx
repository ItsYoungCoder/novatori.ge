'use client'
import Link from "next/link"
import { useState } from "react"

export default () => {

    const [firstName, setFirstName] = useState('')
    const [pass, setPass] = useState('')

    const onFirstName = (e: any) => {
        setFirstName(e.target.value)
    }
    const onPass = (e: any) => {
        setPass(e.target.value)
    }
    return (
        <main className="flex justify-center">
            <div className="w-3/12" >

                <div className="my-9 flex justify-center">
                <img src="/logo.png" width={35} className="mr-1" alt="" /><h1 className="text-3xl font-geo font-medium text-main-color inline-flex">Novatori.ge</h1>
                </div>

                <div className="p-7 border border-primary-100 rounded-md">

                    <h1 className="font-geo mb-10 text-main-color font-semibold text-2xl">აქაუნთზე შესვლა</h1>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">სახელი</label>
                        <input onChange={onFirstName} type="text" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Davit" />
                    </div>
                    
                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">პაროლი</label>
                        <input onChange={onPass} type="text" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="********" />
                    </div>
                    
                    {firstName.length < 3 || pass.length < 8 ? (
                        <button className="w-full text-white font-geo text-base border py-2 flex justify-center bg-disable rounded-md transition cursor-default" disabled>შესვლა</button>
                    ) : (
                        <button className="w-full text-white font-geo text-base border py-2 flex justify-center bg-primary-btn rounded-md hover:bg-primary-900 transition-all cursor-pointer">შესვლა</button>
                    )}

                    <div className="font-geo my-5">
                        <p className="font-light text-gray-500">არ გაქვს ანგარიში? <Link href="/auth/signup" className="font-medium text-primary-600 hover:underline">რეგისტრაცია</Link></p>
                    </div>

                </div>

            </div>
        </main>
    )
}