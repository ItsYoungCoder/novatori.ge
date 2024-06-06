import Link from "next/link"

export default () => {
    return (
        <div className="mt-40">
              <div className="w-5/6 m-auto">
                <div className="border-course-color w-5/6 m-auto ">
                  <div className="grid grid-cols-3 gap-10">

                  <div className="border-course-color">
                        <img src="/NovatoriLogo.svg" width={120} />

                        <div className="mt-5">
                          <span className="font-geo-sub text-main-color block font-medium">გამოიწერე სიახლეები</span>
                          <input type="text" placeholder="მობილურის ნომერი" className="p-5 outline-none font-geo-sub text-sub-color text-sm font-semibold" />
                          <button className="border py-3 px-4 rounded-lg bg-primary-800 font-geo-sub ml-10 text-white text-sm">გამოწერა</button>
                        </div>
                  </div>

                  <div className="border-course-color">
                        <span className="font-geo-sub text-main-color text-1xl font-semibold block">ნავიგაცია</span>
                        <ul className="mt-2 text-xs font-geo-sub text-sub-color">
                          <Link href='/'><li className="mb-2">მთავარი</li></Link>
                          <Link href='/'><li className="mb-2">ჩვენს შესახებ</li></Link>
                          <Link href='/'><li className="mb-2">კურსები</li></Link>
                          <Link href='/'><li className="mb-2">ბლოგი</li></Link>
                          <Link href='/'><li className="mb-2">წესები და პირობები</li></Link>
                          <Link href='/'><li className="mb-2">კონტაქტი</li></Link>
                        </ul>
                  </div>

                  <div className="border-course-color">
                        <span className="font-geo-sub text-main-color text-1xl font-semibold block">კონტაქტი</span>
                        <ul className="mt-2 text-xs font-geo-sub text-sub-color">
                          <Link href='/'><li className="mb-2">ნუცუბიძის #68, თბილისი</li></Link>
                          <Link href='/'><li className="mb-2">+995 550 05 06 80</li></Link>
                          <Link href='/'><li className="mb-2 font-semibold">support@novatori.ge​</li></Link>
                        </ul>
                  </div>

                  <div className="border-course-color">
                        <span className="font-geo-sub text-main-color text-1xl font-semibold block">ციფრული მარკეტინგი</span>
                        <ul className="mt-2 text-xs font-geo-sub text-sub-color">
                          <Link href='/'><li className="mb-2">ციფრული მარკეტინგის კურსი</li></Link>
                          <Link href='/'><li className="mb-2">ინფლუენსერ მარკეტინგი</li></Link>
                          <Link href='/'><li className="mb-2">Content მარკეტინგი​</li></Link>
                          <Link href='/'><li className="mb-2">Affiliate მარკეტინგი​</li></Link>
                          <Link href='/'><li className="mb-2">Email მარკეტინგი​</li></Link>
                          <Link href='/'><li className="mb-2">სოციალური მედია მარკეტინგი​</li></Link>
                          <Link href='/'><li className="mb-2">საძიებო სისტემის მარკეტინგი​</li></Link>
                          <Link href='/'><li className="mb-2">რა არის სეო​</li></Link>
                          <Link href='/'><li className="mb-2">ვებ ანალიტიკა​</li></Link>
                        </ul>
                  </div>

                  <div className="border-course-color">
                        <span className="font-geo-sub text-main-color text-1xl font-semibold block">კომპიუტერული მეცნიერება</span>
                        <ul className="mt-2 text-xs font-geo-sub text-sub-color">
                          <Link href='/'><li className="mb-2">პროგრამირების კურსი</li></Link>
                          <Link href='/'><li className="mb-2">Front-end კურსი</li></Link>
                          <Link href='/'><li className="mb-2">Back-end კურსი</li></Link>
                          <Link href='/'><li className="mb-2">Full-stack კურსი</li></Link>
                          <Link href='/'><li className="mb-2">React კურსი</li></Link>
                          <Link href='/'><li className="mb-2">AUTOMATION ტესტერი</li></Link>
                          <Link href='/'><li className="mb-2">BLOCKCHAIN დეველოპერი</li></Link>
                          <Link href='/'><li className="mb-2">ვებსაიტების დეველოპერი</li></Link>
                          <Link href='/'><li className="mb-2">პროგრამირება</li></Link>
                        </ul>
                  </div>

                  <div className="border-course-color">
                        <span className="font-geo-sub text-main-color text-1xl font-semibold block">ციფრული დიზაინი</span>
                        <ul className="mt-2 text-xs font-geo-sub text-sub-color">
                          <Link href='/'><li className="mb-2">UI/UX დიზაინი</li></Link>
                          <Link href='/'><li className="mb-2">გრაფიკული დიზაინის კურსი</li></Link>
                          <Link href='/'><li className="mb-2">დიზაინის კურსი</li></Link>
                          <Link href='/'><li className="mb-2">UI/UX დიზაინის კურსი</li></Link>
                          <Link href='/'><li className="mb-2">ციფრული მხატვარი</li></Link>
                          <Link href='/'><li className="mb-2">მოუშენ დიზაინის კურსი</li></Link>
                          <Link href='/'><li className="mb-2">ინტერიერის დიზაინის კურსი</li></Link>
                          <Link href='/'><li className="mb-2">ციფრული დიზაინის კურსი</li></Link>
                          <Link href='/'><li className="mb-2">Game დიზაინერის კურსი</li></Link>
                        </ul>
                  </div>
                   
                  </div>
                </div>
              </div>
                  <div className="p-5 bg-primary-800 mt-20 flex justify-center">
                    <span className="font-geo-sub  text-white text-sm">© ნოვატორი 2024 - ყველა უფლება დაცულია</span>
                  </div>
            </div>
    )
}