import Link from "next/link"

export default () => {
    return (
        <header className="fixed w-full z-50">
          <nav className="p-5 bg-white flex justify-around">
          <div className="w-9/12 flex justify-end">
              <ul className="flex gap-5 text-main-color text-lg font-semibold font-geo items-center">
                <div className="mr-64">
                 <Link href='/'> <img src="/NovatoriLogo.svg" /></Link>
                </div>
                <li><Link href="/">მთავარი</Link></li>
                <li><Link href="">ჩვენს შესახებ</Link></li>
                <li><Link href="">კურსები</Link></li>
                <li><Link href="">ხდკ</Link></li>
                <li><Link href="/auth/signup">რეგისტრაცია</Link></li>
                <li><Link href="">ბლოგი</Link></li>
                <li><Link href="">ბლოგიკონტაქტი</Link></li>
              </ul>
          </div>
          </nav>
        </header>
    )
}