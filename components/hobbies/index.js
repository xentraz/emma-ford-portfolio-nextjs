import { HobbiesStyle } from "./hobbies.style";
import Image from "next/image";

const Hobbies = () => {
  return (
    <>
      <HobbiesStyle>
        <div className="hobbies">
          <div className="hobbies_heading">
            <h2 className="static">Hobbies & Interests</h2>
          </div>
          <div className="hobbies_list">
            {/* NOTE: DRY - use array.map */}
            <div className="hobbies_cards">
              <Image
                src="/img/headphones.svg"
                alt="Illustration icon of a headset with a speech bubble in the top right corner, the speech bobble contains a note."
                height="85vh"
                width="85vw"
              />
              <p className="blue">Music</p>
            </div>
            <div className="hobbies_cards">
              <Image
                src="/img/game-controller.svg"
                alt="Illustration of a game controller"
                height="85vh"
                width="85vw"
              />
              <p className="blue">Gaming</p>
            </div>
            <div className="hobbies_cards">
              <Image
                src="/img/coffee-maker.svg"
                alt="Illustration of a coffee maker"
                height="85vh"
                width="85vw"
              />
              <p className="blue">Coffee</p>
            </div>
            <div className="hobbies_cards">
              <Image
                src="/img/3d-glasses.svg"
                alt="Illutration of a pair of 3D glasses"
                height="85vh"
                width="85vw"
              />
              <p className="blue">Movies / TV shows</p>
            </div>
            <div className="hobbies_cards">
              <Image
                src="/img/camera.svg"
                alt="Illustration of a camera"
                height="85vh"
                width="85vw"
              />
              <p className="blue">Photography</p>
            </div>
            <div className="hobbies_cards">
              <Image
                src="/img/reading.svg"
                alt="Illustration of an open book"
                height="85vh"
                width="85vw"
              />
              <p className="blue">Reading</p>
            </div>
          </div>
        </div>
      </HobbiesStyle>
    </>
  );
};

export default Hobbies;
