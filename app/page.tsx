import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faChalkboardUser, faComputer, faGraduationCap, faLanguage, faLaptop, faSchoolCircleCheck, faUserPen } from "@fortawesome/free-solid-svg-icons";

import CardInfo from "./components/cardMenu/CardInfo";
import Button from "./components/regButton/Button";
import LectionCard from "./components/lectionsCard/LectionCard";
import HowToCard from "./components/HowToCard/HowToCard";
import HowToTitle from "./components/HowToTitle/HowToTitle";
import Mentors from "./components/mentors/Mentors";

export default function Home() {
  return (
    <div>

        <main className="h-100 flex justify-center">
          <img className="bg-cover w-full" src="/sprinkles.svg" alt="" />
            <div className="w-6/12 my-52 absolute cursor-default">
              <h1 className="text-7xl flex font-geo justify-center text-main-color font-bold">სექტემბრის მიღებაზე</h1>
              <p className="mt-5 text-7xl flex font-geo justify-center text-course-color font-light">რეგისტრაცია დაიწყო</p>
              <div className="mt-5">
                <sub className="flex text-center font-geo-sub items-center justify-center text-sub-color text-lg m-auto font-medium">აირჩიე პროფესიული გადამზადების სრული კურსი, ისწავლე ახალი ტექნოლოგიები, გაიუმჯობესე სასაუბრო ინგლისური და მოემზადე შენი პირველი გასაუბრებისთვის.</sub>
              </div>
                <Button title="დარეგისტრირდი" />
            </div>
        </main>

          <div className="border-course-color w-5/6 m-auto flex justify-center">
              <div className="grid gap-5 w-5/6 grid-cols-3">

                  <CardInfo icon={<FontAwesomeIcon icon={faGraduationCap} width={25} />} color="red" title="პროფესიული გადამზადება" description="1 წლიანი სრული პროფესიული გადამზადების პროგრამა დამოუკიდებელ ტალანტად ჩამოყალიბებისთვის" />
                  <CardInfo icon={<FontAwesomeIcon icon={faChalkboardUser} width={25} />} color="green" title="მენტორშიფი" description="მენტორის დახმარებით შეგიძლია ისარგებლო როგორც ონლაინ, ასევე ნოვატორის სივრცეში." />
                  <CardInfo icon={<FontAwesomeIcon icon={faComputer} width={25} />} color="purple" title="სტაჟირების პროგრამა" description="თამაშად ქცეული სასწავლო პროცესი, საშუალებას მოგცემთ, თავი სამსახურში იგრძნოთ." />
                  <CardInfo icon={<FontAwesomeIcon icon={faUserPen} width={25} />} color="aqua" title="ინტერვიუსთვის მომზადება" description="ნოვატორის მენტორები და HR-ები მოგამზადებენ შენი პირველი ინტერვიუს ყველა კომპონენტში." />
                  <CardInfo icon={<FontAwesomeIcon icon={faSchoolCircleCheck} width={25} />} color="yellow" title="მულტიფუნქციური სივრცე" description="ისწავლე და იმუშავე ერთ სივრცეში, ნოვატორის მენტორებთან ერთად. ნოვატორი საუკეთესოა." />
                  <CardInfo icon={<FontAwesomeIcon icon={faLanguage} width={25} />} color="pink" title="ENGLISH CLUB" description="გაიუმჯობესე სასაუბრო ინგლისური, რაც საერთაშორისო კომპანიებში ინტერვიუზე გასვლის საშუალებას მოგცემს." />
                  
              </div>
          </div>

          <div className="border-course-color w-5/6 m-auto flex justify-center">
            <div className="w-5/6 m-auto mt-40">
              <div className="flex gap-10">

                <div className="border-aqua m-auto w-5/6">

                  <span className="font-geo block text-4xl font-semibold text-main-color"><span className="text-purple font-normal">უამრავი</span> შეხვედრა</span>
                  <p className="mt-5 font-geo-sub text-1xl text-sub-color">ჩვენი კურსი საშუალებას მოგცემს სრულყოფილად აითვისო ახალი პროფესია და მასთან დაკავშირებული უნარები, გაიუმჯობესო სასაუბრო ინგლისური და ყველა კომპონენტში მოემზადო შენი პირველი გასაუბრებისთვის.</p>
                  
                  <div className="flex mt-5 w-5/6">
                    <LectionCard color="blue" title={150} description="პროფესიული შეხვედრა" />
                    <LectionCard color="aqua" title={60} description="ინგლისური ენის შეხვედრა" />
                    <LectionCard color="red" title={50} description="კარიერული განვითარების შეხვედრა" />
                  </div>

                </div>

                <div className="border-course-color w-5/6">
                  <img src="/lections.jpeg" alt="" />
                </div>

              </div>
            </div>
          </div>

          <div className="w-5/6 m-auto">

              <HowToTitle title1="როგორ" title2="მუშაობს" desc="ნოვატორის კურსები მორგებულია ქართველ, ალტერნატიული განათლების მაძიებელ ადამიანებზე." />

              <div className="grid grid-cols-3 gap-5 w-5/6 m-auto mt-10">
                 <HowToCard icon={<FontAwesomeIcon icon={faGraduationCap} width={35} />} color="pink" title="დაიწყე სწავლა" desc="სწავლას ვიწყებთ აბსოლუტური ნულიდან, საფუძვლების ხარისხიანი შესაწვლის მიზნით." />
                 <HowToCard icon={<FontAwesomeIcon icon={faLaptop} width={35} />} color="red" title="აირჩიე პროფესია" desc="როგორც კი საკმარის ინფორმაციას მიიღებ საფუძვლებზე, შეძლებ აირჩიო სასურველი პროფესია." />
                 <HowToCard icon={<FontAwesomeIcon icon={faBriefcase} width={35} />} color="green" title="გაიარე სტაჟირება" desc="სხვადასხვა პროფესიის სტუდენტებთან ერთად იმუშავებ როგორც იმიტირებულ ასევე რეალურ პროექტებზე." />
              </div>

          </div>

          <div className="h-100 w-5/6 m-auto">
              <div className="w-5/6 m-auto">

                <div className="border-course-color w-2/6 mt-40">
                  <span className="font-geo text-4xl font-bold">ჩვენი <span className="text-pink">კურსები</span></span>
                </div>

                <div className="mt-10 grid grid-cols-3">
                    <Mentors title="ციფრული მარკეტინგის კურსი" desc="SEM, SMM, SEO, ვებ ანალიტიკა და AFFILIATE მარკეტინგის კურსი" mentor="თორნიკე ჭონიაშვილი" otherMentor="+ 2 მენტორი" info="9 საგანი • 8 პროფესია" price="7500₾" image={'/Tornike.webp'} />
                    <Mentors title="კომპ. მეცნიერების კურსი" desc="ვებ, მობაილ, AI და Blockchain დეველოპმენთის კურსი" mentor="მიშა ფაილოძე" otherMentor="+ 6 მენტორი" info="13 საგანი • 9 პროფესია" price="10,000₾" image={'/misha.webp'} />
                    <Mentors title="ციფრული დიზაინის კურსი" desc="UI/UX, 3D, გრაფიკული Motion და ინტერიერის დიზაინის კურსი" mentor="გიორგი მათიაშვილი" otherMentor="+ 6 მენტორი" info="16 საგანი • 11 პროფესია" price="7500₾" image={'/giorgi.webp'} />
                </div>
              </div>
          </div>

      </div>

  )
}
