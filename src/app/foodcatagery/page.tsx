import React from 'react'
import Image from 'next/image'

const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, Image: "/food1.png", label: "Save 50% on Fast Food" },
    { id: 2, Image: "/food2.png", label: "Delicious Burgers" },
    { id: 3, Image: "/food3.png", label: "Healthy Salads" },
    { id: 4, Image: "/food4.png", label: "Desserts" },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Choose</span> Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <Image
                src={item.Image}
                alt={item.label}
                width={500}
                height={500}
                className="w-full h-56 object-cover rounded-lg"
              />

              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <span className="text-orange-500 font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div><div>
    <div className="w-[1320px] h-[716px]">
  <Image
            className="w-[362px] h-[356px] absolute left-[299.5px] top-[2360.5px] rounded-md"
            src="/bu4.png" width={362} height={356} alt={''}  />
  <Image
            className="w-[244px] h-[306px] absolute left-[299.5px] top-[2732.5px] rounded-md"
            src="/about4.png" width={244} height={306} alt={''}  />
  <Image
            className="w-[281px] h-[231px] absolute left-[677.5px] top-[2480.5px] rounded-md"
            src="/food4.png" width={281} height={231} alt={''}  />
  <Image
            className="w-[221px] h-[226px] absolute left-[559.5px] top-[2732.5px] rounded-md"
            src="/bu3.png" width={221} height={226} alt={''}  />
  <Image
            className="w-[161px] h-[168px] absolute left-[796.5px] top-[2726.5px] rounded-md"
            src="/bu2.png" width={161} height={168} alt={''}  />
  <Image
            className="w-[161px] h-[166px] absolute left-[796.5px] top-[2910.5px] rounded-md"
            src="/bu1.png" width={161} height={166} alt={''}  />
  <p className="absolute left-[1094px] top-[2471px] text-5xl font-bold text-left">
    <span className="text-5xl font-bold text-left text-[#ff9f0d]">Ex</span>
    <span className="text-5xl font-bold text-left text-white">ta ordinary taste</span>
    <br />
    <span className="text-5xl font-bold text-left text-white">And Experienced </span>
  </p>
  <div className="w-[175px] h-10">
    <p className="absolute left-[1094px] top-[2423px] text-[32px] text-left text-[#ff9f0d]">
      Why Choose us
    </p>
  </div>
  <div className="w-[374px] h-[93px]">
    <div className="w-[374px] h-[93px]">
      <div className="w-[374px] h-[92px] absolute left-[1093.5px] top-[2935.5px] rounded-md bg-white" />
      <p className="absolute left-[1274px] top-[2953px] text-xl text-left text-[#1e1e1e]">
        Years of
      </p>
      <div className="w-2.5 h-[93px] absolute left-[1093.5px] top-[2935.5px] rounded-tl-md rounded-bl-md bg-[#ff9f0d]" />
      <p className="absolute left-[1145px] top-[2955px] text-5xl font-bold text-left text-[#ff9f0d]">
        30+
      </p>
      <p className="absolute left-[1274px] top-[2978px] text-2xl font-bold text-left text-[#1e1e1e]">
        Experienced
      </p>
    </div>
  </div>
  <div className="w-[374px] h-[135px]">
    <div className="w-[102px] h-[100px] absolute left-[1093.5px] top-[2766.5px] rounded-md bg-[#ff9f0d]" />
    <div className="w-[102px] h-[100px] absolute left-[1228.5px] top-[2767.5px] rounded-md bg-[#ff9f0d]" />
    <div className="w-[102px] h-[100px] absolute left-[1365.5px] top-[2766.5px] rounded-md bg-[#ff9f0d]" />
    <p className="absolute left-[1100px] top-[2876px] text-lg text-left text-white">Fast Food</p>
    <p className="absolute left-[1254px] top-[2876px] text-lg text-left text-white">Lunch</p>
    <p className="absolute left-[1388px] top-[2876px] text-lg text-left text-white">Dinner</p>
  </div>
  <p className="w-[526px] absolute left-[1094px] top-[2615px] text-base text-left text-white">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
    dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id
    elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
    consequat.
  </p>
  <svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-14 absolute left-[1117px] top-[2789px]"
    preserveAspectRatio="none"
  >
    <path
      d="M10.6751 21C10.414 20.9994 10.1563 20.9405 9.92103 20.8274C9.68571 20.7144 9.47866 20.5501 9.31506 20.3466C9.15146 20.1432 9.03545 19.9057 8.97554 19.6516C8.91563 19.3975 8.91332 19.1332 8.9688 18.8781C10.3688 12.1406 18.3532 7 28.0001 7C37.6469 7 45.6313 12.1406 47.0313 18.8781C47.0868 19.1332 47.0845 19.3975 47.0246 19.6516C46.9646 19.9057 46.8486 20.1432 46.685 20.3466C46.5214 20.5501 46.3144 20.7144 46.0791 20.8274C45.8438 20.9405 45.5861 20.9994 45.325 21H10.6751Z"
      stroke="white"
      stroke-width={2}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.5 36.75V40.25C45.5 42.1065 44.7625 43.887 43.4497 45.1997C42.137 46.5125 40.3565 47.25 38.5 47.25H17.5C15.6435 47.25 13.863 46.5125 12.5503 45.1997C11.2375 43.887 10.5 42.1065 10.5 40.25V36.75"
      stroke="white"
      stroke-width={2}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.125 38.5L14.875 35L23.625 38.5L32.375 35L41.125 38.5L49.875 35"
      stroke="white"
      stroke-width={2}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.25 28H50.75"
      stroke="white"
      stroke-width={2}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-14 absolute left-[1252px] top-[2790px]"
    preserveAspectRatio="none"
  >
    <path
      d="M49 27.8687C49.0203 30.6512 48.4852 33.4097 47.426 35.9827C46.3667 38.5557 44.8046 40.8914 42.8312 42.8531C34.7594 50.925 21.5469 51.0125 13.3656 43.05C10.3641 40.1292 8.30448 36.3778 7.45134 32.2775C6.59819 28.1773 6.99051 23.9156 8.57789 20.0401C10.1653 16.1645 12.8752 12.8521 16.3595 10.5284C19.8438 8.20478 23.9433 6.976 28.1312 6.99998C28.3933 7.00384 28.6512 7.06578 28.8864 7.18134C29.1216 7.29689 29.3283 7.46319 29.4915 7.66823C29.6547 7.87328 29.7704 8.11198 29.8302 8.36712C29.89 8.62226 29.8925 8.8875 29.8375 9.14373C29.6096 10.16 29.6113 11.2144 29.8426 12.2299C30.0738 13.2455 30.5288 14.1966 31.1744 15.014C31.8199 15.8314 32.6397 16.4944 33.574 16.9548C34.5083 17.4151 35.5335 17.6612 36.575 17.675C37.0391 17.675 37.4842 17.8594 37.8124 18.1875C38.1406 18.5157 38.325 18.9609 38.325 19.425C38.3388 20.4664 38.5848 21.4917 39.0452 22.426C39.5055 23.3603 40.1686 24.1801 40.986 24.8256C41.8033 25.4711 42.7545 25.9261 43.77 26.1574C44.7856 26.3887 45.8399 26.3904 46.8562 26.1625C47.1125 26.1074 47.3777 26.1099 47.6329 26.1698C47.888 26.2296 48.1267 26.3453 48.3317 26.5085C48.5368 26.6717 48.7031 26.8783 48.8186 27.1136C48.9342 27.3488 48.9961 27.6067 49 27.8687V27.8687Z"
      stroke="white"
      stroke-width={2}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.125 40.25C35.5747 40.25 36.75 39.0747 36.75 37.625C36.75 36.1753 35.5747 35 34.125 35C32.6753 35 31.5 36.1753 31.5 37.625C31.5 39.0747 32.6753 40.25 34.125 40.25Z"
      fill="white"
    />
    <path
      d="M20.125 38.5C21.5747 38.5 22.75 37.3247 22.75 35.875C22.75 34.4253 21.5747 33.25 20.125 33.25C18.6753 33.25 17.5 34.4253 17.5 35.875C17.5 37.3247 18.6753 38.5 20.125 38.5Z"
      fill="white"
    />
    <path
      d="M18.375 26.25C19.8247 26.25 21 25.0747 21 23.625C21 22.1753 19.8247 21 18.375 21C16.9253 21 15.75 22.1753 15.75 23.625C15.75 25.0747 16.9253 26.25 18.375 26.25Z"
      fill="white"
    />
    <path
      d="M29.75 29.75C31.1997 29.75 32.375 28.5747 32.375 27.125C32.375 25.6753 31.1997 24.5 29.75 24.5C28.3003 24.5 27.125 25.6753 27.125 27.125C27.125 28.5747 28.3003 29.75 29.75 29.75Z"
      fill="white"
    />
  </svg>
  <svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-14 absolute left-[1389px] top-[2789px]"
    preserveAspectRatio="none"
  >
    <path
      d="M28 38.5V50.75"
      stroke="white"
      stroke-width={2}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.25 50.75H36.75"
      stroke="white"
      stroke-width={2}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.5001 5.25H38.5001L44.2094 24.5656C44.5613 25.7756 44.4682 27.0715 43.9469 28.2187C42.5604 31.2864 40.3185 33.8891 37.49 35.7147C34.6616 37.5403 31.3665 38.5113 28.0001 38.5113C24.6336 38.5113 21.3386 37.5403 18.5101 35.7147C15.6816 33.8891 13.4397 31.2864 12.0532 28.2187C11.5319 27.0715 11.4388 25.7756 11.7907 24.5656L17.5001 5.25Z"
      stroke="white"
      stroke-width={2}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5781 21.9406C14.8969 20.6938 20.2781 18.9 28 22.75C36.225 26.8625 41.8031 24.5438 43.8375 23.3406"
      stroke="white"
      stroke-width={2}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</div>
    </div></div>
    </section>
  )
}

export default FoodCategory