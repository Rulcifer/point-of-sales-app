import coffeeIcon from "../assets/icon/solar_tea-cup-bold.svg";

export default function Dashboard() {
  return (
    <div class="block max-w-[11rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="p-6">
        {/* <h5 class="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Special title treatment
        </h5> */}
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
    </div>
  );
}
