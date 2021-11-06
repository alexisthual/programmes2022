import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  id: string;
}

const CandidateAvatar: React.FC<Props> = ({ id }) => {
  const testImageUrl = `https://www.thoiry.net/sites/thoiry.net/files/2018-02/grand%20sourir%20panda.jpg`;

  switch (id) {
    case `jlm`:
      return (
        <StaticImage
          className="flex-none rounded-full h-10 w-10"
          src="https://lafranceinsoumise.fr/wp-content/uploads/2017/09/jean-luc-melenchon.jpg"
          alt="Jean-Luc Mélenchon"
        />
      );
    case `em`:
      return (
        <StaticImage
          className="flex-none rounded-full h-10 w-10"
          src="https://img.lemde.fr/2021/05/26/0/0/3090/2172/664/0/75/0/150dbfa_567352041-850947.jpg"
          alt="Emmanuel Macron"
        />
      );
    case `ah`:
      return (
        <StaticImage
          className="flex-none rounded-full h-10 w-10"
          src="https://cdn-s-www.leprogres.fr/images/B053E572-6FFD-452A-91B9-5FB2C204A920/NW_detail/title-1631380975.jpg"
          alt="Anne Hidalgo"
        />
      );
    case `yj`:
      return (
        <StaticImage
          className="flex-none rounded-full h-10 w-10"
          src="https://www.ifop.com/wp-content/uploads/2021/10/Jadot-2048x1365.jpg"
          alt="Yannick Jadot"
        />
      );
    default:
      return (
        <StaticImage
          className="flex-none rounded-full h-10 w-10"
          src={testImageUrl}
          alt="A fire fox"
        />
      );
  }
};

export default CandidateAvatar;
