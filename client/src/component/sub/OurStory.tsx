import TilesRow from "./TilesRow";

export default function OurStory() {
  return (
    <div>
      <div className="OurStory">
        <div className="first relative">
          <img
            src="OurStory1.png"
            alt="orange"
            className="absolute"
            style={{ right: "0px" }}
          />
          <img src="OurStory2.png" alt="image" className="absolute" />
          <TilesRow />
          <TilesRow />
        </div>
        <TilesRow />
        <TilesRow />
        <TilesRow />
      </div>
    </div>
  );
}
