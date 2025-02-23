import "./ShoesCollection.css";
import CustomeCard from "./CustomeCard";

const ShoesCollection = () => {
  let shoesList = [
    {
      name: "Nike Air Force 1 '07",
      url: "https://images.vegnonveg.com/resized/1360X1600/4331/air-force-1-07-whitewhite-60017a047bad7.jpeg",
    },

    {
      name: "Nike Dunk Low Retro",
      url: "https://images.vegnonveg.com/resized/1360X1600/5358/nike-dunk-low-retro-whiteblack-white-60e41a479d3e7.jpg",
    },
    {
      name: "Jordan Air Jordan 1 Mid",
      url: "https://images.vegnonveg.com/resized/1360X1600/11632/air-jordan-1-mid-blackiron-grey-white-black_1-66dad60e60424.jpg",
    },
    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1989/chuck-70-whitegarnetegret-5d81118e4353c.jpeg",
    },
    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
    },
    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
    },
    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
    },

    {
      name: "Converse Chuck 70 High Vintage Canvas",
      url: "https://images.vegnonveg.com/resized/1360X1600/1986/chuck-70-blackblackegret-5d7cce84646e4.jpeg",
    },
  ];

  return (
    <div className="shoes-container">
      <h1>Inventory</h1>
      <div className="sub-container">
        {shoesList.map((s) => (
          <CustomeCard shoesTitle={s.name} shoesUrl={s.url} />
        ))}
      </div>
    </div>
  );
};

export default ShoesCollection;
