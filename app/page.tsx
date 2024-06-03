export default function Home() {
  return (
    <main className="h-100 flex justify-center">
      <img className="bg-cover w-full" src="/sprinkles.svg" alt="" />
        <div className="w-6/12 font-geo my-52 absolute cursor-default">
          <h1 className="text-6xl flex justify-center text-main-color font-semibold">სექტემბრის მიღებაზე</h1>
          <p className="mt-5 text-6xl flex justify-center text-course-color">რეგისტრაცია დაიწყო</p>
          <div className="mt-5">
            <sub className="text-lg flex text-center items-center justify-center text-sub-color">აირჩიე პროფესიული გადამზადების სრული კურსი, ისწავლე ახალი ტექნოლოგიები, გაიუმჯობესე სასაუბრო ინგლისური და მოემზადე შენი პირველი გასაუბრებისთვის.</sub>
          </div>
          <div className="flex justify-center my-8">
              <button className="bg-primary-800 px-7 py-3 rounded-lg text-white font-medium">დარეგისტრირდი</button>
          </div>
        </div>
    </main>
  )
}
