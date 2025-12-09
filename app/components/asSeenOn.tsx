/*
---Now I just need to adjust the icon sizes
---Check the flex layout
---Make responsiveness.
*/

interface Card {
  id: number;
  title: string;
  icon: string;
}

interface AsSeenOnType {
  title: string;
  active: boolean;
  cards: Card[];
}

const asSeenOn_data: AsSeenOnType = {
  title: "74% of eCommerce Retailers Use Product Personalization",
  cards: [
    { id: 1, title: "icon1", icon: "/static/asSoonAs/logo1.svg" },
    { id: 2, title: "icon2", icon: "/static/asSoonAs/logo2.svg" },
    { id: 3, title: "icon3", icon: "/static/asSoonAs/logo3.svg" },
    { id: 4, title: "icon4", icon: "/static/asSoonAs/logo4.svg" },
    { id: 5, title: "icon5", icon: "/static/asSoonAs/logo5.svg" },
    { id: 6, title: "icon6", icon: "/static/asSoonAs/logo6.svg" },
    { id: 7, title: "icon7", icon: "/static/asSoonAs/logo7.svg" },
    { id: 8, title: "icon8", icon: "/static/asSoonAs/logo8.svg" },
    { id: 9, title: "icon9", icon: "/static/asSoonAs/logo9.svg" },
    { id: 10, title: "icon10", icon: "/static/asSoonAs/logo10.svg" },
  ],
  active: true,
};

export default function AsSeenOn() {
  return (
    <section className="as_seen_on_section pd_container" title="As Seen On">
      {asSeenOn_data && (
        <div className="as_seen_on_cards">
          <h2 className="as_seen_on_cards_title">{asSeenOn_data.title}</h2>

          <div className="as_seen_on_card">
            {asSeenOn_data.cards &&
              asSeenOn_data.cards.map((card) => (
                <div key={card.id} className="aso_card">
                  <img
                    className="aso_card_img"
                    src={card.icon}
                    alt={card.title}
                    width={200}
                    height={100}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
}
