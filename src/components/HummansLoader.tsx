// bodies
import Hoodie from "../assets/humaans/bodies/Hoodie.svg?react";
import Jacket from "../assets/humaans/bodies/Jacket.svg?react";
import Jacket2 from "../assets/humaans/bodies/Jacket2.svg?react";
import LabCoat from "../assets/humaans/bodies/LabCoat.svg?react";
import LongSleeve from "../assets/humaans/bodies/LongSleeve.svg?react";
import PointingForward from "../assets/humaans/bodies/PointingForward.svg?react";
import PointingUp from "../assets/humaans/bodies/PointingUp.svg?react";
import Pregnant from "../assets/humaans/bodies/Pregnant.svg?react";
import TrenchCoat from "../assets/humaans/bodies/TrenchCoat.svg?react";
import TurtleNeck from "../assets/humaans/bodies/TurtleNeck.svg?react";

// bottoms
import BaggyPants from "../assets/humaans/bottoms/BaggyPants.svg?react";
import Jogging from "../assets/humaans/bottoms/Jogging.svg?react";
import Shorts from "../assets/humaans/bottoms/Shorts.svg?react";
import SkinnyJeans from "../assets/humaans/bottoms/SkinnyJeans.svg?react";
import SkinnyJeansWalk from "../assets/humaans/bottoms/SkinnyJeansWalk.svg?react";
import Skirt from "../assets/humaans/bottoms/Skirt.svg?react";
import Sprint from "../assets/humaans/bottoms/Sprint.svg?react";
import SweatPants from "../assets/humaans/bottoms/SweatPants.svg?react";
import Wheelchair from "../assets/humaans/bottoms/Wheelchair.svg?react";

// faces
import Airy from "../assets/humaans/faces/Airy.svg?react";
import Afro from "../assets/humaans/faces/Afro.svg?react";
import Caesar from "../assets/humaans/faces/Caesar.svg?react";
import Chongo from "../assets/humaans/faces/Chongo.svg?react";
import Curly from "../assets/humaans/faces/Curly.svg?react";
import Hijab1 from "../assets/humaans/faces/Hijab1.svg?react";
import Hijab2 from "../assets/humaans/faces/Hijab2.svg?react";
import Long from "../assets/humaans/faces/Long.svg?react";
import NoHair from "../assets/humaans/faces/NoHair.svg?react";
import Pony from "../assets/humaans/faces/Pony.svg?react";
import Rad from "../assets/humaans/faces/Rad.svg?react";
import Short1 from "../assets/humaans/faces/Short1.svg?react";
import Short2 from "../assets/humaans/faces/Short2.svg?react";
import ShortBeard from "../assets/humaans/faces/ShortBeard.svg?react";
import Top from "../assets/humaans/faces/Top.svg?react";
import Turban1 from "../assets/humaans/faces/Turban1.svg?react";
import Turban2 from "../assets/humaans/faces/Turban2.svg?react";
import Wavy from "../assets/humaans/faces/Wavy.svg?react";
import { useImperativeHandle, useMemo, useState } from "react";
import styled from "styled-components";

const Humaans = {
  male: {
    bodies: [
      Hoodie,
      Jacket,
      Jacket2,
      LabCoat,
      LongSleeve,
      PointingForward,
      PointingUp,
      TrenchCoat,
      TurtleNeck,
    ],
    bottoms: [
      BaggyPants,
      Jogging,
      Shorts,
      SkinnyJeans,
      SkinnyJeansWalk,
      Sprint,
      SweatPants,
      Wheelchair,
    ],
    faces: [
      Afro,
      Caesar,
      Curly,
      NoHair,
      Rad,
      Short1,
      Short2,
      ShortBeard,
      Turban1,
      Turban2,
      Wavy,
    ],
  },
  female: {
    bodies: [
      Hoodie,
      Jacket,
      Jacket2,
      LabCoat,
      LongSleeve,
      PointingForward,
      PointingUp,
      Pregnant,
      TrenchCoat,
      TurtleNeck,
    ],
    bottoms: [
      BaggyPants,
      Jogging,
      Shorts,
      SkinnyJeans,
      SkinnyJeansWalk,
      Skirt,
      Sprint,
      SweatPants,
      Wheelchair,
    ],
    faces: [
      Afro,
      Airy,
      Chongo,
      Curly,
      Hijab1,
      Hijab2,
      Long,
      NoHair,
      Pony,
      Rad,
      Top,
      Wavy,
    ],
  },
};

const Faces = {
  male: Humaans.male.faces,
  female: Humaans.female.faces,
};
const previousFaces: { male: string[]; female: string[] } = {
  male: [],
  female: [],
};
const getRandomFace = (gender: "male" | "female") => {
  const availableFaces = Faces[gender].filter(
    (face) => !previousFaces[gender].includes(face.name)
  );
  const face =
    availableFaces[Math.floor(Math.random() * availableFaces.length)];
  previousFaces[gender].push(face.name);
  if (previousFaces[gender].length > 5) previousFaces[gender].shift();
  return face;
};

const Bodies = {
  male: Humaans.male.bodies,
  female: Humaans.female.bodies,
};
const previousBodies: { male: string[]; female: string[] } = {
  male: [],
  female: [],
};
const getRandomBody = (gender: "male" | "female") => {
  const availableBodies = Bodies[gender].filter(
    (body) => !previousBodies[gender].includes(body.name)
  );
  const body =
    availableBodies[Math.floor(Math.random() * availableBodies.length)];
  previousBodies[gender].push(body.name);
  if (previousBodies[gender].length > 5) previousBodies[gender].shift();
  return body;
};

const Bottoms = {
  male: Humaans.male.bottoms,
  female: Humaans.female.bottoms,
};
const previousBottoms: { male: string[]; female: string[] } = {
  male: [],
  female: [],
};
const getRandomBottom = (gender: "male" | "female", face: string) => {
  const availableBottoms = Bottoms[gender].filter(
    (bottom) =>
      !previousBottoms[gender].includes(bottom.name) &&
      !(
        ["SvgHijab1", "SvgHijab2", "SvgTurban1", "SvgTurban2"].includes(face) &&
        ["SvgShorts", "SvgSkirt"].includes(bottom.name)
      )
  );
  const bottom =
    availableBottoms[Math.floor(Math.random() * availableBottoms.length)];
  previousBottoms[gender].push(bottom.name);
  if (previousBottoms[gender].length > 5) previousBottoms[gender].shift();
  return bottom;
};

const SkinColors = ["#ECB992", "#DDA175", "#C18661", "#AB7B5E", "#8F6854"];
const previousSkinColors: string[] = [];
const getRandomSkinColor = (random?: number) => {
  console.log(previousSkinColors);
  const availableColors = SkinColors.filter(
    (color) => !previousSkinColors.includes(color)
  );
  const color =
    availableColors[
      Math.floor((random ?? Math.random()) * availableColors.length)
    ];
  previousSkinColors.push(color);
  if (previousSkinColors.length > 3) previousSkinColors.shift();
  console.log(previousSkinColors);
  console.log(color);
  return color;
};

const HairColors = ["#7C0A02", "#5D1916", "#121212", "#310306", "#59260B"];
const previousHairColors: string[] = [];
const getRandomHairColor = (random?: number) => {
  const availableColors = HairColors.filter(
    (color) => !previousHairColors.includes(color)
  );
  const color =
    availableColors[
      Math.floor((random ?? Math.random()) * availableColors.length)
    ];
  previousHairColors.push(color);
  if (previousHairColors.length > 3) previousHairColors.shift();
  return color;
};

const ScopedElement = (skinColor: string, hairColor: string) => styled.div`
  #Head {
    fill: ${skinColor};
  }

  #hair {
    fill: ${hairColor};
  }

  #Skin {
    fill: ${skinColor};
  }

  #Leg {
    fill: ${skinColor};
  }
`;

export function RandomHumaan({
  ref,
}: {
  ref?: React.RefObject<{ update: () => void }>;
}) {
  const [random, setRandom] = useState(Math.random());

  const gender = useMemo(() => (random > 0.5 ? "male" : "female"), [random]);

  const skinColor = useMemo(() => getRandomSkinColor(random), [random]);
  const hairColor = useMemo(() => getRandomHairColor(random), [random]);

  const ElementWrapper = ScopedElement(skinColor, hairColor);

  const Face = useMemo(() => getRandomFace(gender), [gender]);

  const Body = useMemo(() => getRandomBody(gender), [gender]);

  const Bottom = useMemo(
    () => getRandomBottom(gender, Face.name),
    [gender, Face]
  );

  useImperativeHandle(ref, () => ({
    update: () => {
      setRandom(Math.random());
    },
  }));

  return (
    <div className="humaan relative">
      <div
        className={`humaan-face absolute -top-[5.5rem] left-[1.28rem] ${
          ["SvgHijab1", "SvgHijab2"].includes(Face.name) ? "z-30" : "z-10"
        }`}
      >
        <ElementWrapper>
          <Face width={160} height={160} />
        </ElementWrapper>
      </div>
      <div className="humaan-body relative z-20">
        <ElementWrapper>
          <Body width={200} height={200} />
        </ElementWrapper>
      </div>
      <div className="humaan-bottom absolute top-[5.25rem] z-10">
        <ElementWrapper>
          <Bottom width={200} height={200} />
        </ElementWrapper>
      </div>
    </div>
  );
}
