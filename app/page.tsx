import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faChalkboardUser, faChevronDown, faComputer, faGraduationCap, faLanguage, faLaptop, faSchoolCircleCheck, faUserPen } from "@fortawesome/free-solid-svg-icons";

import CardInfo from "./components/cardMenu/CardInfo";
import Button from "./components/regButton/Button";
import LectionCard from "./components/lectionsCard/LectionCard";
import HowToCard from "./components/HowToCard/HowToCard";
import HowToTitle from "./components/HowToTitle/HowToTitle";
import Mentors from "./components/mentors/Mentors";
import Question from "./components/question/Question";
import BlogHome from "./components/Blog-Home/Blog.home";
import Link from "next/link";

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
                <div className="mt-10">
                  <Button title="დარეგისტრირდი" />
                </div>
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

          <div className=" w-5/6 m-auto">
              <div className="w-5/6 m-auto">

                <div className="border-course-color w-2/6 mt-40">
                  <span className="font-geo text-4xl font-bold text-main-color">ჩვენი <span className="text-pink font-normal">კურსები</span></span>
                </div>

                <div className="mt-10 grid grid-cols-3">
                    <Mentors title="ციფრული მარკეტინგის კურსი" desc="SEM, SMM, SEO, ვებ ანალიტიკა და AFFILIATE მარკეტინგის კურსი" mentor="თორნიკე ჭონიაშვილი" otherMentor="+ 2 მენტორი" info="9 საგანი • 8 პროფესია" price="7500₾" image={'/Tornike.webp'} />
                    <Mentors title="კომპ. მეცნიერების კურსი" desc="ვებ, მობაილ, AI და Blockchain დეველოპმენთის კურსი" mentor="მიშა ფაილოძე" otherMentor="+ 6 მენტორი" info="13 საგანი • 9 პროფესია" price="10,000₾" image={'/misha.webp'} />
                    <Mentors title="ციფრული დიზაინის კურსი" desc="UI/UX, 3D, გრაფიკული Motion და ინტერიერის დიზაინის კურსი" mentor="გიორგი მათიაშვილი" otherMentor="+ 6 მენტორი" info="16 საგანი • 11 პროფესია" price="7500₾" image={'/giorgi.webp'} />
                </div>
              </div>
          </div>


          <div className="w-5/6 m-auto">
              <div className="w-5/6 m-auto">

                <div className="border-course-color mt-40">
                  <span className="font-geo text-4xl font-bold text-main-color">ხშირად დასმული <span className="text-primary-800 font-normal">კითხვები</span></span>
                </div>
                  <Question title="რატომ არის ნოვატორის კურსები ბევრად ხანგრძლივი სხვებთან შედარებით?" desc="ნოვატორის ყველა კურსის დანიშნულება პროფესიული მომზადება ან გადამზადებაა. იმისათვის, რომ ხარისხიანად დაეუფლო ახალ პროფესიას, ცხადია, რომ ამისათვის 1-2 თვე საკმარისი ვერ იქნება" />
                  <Question title="რა არის საშუალო ანაზღაურება ციფრულ ინდუსტრიაში?" desc="ციფრული ინდუსტრია ერთერთ ყველაზე მაღალანაზღაურებად სფეროდ ითვლება მთელ მსოფლიოში. ტალანტები ქართულ ბაზარზე, 1,000-დან 20,000 ლარამდე გამოიმუშავებენ, გამოცდილების შესაბამისად. სტატისტიკურად, 2-წლიანი კარიერის შემდეგ, შემოსავალი 5-7 ათას ლარს უტოლდება; ხოლო ამერიკისა და ევროპის დასაქმების ბაზარზე, ქართველი ტალანტების ანაზღაურება 20,000 დოლარსაც აღწევს." />
                  <Question title="შევძლებ თუ არა დისტანციურად სწავლას?" desc="აბსოლუტურად ყველა შეხვედრა ონლაინ რეჟიმში ჩატარდება. ასევე, ფიზიკურ შეხვედრებში ონლაინ ჩართვა შეგეძლება, თუკი ადგილზე მოსვლას ვერ შეძლებ. გარდა ამისა, ყველა შეხვედრა ჩაიწერება და ჩვენს ვებგვერდზე განთავსდება." />
                  <Question title="არის თუ არა საჭირო დიპლომი სამსახურის დასაწყებად?" desc="არა თუ მცირე და საშუალო ბიზნესები, არამედ ტექნოლოგიური გიგანტებიც კი, როგორებიც არიან Apple და Google, გასაუბრებაზე დიპლომს არ ითხოვენ." />
                  <Question title="რა ცოდნაა საჭირო ნოვატორში სწავლის დასაწყებად?" desc="Სწავლის დასაწყებად წინაპირობები არ გვაქვს, რადგან ჩვენი ყველა კურსი პროფესიულ მომზადებაზე არის ორიენტირებული. ახალი პროფესიის ათვისება კი, ჩვენთვის, მისი საფუძვლების ხარისხიან შესწავლას ნიშნავს. ამიტომაც, ნოვატორის რჩევაა, მენტორის მიერ ახსნილ საკითხს კარგადაც რომც იცნობდე, იფიქრე, ამჯერად, შანსი გაქვს, ახლებურად შეხედო მას." />
                  <Question title="ცოდნის დამადასტურებელ ცნობას თუ გასცემთ?" desc="Რა თქმა უნდა! კურსის წარმატებით დასრულების შემდეგ, გაიცემა სერთიფიკატი, როგორც ბეჭდურ, ისე ციფრულ ფორმატში, რომელიც ჩვენს ვებგვერდეც იქნება ხელმისაწვდომი." />
              </div>
          </div>

        
            <div className=" w-5/6 m-auto">
              <div className="w-5/6 m-auto">

                <div className="border-course-color mt-40">
                  <span className="font-geo text-4xl font-bold text-main-color">გაიგე მეტი <span className="text-primary-800 font-normal">ციფრულ სამყაროზე</span></span>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-5">
                  <BlogHome image={'/gemni.png'} title="Google I/O 2024: Gemini-ს განახლებები" desc="ჩაანაცვლებს ხელოვნური ინტელექტი ადამიანს? ალბათ ეს კითხვა მთელი კაცობრიობისთვის დღემდე პასუხგაუცემელი რჩება, თუმცა ფაქტი ერთია-" />
                  <BlogHome image={'/modern.webp'} title="კარიერა ციფრულ სფეროში |  პირველი ნაბიჯები" desc="ციფრული ტექნოლოგიები სწრაფად ვითარდება და ყოველდღიურად იჭრება ჩვენს ცხოვრებასა და ბიზნესში, შესაბამისად კარიერა ციფრულ სფეროში" />
                  <BlogHome image={'/marketing.webp'} title="რა არის ციფრული მარკეტინგული სტრატეგია?" desc="თანამედროვე ციფრულ სამყაროში ბიზნესის წარმატებისთვის აუცილებელია ეფექტური ციფრული მარკეტინგული სტრატეგია. ციფრული მარკეტინგული სტრატეგიის შედგენა ციფრული" />
                </div>
                <div className="flex justify-end mt-10">
                    <Button title="მეტი ბლოგი" />
                </div>

              </div>
            </div>





            

      </div>

  )
}
