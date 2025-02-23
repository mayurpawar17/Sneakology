import "../assets/styles/ShoesCollection.css"
import CustomeCard from "./CustomeCard";

const ShoesCollection = () => {
  let shoesList = [
    {
      name: "Nike Air Force 1 '07",
      url: "https://images.vegnonveg.com/resized/1360X1600/4331/air-force-1-07-whitewhite-60017a047bad7.jpeg",
      cost:"7,495"
    },

    {
      name: "Jordan Air Jordan 1 Retro High Og",
      url: "https://images.vegnonveg.com/resized/1360X1600/12287/air-jordan-1-retro-high-og-blackmedium-grey-white-black-6735e384cf838.jpg",
      cost:"16,995"
    },
    {
      name: "Jordan AIR JORDAN 1 RETRO HIGH OG GS",
      url: "https://images.vegnonveg.com/resized/1360X1600/12562/jordan-air-jordan-1-retro-high-og-whiteblack-varsity-red-sail_1-67ac92756a0ba.jpg",
      cost:"10,295"
    },
    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1989/chuck-70-whitegarnetegret-5d81118e4353c.jpeg",
      cost:"6,399"
    },
    {
      name: "New Balance 1906",
      url: "https://images.vegnonveg.com/resized/1360X1600/12582/new-balance-1906-black-67b435966ddec.jpg",
      cost:"15,999"
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
      cost:"7,495"
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
      cost:"7,495"
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
      cost:"7,495"
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
      cost:"7,495"
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
      cost:"7,495"
    },
    
    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
      cost:"7,495"
    },

    
    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
      cost:"7,495"
    },
    
    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
      cost:"7,495"
    },
  ];

  return (
    <div className="shoes-container">
      <h1>Inventory</h1>
      <div className="sub-container">
        {shoesList.map((s) => (
          <CustomeCard shoesTitle={s.name} shoesUrl={s.url} shoesCost={s.cost} />
        ))}
      </div>
    </div>
  );
};

export default ShoesCollection;
