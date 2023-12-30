import Modal from "@/shared/Modal";
import ExtraDataContainer from "./ExtraDataContainer";

const AboutMe = () => {
  const data = {
    school: "computer science - Helwan University ",
    grad: true,
    schoolTime: "2018-2023",
    tags: ["js", "html", "css", "frontend", "git"],
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam libero, dolores facilis similique dolore voluptatum enim! Facere maxime impedit ad quis consectetur mollitia corporis! Nulla, est. Alias, dolores nisi. Eaque tempore, eligendi modi quas facilis laborum iusto magnam voluptates. Autem possimus illo animi consequatur atque doloremque unde voluptatem adipisci.",
  };

  const displayedAbout = data.about.substring(0, 250);
  const showMoreAbout = data.about.length > 250;
  return (
    <ExtraDataContainer className={"md:w-7/12"}>
      <h3 className="font-bold text-xl">About</h3>
      <p className="leading-loose">{displayedAbout}</p>
      {!!showMoreAbout && (
        <div className="flex justify-center items-center">
          <Modal
            openBtn={
              <button className="text-lightGreen text-center underline">
                show more
              </button>
            }
          >
            <p className="leading-loose">{data.about}</p>
          </Modal>
        </div>
      )}
    </ExtraDataContainer>
  );
};
export default AboutMe;
