'use client'
import Link from "next/link"
import { useState } from "react"

export default () => {

    const [firstName, setFirstName] = useState(sessionStorage.getItem('name') || ' ')
    const [lastName, setLastName] = useState(sessionStorage.getItem('surname') || 'djkshdj')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [rePass, setRePass] = useState('')
    const [users, setUses] = useState('')

    const [error, setError] = useState('')


    const onFirstName = (e: any) => {
        setFirstName(e.target.value)
        sessionStorage.setItem('name', e.target.value)
    }
    const onLastName = (e: any) => {
        setLastName(e.target.value)
        sessionStorage.setItem('surname', e.target.value)
    }
    const onEmail = (e: any) => {
        setEmail(e.target.value)
    }
    const onPass = (e: any) => {
        setPass(e.target.value)
    }
    const onRePass = (e: any) => {
        setRePass(e.target.value)
    }

    
    const submit = () => {
        if(pass != rePass) {
            setError('პაროლები ერთმანეთს არ ემთხვევა!')
            setUses('')
        } else {
            setUses(`სახელი: ${firstName}, გვარი: ${lastName}, ელ-ფოსტა: ${email}, პაროლი: ${pass}, ${rePass}`)
            setError('')
        }
    }



    return (
        <main className="flex justify-center">
            <div className="w-3/12" >

                <div className="my-9 flex justify-center">
                <img src="/logo.png" width={35} className="mr-1" alt="" /><h1 className="text-3xl font-geo font-medium text-main-color inline-flex">Novatori.ge</h1>
                </div>
                {users}

                <div className="p-7 border border-primary-100">

                    <h1 className="font-geo mb-10 text-main-color font-semibold text-2xl">შექმენი აქაუნთი</h1>

                        {
                            error && <p className="p-3 text-white font-geo font-medium bg-error my-5 flex justify-center rounded-md">{error}</p>
                        }

                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">სახელი</label>
                        <input onChange={onFirstName} type="text" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Davit" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">გვარი</label>
                        <input onChange={onLastName} type="text" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Ambokadze" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">ელ-ფოსტა</label>
                        <input onChange={onEmail} type="text" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="name@company.com" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">პაროლი</label>
                        <input onChange={onPass} type="password" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="*******" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-primary-900 font-geo">გაიმეორე პაროლი</label>
                        <input onChange={onRePass} type="password" className="my-2 border border-primary-100 text-gray-900 sm:text-sm outline-1 rounded-lg focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="********" />
                    </div>
                    
                    <div className="flex items-center my-5">

                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                      </div>

                      <div className="ml-3 text-sm">
                        <label className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">Terms and Conditions</Link></label>
                      </div>

                    </div>

                        {firstName.length < 3 || lastName.length < 5 || email.length < 8 || pass.length < 8 || rePass.length < 8 ? (
                            <button onClick={submit} className="w-full text-white font-geo text-base border py-2 flex justify-center bg-disable rounded-md transition cursor-default" disabled>რეგისტრაცია</button>
                        ) : (
                            <button onClick={submit} className="w-full text-white font-geo text-base border py-2 flex justify-center bg-primary-btn rounded-md hover:bg-primary-900 transition-all cursor-pointer">რეგისტრაცია</button>
                        )}

                    <div className="font-geo my-5">
                        <p className="font-light text-gray-500">უკვე გაქვს ანგარიში? <Link href="/auth/login" className="font-medium text-primary-600 hover:underline">შესვლა</Link></p>
                    </div>

                </div>

            </div>
        </main>
    )
}