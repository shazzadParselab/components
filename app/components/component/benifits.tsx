'use client'

import { TaglineIcon } from "../icons/icons_libary";

export default function BenifitsComponent() {
  return (
    <section className="flex w-full px-5 py-12 sm:py-20 min-h-[596px]">
      <div className="max-w-[1620] w-full flex flex-wrap items-center justify-center lg:justify-between gap-12 mx-auto">
        <div className="max-w-[548px] flex flex-col items-center lg:items-start gap-4">
          {/* ----- Tagline ----- */}
          <div className="tagline text-[#432AD8]">
            <TaglineIcon />
            Why Product Personalization Is a Game Changer
          </div>

          {/* ----- Heading ----- */}
          <h2 className="text-[40px] font-medium text-center lg:text-start">
            Personalization Delivers Business Results
          </h2>

          {/* ----- Description ----- */}
          <p className="text-[#616170] text-lg font-normal text-center lg:text-start">{`Today's`} customers expect more than just “add to cart.” They want options, control, and something made just for them. {`That's`} where personalization changes the game.</p>
        </div>

        <div className="max-w-[800px] w-full flex flex-wrap items-start justify-center gap-x-6 gap-y-8">

          <div className="flex max-w-[387px] px-5 py-6 flex-col items-start gap-3 rounded-2xl border border-transparent transition-all duration-200 hover:border-[#C2CBFF] hover:shadow-[0_2px_6px_0_rgba(0,0,0,0.08)]">
            <span className="p-2 rounded-lg bg-[#E9F9EF]">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M8.02734 21.175V18.76" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
                <path d="M14 21.175V16.345" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
                <path d="M19.9727 21.175V13.9183" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
                <path d="M19.974 6.82495L19.4373 7.45495C16.4623 10.9316 12.4723 13.3933 8.02734 14.5016" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
                <path d="M16.5547 6.82495H19.973V10.2316" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.5007 25.6667H17.5007C23.334 25.6667 25.6673 23.3334 25.6673 17.5V10.5C25.6673 4.66671 23.334 2.33337 17.5007 2.33337H10.5007C4.66732 2.33337 2.33398 4.66671 2.33398 10.5V17.5C2.33398 23.3334 4.66732 25.6667 10.5007 25.6667Z" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="text-2xl font-medium">Increased Sales</h3>
            <p className="font-normal text-lg text-[#616170]">Personalized products boost spending with custom features and added value.</p>
          </div>

          <div className="flex max-w-[387px] px-5 py-6 flex-col items-start gap-3 rounded-2xl border border-transparent transition-all duration-200 hover:border-[#C2CBFF] hover:shadow-[0_2px_6px_0_rgba(0,0,0,0.08)]">
            <span className="p-2 rounded-lg bg-[#EBF2FE]">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M17.5007 2.33337V14C17.5007 15.2834 16.4507 16.3334 15.1673 16.3334H2.33398V8.89004C3.18565 9.90504 4.49235 10.535 5.93902 10.5C7.11735 10.4767 8.17899 10.0217 8.97232 9.26338C9.33399 8.96004 9.63734 8.57503 9.87068 8.15503C10.2907 7.44336 10.524 6.60334 10.5007 5.72834C10.4657 4.36334 9.859 3.16171 8.914 2.33337H17.5007Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25.6673 16.3334V19.8334C25.6673 21.77 24.104 23.3334 22.1673 23.3334H21.0007C21.0007 22.05 19.9507 21 18.6673 21C17.384 21 16.334 22.05 16.334 23.3334H11.6673C11.6673 22.05 10.6173 21 9.33398 21C8.05065 21 7.00065 22.05 7.00065 23.3334H5.83398C3.89732 23.3334 2.33398 21.77 2.33398 19.8334V16.3334H15.1673C16.4507 16.3334 17.5007 15.2834 17.5007 14V5.83337H19.6473C20.4873 5.83337 21.2573 6.28839 21.6773 7.01172L23.6723 10.5H22.1673C21.5257 10.5 21.0007 11.025 21.0007 11.6667V15.1667C21.0007 15.8084 21.5257 16.3334 22.1673 16.3334H25.6673Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.33333 25.6667C10.622 25.6667 11.6667 24.622 11.6667 23.3333C11.6667 22.0447 10.622 21 9.33333 21C8.04467 21 7 22.0447 7 23.3333C7 24.622 8.04467 25.6667 9.33333 25.6667Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.6673 25.6667C19.956 25.6667 21.0007 24.622 21.0007 23.3333C21.0007 22.0447 19.956 21 18.6673 21C17.3787 21 16.334 22.0447 16.334 23.3333C16.334 24.622 17.3787 25.6667 18.6673 25.6667Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25.6667 14V16.3333H22.1667C21.525 16.3333 21 15.8083 21 15.1667V11.6667C21 11.025 21.525 10.5 22.1667 10.5H23.6716L25.6667 14Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.5007 5.72828C10.524 6.60328 10.2907 7.4433 9.87071 8.15497C9.63738 8.57497 9.33402 8.95998 8.97236 9.26332C8.17902 10.0217 7.11739 10.4766 5.93905 10.5C4.49239 10.535 3.18569 9.90498 2.33402 8.88998C2.17069 8.71498 2.03069 8.51665 1.90236 8.31832C1.44736 7.62999 1.19069 6.81335 1.16736 5.93835C1.13236 4.46835 1.78568 3.12664 2.83568 2.25164C3.62901 1.59831 4.63232 1.18998 5.72899 1.16665C6.95399 1.14332 8.07404 1.58665 8.91404 2.33332C9.85904 3.16165 10.4657 4.36328 10.5007 5.72828Z" stroke="#3B82F6" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.01367 5.86833L5.19202 6.98828L7.63031 4.63159" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="text-2xl font-medium">Lower Return Rates</h3>
            <p className="font-normal text-lg text-[#616170]">Previews reduce surprises, lowering returns and increasing satisfaction.</p>
          </div>

          <div className="flex max-w-[387px] px-5 py-6 flex-col items-start gap-3 rounded-2xl border border-transparent transition-all duration-200 hover:border-[#C2CBFF] hover:shadow-[0_2px_6px_0_rgba(0,0,0,0.08)]">
            <span className="p-2 rounded-lg bg-[#F6EEFE]">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M9.77734 14L12.589 16.8233L18.224 11.1766" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.5423 2.85829C13.3473 2.16996 14.6657 2.16996 15.4823 2.85829L17.3257 4.44496C17.6757 4.74829 18.329 4.99329 18.7957 4.99329H20.779C22.0157 4.99329 23.0307 6.00829 23.0307 7.24496V9.22829C23.0307 9.68329 23.2757 10.3483 23.579 10.6983L25.1657 12.5416C25.854 13.3466 25.854 14.665 25.1657 15.4816L23.579 17.325C23.2757 17.675 23.0307 18.3283 23.0307 18.795V20.7783C23.0307 22.015 22.0157 23.03 20.779 23.03H18.7957C18.3407 23.03 17.6757 23.275 17.3257 23.5783L15.4823 25.165C14.6773 25.8533 13.359 25.8533 12.5423 25.165L10.699 23.5783C10.349 23.275 9.69568 23.03 9.22901 23.03H7.21068C5.97401 23.03 4.95901 22.015 4.95901 20.7783V18.7833C4.95901 18.3283 4.71401 17.675 4.42234 17.325L2.84734 15.47C2.17068 14.665 2.17068 13.3583 2.84734 12.5533L4.42234 10.6983C4.71401 10.3483 4.95901 9.69496 4.95901 9.23996V7.23329C4.95901 5.99662 5.97401 4.98162 7.21068 4.98162H9.22901C9.68401 4.98162 10.349 4.73662 10.699 4.43329L12.5423 2.85829Z" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="text-2xl font-medium">Stronger Loyalty</h3>
            <p className="font-normal text-lg text-[#616170]">Personalization builds emotional connection and brand loyalty.</p>
          </div>

          <div className="flex max-w-[387px] px-5 py-6 flex-col items-start gap-3 rounded-2xl border border-transparent transition-all duration-200 hover:border-[#C2CBFF] hover:shadow-[0_2px_6px_0_rgba(0,0,0,0.08)]">
            <span className="p-2 rounded-lg bg-[#FEF1E8]">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14.1758 19.25V21.7" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.3418 25.6666H20.0085V24.5C20.0085 23.2166 18.9585 22.1666 17.6751 22.1666H10.6751C9.3918 22.1666 8.3418 23.2166 8.3418 24.5V25.6666V25.6666Z" stroke="#F97316" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M7.17578 25.6666H21.1758" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.0007 18.6667C9.48565 18.6667 5.83398 15.015 5.83398 10.5V7.00004C5.83398 4.42171 7.92232 2.33337 10.5007 2.33337H17.5007C20.079 2.33337 22.1673 4.42171 22.1673 7.00004V10.5C22.1673 15.015 18.5157 18.6667 14.0007 18.6667Z" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.38253 13.5916C5.50753 13.3116 4.73753 12.7983 4.13086 12.1916C3.08086 11.025 2.38086 9.62495 2.38086 7.99162C2.38086 6.35828 3.66419 5.07495 5.29753 5.07495H6.05586C5.82253 5.61162 5.70586 6.20662 5.70586 6.82495V10.325C5.70586 11.4916 5.95086 12.5883 6.38253 13.5916Z" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.6191 13.5916C22.4941 13.3116 23.2641 12.7983 23.8708 12.1916C24.9208 11.025 25.6208 9.62495 25.6208 7.99162C25.6208 6.35828 24.3375 5.07495 22.7041 5.07495H21.9458C22.1791 5.61162 22.2958 6.20662 22.2958 6.82495V10.325C22.2958 11.4916 22.0508 12.5883 21.6191 13.5916Z" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="text-2xl font-medium">Unique Brand Positioning</h3>
            <p className="font-normal text-lg text-[#616170]">Custom options give your brand a unique edge in a crowded market.</p>
          </div>


        </div>

      </div>
    </section >
  );
}
