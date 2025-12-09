/*
Text - size, color, 
Box - padding, size, text, background,
responsive not done
*/

import { ReactElement, useState } from "react";
import { TaglineUseCaseIcon } from "./icons/icons_libary";

interface Tagline {
  id: number;
  title: string;
  icon: ReactElement;
}

interface UseCaseListType {
  id: number;
  title: string;
  short_des: string;
  icon: string;
  background_image: string;
}



interface UseCaseType {
  id: number;
  tagline: Tagline;
  title: string;
  short_description: string;
  usecases: UseCaseListType[];
  active: boolean;
}

const usecase_data: UseCaseType = {
  id: 1,
  tagline: { id: 1, title: "Use Cases", icon: <TaglineUseCaseIcon /> },
  title: "Let Customers See What They Personalize",
  short_description:
    "Today’s customers expect more than just “add to cart.” They want options, control, and something made just for them. That’s where personalization changes the game.",
  usecases: [
    {
      id: 1,
      title: "👕 Personalized Apparel",
      short_des:
        "High emotional value and strong gifting appeal. Personalized jewelry drives premium pricing, gift-focused sales, and strong word of mouth marketing ideal for building a loyal customer base.",
      icon: "string",
      background_image: "string",
    },
    {
      id: 2,
      title: "💍 Jewelry Collections",
      short_des:
        "High emotional value and strong gifting appeal. Personalized jewelry drives premium pricing, gift-focused sales, and strong word of mouth marketing ideal for building a loyal customer base.",
      icon: "string",
      background_image: "string",
    },
    {
      id: 3,
      title: "🛌 Interactive Furniture",
      short_des:
        "High emotional value and strong gifting appeal. Personalized jewelry drives premium pricing, gift-focused sales, and strong word of mouth marketing ideal for building a loyal customer base.",
      icon: "string",
      background_image: "string",
    },
    {
      id: 4,
      title: "🏠 Interior & Space Design",
      short_des:
        "High emotional value and strong gifting appeal. Personalized jewelry drives premium pricing, gift-focused sales, and strong word of mouth marketing ideal for building a loyal customer base.",
      icon: "string",
      background_image: "string",
    },
    {
      id: 5,
      title: "🚗 Automobile & Bike",
      short_des:
        "High emotional value and strong gifting appeal. Personalized jewelry drives premium pricing, gift-focused sales, and strong word of mouth marketing ideal for building a loyal customer base",
      icon: "string",
      background_image: "string",
    },
  ],
  active: true,
};



export default function UseCases() {
  const useCaseData = usecase_data;

  const [menuId, setMenuId] = useState(1);

  const handleUseCase = (id: number) => {
    setMenuId(id);
  };

  return (
    <section className="pd_use_cases pd_container">
      <div className="pd_use_cases_container">
        {useCaseData && (
          <div className="pd_use_cases_heading">
            {/* ----- Tagline ----- */}
            <div className="pd_use_cases_tagline">
              <div className="icon_box">{useCaseData.tagline.icon}</div>
              <span className="content_tagline">
                {useCaseData.tagline.title}
              </span>
            </div>

            <h2>{useCaseData.title}</h2>
            <p>{useCaseData.short_description}</p>
          </div>
        )}

        {useCaseData.usecases && (
          <div className="pd_useCases">
            <div className="pd_use_case_list">
              {useCaseData.usecases.map((usecase) => (
                <div
                  key={usecase.id}
                  className={`pd_useCase_list ${
                    usecase.id == menuId && "active"
                  }`}

                >
                  <div
                  aria-hidden= "true"
                    className="pd_usecase_list_title"
                    onClick={() => handleUseCase(usecase.id)}

                  >
                    <h3>{usecase.title}</h3>
                  </div>

                  <div className={`pd_usecase_list_description ${
                        usecase.id === menuId ? "fadeIn" : "fadeOut hidden"
                      }`}>
                    <p
                    id={usecase.title}
                      className={`accordion-content`}
                    >
                      {usecase.short_des}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pd_usecase_canvas"></div>
          </div>
        )}
      </div>
    </section>
  );
}
