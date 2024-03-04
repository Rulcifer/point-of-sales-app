import coffeeIcon from "../assets/icon/solar_tea-cup-bold.svg";

export default function Dashboard() {
  return (
    <div class="flex flex-wrap justify-center mt-10">

<div class="flex flex-wrap col-9">
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div class="flex items-center mb-3">
                 <img
                 src={coffeeIcon}
                 alt="Coffee Icon"
          className="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
        />
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Coffe</h2>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    7 Items.
                </p>
            </div>
        </div>
    </div>

    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div class="flex items-center mb-3">
                <div
                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 class="text-white dark:text-white text-lg font-medium">Feature 2</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
                </p>
                <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div class="flex items-center mb-3">
                <div
                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 class="text-white dark:text-white text-lg font-medium">Feature 3</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
                </p>
                <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  </div>

    <div className="flex flex-col-3">
        
          <div>
            <h2 className="text-xl font-medium mb-4">Selected Data:</h2>
            {/* Render additional information or components based on selectedData */}
          </div>
        
        {/* You can display an image or any other content here */}
        <img
          src="url-to-your-image.jpg"
          alt="Your Image"
          className="max-w-xs"
        />
      </div>

</div>

  );
}

/* <div class="block max-w-[11rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="p-6">
        <img
          src={coffeeIcon}
          alt="Coffee Icon"
          className="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
        />
        <h6 class="mb-2 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50">
          Card subtitle
        </h6>
        <p class="mb-4 text-base  leading-normal text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          type="button"
          href="#"
          class="pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
        >
          Card Link
        </a>
        <a
          type="button"
          href="#"
          class="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
        >
          Another Link
        </a>
      </div>
    </div> */