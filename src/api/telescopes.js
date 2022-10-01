const telescopes = [
  {
    description:
      "A star-forming cloud teeming with gas, dust and massive newborn stars. The inset reveals the very center of the cloud, a cluster of stars called NGC 3603",
    answer: "wise",
    image: require("../images/telescopes/wise_StellarStormofInfraredLight.jpg"),
    miniature: require("../images/missions/wise_StellarStormofInfraredLightmini.png"),
    options: ["wise", "spitzer", "james webb", "hubble"],
    coordinates: { x: 684, y: 436, z: 1, r: 0 },
  },
  {
    description:
      "The Carina Nebula, also known as the Great Carina Nebula, the Eta Carinae Nebula, NGC 3372, as well as the Great Nebula is a bright nebula that has within its boundaries several open clusters of relative stars. Some articles generally refer to it as the Carina Nebula, mainly because of differentiating the many published works on this object.",
    answer: "wise",
    image: require("../images/telescopes/wise_nebulosakarina.png"),
    miniature: require("../images/missions/wise_nebulosakarina_mini.png"),
    options: ["wise", "galex", "planck", "hubble"],
    coordinates: { x: 444, y: 116, z: 1, r: 90 },
  },
  {
    description:
      "The Orion Nebula or Orion Nebula, also described as M42 or NGC 1976, according to astronomical nomenclature, is a diffuse nebula that is located between 1500 and 1800 light-years from the Solar System, and located south of Orion's Belt. . It was discovered by Nicolas-Claude Fabri de Peiresc in 1610 (it had previously been classified as a star - Theta Orionis).",
    answer: "wise",
    image: require("../images/telescopes/wise_nebulaorion.jpg"),
    miniature: require("../images/missions/wise_nebulaorion_mini.png"),
    options: ["wise", "galex", "chandra", "james webb"],
    coordinates: { x: 570, y: 406, z: 1, r: 90 },
  },
  {
    description:
      "The galaxy cluster SMACS 0723 acts as a gravitational lens, magnifying much more distant galaxies behind it. They have tiny, faint structures that have never been seen before, including star clusters and diffuse features.",
    answer: "wise",
    image: require("../images/telescopes/wise_galaxiasSMACS0723.png"),
    miniature: require("../images/missions/wise_galaxiasSMACS0723_mini.png"),
    options: ["wise", "chandra", "hubble", "james webb"],
    coordinates: { x: 532, y: 438, z: 1, r: 0 },
  },
  {
    description:
      "The Fornax cluster is a cluster of galaxies located largely in the constellation of the same name and at an approximate distance of 62.0 million light years (19.0 Mpc) from the Milky Way. It is the second richest cluster of galaxies in existence. a radius of 100 million light-years around the Local Group behind the Virgo cluster, although it is much less rich—but denser—than the latter,3 and may be associated with the nearby Eridanus Group.",
    answer: "wise",
    image: require("../images/telescopes/wise_cumulogalaxiasfornax.jpg"),
    miniature: require("../images/missions/wise_cumulogalaxiasfornax_mini.png"),
    options: ["wise", "chandra", "hubble", "james webb"],
    coordinates: { x: 300, y: 332, z: 1, r: 180 },
  },
  {
    description:
      "The Andromeda Galaxy, also known as Spiral Galaxy M31, Messier 31 or NGC 224, is a spiral galaxy with a diameter of two hundred twenty thousand light years (as far as its galactic halo is concerned) and about one hundred fifty thousand light years between. the ends of his arms. It is the farthest object visible to the naked eye from Earth (although some claim to be able to see the Triangulum galaxy with the naked eye, which is a little further away).",
    answer: "wise",
    image: require("../images/telescopes/wise_andromeda.jpg"),
    miniature: require("../images/missions/wise_andromeda_mini.png"),
    options: ["wise", "spitzer", "chandra", "hubble"],
    coordinates: { x: 644, y: 476, z: 1, r: 180 },
  },
  {
    description:
      "The Andromeda Galaxy, also known as Spiral Galaxy M31, Messier 31 or NGC 224, is a spiral galaxy with a diameter of two hundred twenty thousand light years (as far as its galactic halo is concerned) and about one hundred fifty thousand light years between. the ends of his arms. It is the farthest object visible to the naked eye from Earth (although some claim to be able to see the Triangulum galaxy with the naked eye, which is a little further away).",
    answer: "wise",
    image: require("../images/telescopes/wise_cometaSidingSpring.jpg"),
    miniature: require("../images/missions/wise_cometaSidingSpring_mini.png"),
    options: ["wise", "galex", "chandra", "hubble"],
    coordinates: { x: 704, y: 398, z: 1, r: 0 },
  },
  {
    description:
      "W51 is a region known for star formation, activity that can take place over millions of years; today, we already know that this nebula has more than 30 O-type stars, the most massive in the universe.",
    answer: "spitzer",
    image: require("../images/telescopes/spitzer_nebulosaW51.jpg"),
    miniature: require("../images/missions/spitzer_nebulosaW51_mini.png"),
    options: ["spitzer", "galex", "neowise", "hubble"],
    coordinates: { x: 304, y: 630, z: 1, r: 180 },
  },
  {
    description:
      "The Carina Nebula, also known as the Great Carina Nebula, the Eta Carinae Nebula, NGC 3372, as well as the Great Nebula is a bright nebula that has within its boundaries several open clusters of relative stars. Some articles generally refer to it as the Carina Nebula, mainly because of differentiating the many published works on this object.",
    answer: "spitzer",
    image: require("../images/telescopes/spitzer_nebulosakarina.png"),
    miniature: require("../images/missions/spitzer_nebulosakarina_mini.png"),
    options: ["spitzer", "galex", "chandra", "james webb"],
    coordinates: { x: 720, y: 422, z: 1, r: 180 },
  },
  {
    description:
      "The Helix Nebula, also known as the Helix Nebula, The Helix or NGC 7293 is a planetary nebula located in the constellation Aquarius (or Aquarius). It was also nicknamed God's Eye due to its shape as seen from Earth.",
    answer: "spitzer",
    image: require("../images/telescopes/spitzer_nebulosahelix.jpg"),
    miniature: require("../images/missions/spitzer_nebulosahelix_mini.png"),
    options: ["spitzer", "galex", "chandra", "hubble"],
    coordinates: { x: 688, y: 566, z: 1, r: 270 },
  },
  {
    description:
      "The Godzilla nebula is a huge cloud of space dust and gas, made up of many stars in various regions of space and its location is in the constellation of Sagittarius and is 7,800 light years from our earth.",
    answer: "spitzer",
    image: require("../images/telescopes/spitzer_nebulosaGodzilla.jpg"),
    miniature: require("../images/missions/spitzer_nebulosaGodzilla_mini.png"),
    options: ["spitzer", "neowise", "chandra", "hubble"],
    coordinates: { x: 564, y: 374, z: 1, r: 90 },
  },
  {
    description:
      "The Pinwheel Galaxy (also known as Messier 101 or NGC 5457) is a spiral galaxy 25 million light-years (8 megaparsecs) away in the constellation Ursa Major. It is one of the largest galaxies in the vicinity of the Milky Way, with a diameter more than twice that of the Milky Way, and is characterized both by its richness in gas to form new stars and by its high number of HII regions.",
    answer: "spitzer",
    image: require("../images/telescopes/spitzer_Messier101.jpg"),
    miniature: require("../images/missions/spitzer_Messier101_mini.png"),
    options: ["spitzer", "galex", "chandra", "hubble"],
    coordinates: { x: 300, y: 406, z: 1, r: 180 },
  },
  {
    description:
      "The galaxy cluster SMACS 0723 acts as a gravitational lens, magnifying much more distant galaxies behind it. They have tiny, faint structures that have never been seen before, including star clusters and diffuse features.",
    answer: "spitzer",
    image: require("../images/telescopes/spitzer_galaxiasSMACS0723.png"),
    miniature: require("../images/missions/spitzer_galaxiasSMACS0723_mini.png"),
    options: ["spitzer", "james webb", "chandra", "wise"],
    coordinates: { x: 596, y: 446, z: 1, r: 90 },
  },
  {
    description:
      "Collision between two large asteroid-sized bodies: a massive debris cloud around a young star around the star HD166191.",
    answer: "spitzer",
    image: require("../images/telescopes/spitzer_ColisiónplanetesimalesalrededorestrellaHD166191.jpg"),
    miniature: require("../images/missions/spitzer_ColisiónplanetesimalesalrededorestrellaHD166191_mini.png"),
    options: ["spitzer", "galex", "wise", "hubble"],
    coordinates: { x: 644, y: 406, z: 1, r: 270 },
  },
  {
    description:
      "The galaxy bridge is an area with a magnetic field that connects the two galaxy clusters that are approaching each other.",
    answer: "planck",
    image: require("../images/telescopes/Planck_puentedegalaxias.jpg"),
    miniature: require("../images/missions/Planck_puentedegalaxias_mini.png"),
    options: ["planck", "neowise", "chandra", "spitzer"],
    coordinates: { x: 436, y: 206, z: 1, r: 90 },
  },
  {
    description:
      "Comet Catalina (C/2013 US10), discovered on October 31, 2013, comes from the Oort Cloud, the great reservoir of comets in the outer solar system, one light year away from the Sun.",
    answer: "neowise",
    image: require("../images/telescopes/neowise_cometacatalina.jpg"),
    miniature: require("../images/missions/neowise_cometacatalina_mini.png"),
    options: ["neowise", "galex", "james webb", "spitzer"],
    coordinates: { x: 522, y: 406, z: 1.4, r: 0 },
  },
  {
    description:
      "Stephan's Quintet is a group of five galaxies located in the constellation Pegasus. It was the first compact group to be discovered. The group was discovered by Édouard Stephan in 1877, at the Marseille Observatory. The group is the most studied of all the compact groups. Visually, the brightest member is NGC 7320.",
    answer: "james webb",
    image: require("../images/telescopes/james_quintetosthephan.jpg"),
    miniature: require("../images/missions/james_quintetosthephan_mini.png"),
    options: ["james webb", "wise", "chandra", "hubble"],
    coordinates: { x: 533, y: 406, z: 1, r: 180 },
  },
  {
    description:
      "The Carina Nebula, also known as the Great Carina Nebula, the Eta Carinae Nebula, NGC 3372, as well as the Great Nebula is a bright nebula that has within its boundaries several open clusters of relative stars. Some articles generally refer to it as the Carina Nebula, mainly because of differentiating the many published works on this object..",
    answer: "james webb",
    image: require("../images/telescopes/james_nebulosakarina.jpg"),
    miniature: require("../images/missions/james_nebulosakarina_mini.png"),
    options: ["james webb", "galex", "chandra", "neowise"],
    coordinates: { x: 444, y: 62, z: 1, r: 90 },
  },
  {
    description:
      "The Helix Nebula, also known as the Helix Nebula, The Helix or NGC 7293 is a planetary nebula located in the constellation Aquarius (or Aquarius). It was also nicknamed God's Eye due to its shape as seen from Earth.",
    answer: "hubble",
    image: require("../images/telescopes/hubble_nebulahelix.jpg"),
    miniature: require("../images/missions/hubble_nebulahelix_mini.png"),
    options: ["hubble", "spitzer", "chandra", "galex"],
    coordinates: { x: 508, y: 270, z: 1.3, r: 0 },
  },
  {
    description:
      "The galaxy cluster SMACS 0723 acts as a gravitational lens, magnifying much more distant galaxies behind it. They have tiny, faint structures that have never been seen before, including star clusters and diffuse features.",
    answer: "james webb",
    image: require("../images/telescopes/james_galaxiasSMACS0723.jpg"),
    miniature: require("../images/missions/james_galaxiasSMACS0723_mini.png"),
    options: ["james webb", "galex", "chandra", "planck"],
    coordinates: { x: 916, y: 442, z: 1.3, r: 0 },
  },
  {
    description:
      "Arp 148 is the staggering aftermath of an encounter between two galaxies, resulting in a ring-shaped galaxy and a long-tailed companion. The collision between the two parent galaxies produced a shockwave effect that first drew matter into the center and then caused it to propagate outwards in a ring. The elongated companion perpendicular to the ring suggests that Arp 148 is a unique snapshot of an ongoing collision.",
    answer: "hubble and spitzer",
    image: require("../images/telescopes/hubble_spitzer_galaxyArp148.jpg"),
    miniature: require("../images/missions/hubble_spitzer_galaxyArp148_mini.png"),
    options: ["hubble and spitzer", "galex", "chandra", "hubble"],
    coordinates: { x: 556, y: 446, z: 1.3, r: 90 },
  },
  {
    description:
      "Young planetary nebula MyCn18 - an hourglass with an intricate pattern of engravings on its walls. In the composite image, irequire('../images/telescopes/nized nitrogen is represented by red') hydrogen by green, and doubly-ionized oxygen by blue.",
    answer: "hubble",
    image: require("../images/telescopes/hubble_nebulosaMyCn18.jpg"),
    miniature: require("../images/missions/hubble_nebulosaMyCn18_mini.png"),
    options: ["hubble", "neowise", "james webb", "hale"],
    coordinates: { x: 532, y: 358, z: 1.8, r: 0 },
  },
  {
    description:
      "The Andromeda Galaxy, also known as Spiral Galaxy M31, Messier 31 or NGC 224, is a spiral galaxy with a diameter of two hundred twenty thousand light years (as far as its galactic halo is concerned) and about one hundred fifty thousand light years between. the ends of his arms. It is the farthest object visible to the naked eye from Earth (although some claim to be able to see the Triangulum galaxy with the naked eye, which is a little further away).",
    answer: "hubble",
    image: require("../images/telescopes/hubble_andromeda.jpg"),
    miniature: require("../images/missions/hubble_andromeda_mini.png"),
    options: ["hubble", "planck", "wise", "james webb"],
    coordinates: { x: 596, y: 310, z: 1, r: 0 },
  },
  {
    description:
      "IRAS 20324+4057 is a mixture of interstellar gas and dust that extends a light year in length in the Cygnus constellation, 4,600 light-years away. It is located within the Cygnus OB2 association.",
    answer: "hubble",
    image: require("../images/telescopes/hubble_grupogasIRAS20324.jpg"),
    miniature: require("../images/missions/hubble_grupogasIRAS20324_mini.png"),
    options: ["hubble", "hubble and spitzer", "chandra", "spitzer"],
    coordinates: { x: 460, y: 302, z: 1.9, r: 180 },
  },
  {
    description:
      "NGC 4214 is an irregular galaxy and a wolf rayet galaxy in the constellation of Canes Venatici visible with amateur telescopes, and located at a distance of between 2.7 and 2.94 megaparsecs (about 9.5 million light-years). of the Milky Way.",
    answer: "hubble",
    image: require("../images/telescopes/hubble_galaxiaNGC4214.jpg"),
    miniature: require("../images/missions/hubble_galaxiaNGC4214_mini.png"),
    options: ["hubble", "james webb", "chandra", "galex"],
    coordinates: { x: 572, y: 678, z: 1.3, r: 90 },
  },
  {
    description: "See what a nuclear explosion looks like in space.",
    answer: "hubble",
    image: require("../images/telescopes/hubble_explosao.jpg"),
    miniature: require("../images/missions/hubble_explosao_mini.png"),
    options: ["hubble", "galex", "wise", "james webb"],
    coordinates: { x: 550, y: 214, z: 1.6, r: 180 },
  },
  {
    description:
      "This is the first time a picture of planets beyond our solar system has been captured using a telescope with a modest-sized mirror.",
    answer: "hale",
    image: require("../images/telescopes/hale_PortraitofDistantPlanets.jpg"),
    miniature: require("../images/missions/hale_PortraitofDistantPlanets_mini.png"),
    options: ["hale", "hubble and spitzer", "chandra", "spitzer"],
    coordinates: { x: 428, y: 446, z: 1, r: 180 },
  },
  {
    description:
      "The Helix Nebula, also known as the Helix Nebula, The Helix or NGC 7293 is a planetary nebula located in the constellation Aquarius (or Aquarius). It was also nicknamed God's Eye due to its shape as seen from Earth.",
    answer: "galex",
    image: require("../images/telescopes/galex_nebuahelix.jpg"),
    miniature: require("../images/missions/galex_nebuahelix_mini.png"),
    options: ["galex", "hubble", "chandra", "spitzer"],
    coordinates: { x: 532, y: 470, z: 2, r: 180 },
  },
  {
    description:
      "The Pinwheel Galaxy (also known as Messier 101 or NGC 5457) is a spiral galaxy 25 million light-years (8 megaparsecs) away in the constellation Ursa Major. It is one of the largest galaxies in the vicinity of the Milky Way, with a diameter more than twice that of the Milky Way, and is characterized both by its richness in gas to form new stars and by its high number of HII regions.",
    answer: "galex",
    image: require("../images/telescopes/galex_GalaxyM101.jpg"),
    miniature: require("../images/missions/galex_GalaxyM101_mini.png"),
    options: ["galex", "james webb", "chandra", "spitzer"],
    coordinates: { x: 740, y: 546, z: 3, r: 180 },
  },
  {
    description:
      "NGC 1851 is a globular cluster located in the constellation of Columba, the Dove. It is also known as Caldwell 73. Its apparent magnitude is 7.3. It is at 39,500 al,2 and is located about 8° southwest of the magnitude 2.65 star Phact (α Columbae).",
    answer: "galex",
    image: require("../images/telescopes/galex_CúmuloGlobularNGC1851.jpg"),
    miniature: require("../images/missions/galex_CúmuloGlobularNGC1851_mini.png"),
    options: ["galex", "wise", "planck", "spitzer"],
    coordinates: { x: 492, y: 510, z: 1, r: 180 },
  },
  {
    description:
      "NGC 5128 (also known as Centaurus A) is a lenticular galaxy about 14 million light-years from Earth in the constellation Centaurus. It is one of the closest radio galaxies to our planet, so its active galactic nucleus has been extensively studied by professional astronomers. It is the fifth brightest galaxy in the sky, thus becoming an ideal target for amateur astronomy, 2 although the galaxy is only visible from the southern hemisphere and at low latitudes from the northern hemisphere.",
    answer: "galex",
    image: require("../images/telescopes/galex_Centaurus-A.jpg"),
    miniature: require("../images/missions/galex_Centaurus-A_mini.png"),
    options: ["galex", "neowise", "hale", "james webb"],
    coordinates: { x: 678, y: 174, z: 1.3, r: 90 },
  },
  {
    description:
      "The Andromeda Galaxy, also known as Spiral Galaxy M31, Messier 31 or NGC 224, is a spiral galaxy with a diameter of two hundred twenty thousand light years (as far as its galactic halo is concerned) and about one hundred fifty thousand light years between. the ends of his arms. It is the farthest object visible to the naked eye from Earth (although some claim to be able to see the Triangulum galaxy with the naked eye, which is a little further away).",
    answer: "galex",
    image: require("../images/telescopes/galex_andromeda.jpg"),
    miniature: require("../images/missions/galex_andromeda_mini.png"),
    options: ["galex", "hubble and spitzer", "james webb", "spitzer"],
    coordinates: { x: 492, y: 406, z: 1, r: 180 },
  },
  {
    description:
      "Ultraviolet image of a diverse group of galaxy types. NG' 3190 is a dusty edge on spiral galaxy. NGC 3187 is highly distorted. The two are separated by only 35 kilo-parsecs (about half the diameter of our own Milky Way galaxy). A ring, elliptical, and other irregular galaxies are also present.",
    answer: "galex",
    image: require("../images/telescopes/galex_campoNGC3190.jpg"),
    miniature: require("../images/missions/galex_campoNGC3190_mini.png"),
    options: ["galex", "hale", "chandra", "hubble"],
    coordinates: { x: 532, y: 450, z: 1, r: 180 },
  },
  {
    description:
      "The Triangulum Galaxy is a spiral galaxy 2.73 million light-years (ly) from Earth in the constellation Triangulum. It is catalogued as Messier 33 or NGC (New General Catalogue) 598. With the D25 isophotal diameter of 18.74 kiloparsecs (61,100 light-years), the Triangulum Galaxy is the third-largest member of the Local Group of galaxies, behind the Andromeda Galaxy and the Milky Way. It is one of the most distant permanent objects that can be viewed with the naked eye.",
    answer: "galex",
    image: require("../images/telescopes/galex_AnatomyofTriangulum.jpg"),
    miniature: require("../images/missions/galex_AnatomyofTriangulum_mini.png"),
    options: ["galex", "hubble", "chandra", "spitzer"],
    coordinates: { x: 630, y: 438, z: 1, r: 90 },
  },
  {
    description:
      "Stars come in different sizes and masses. Our Sun is an average-sized star that will have a lifespan of some 10 billion years. More massive stars, like those found in Cygnus OB2, only last a few million years. During their lifetimes, they blast large amounts of high-energy winds into their surroundings.",
    answer: "chandra",
    image: require("../images/telescopes/chandra_cygnusob2.jpg"),
    miniature: require("../images/missions/chandra_cygnusob2_mini.png"),
    options: ["chandra", "james webb", "planck", "wise"],
    coordinates: { x: 572, y: 406, z: 1, r: 180 },
  },
  {
    description:
      "The colossal system Abell 2146 is the result of a collision and merger between two galaxy clusters. Astronomers think that galaxy clusters, the largest structures in the Universe held together by gravity, grow by colliding and merging with one another. Mergers of galaxy clusters are some of the most energetic events since the Big Bang.",
    answer: "chandra",
    image: require("../images/telescopes/chandra_abell2146.jpg"),
    miniature: require("../images/missions/chandra_abell2146_mini.png"),
    options: ["chandra", "planck", "james webb", "hubble"],
    coordinates: { x: 556, y: 190, z: 1, r: 270 },
  },
  {
    description:
      "Sagittarius A is the supermassive black hole in the galactic center of the Milky Way. It is a very compact and bright radio source in the center of the Milky Way that is part of a larger structure called Sagittarius A. Sagittarius A has long been considered to contain a supermassive black hole, as is believed to be the case in the nuclei of most spiral and elliptical galaxies.",
    answer: "chandra",
    image: require("../images/telescopes/chandra_sagitarioA.jpg"),
    miniature: require("../images/missions/chandra_sagitarioA_mini.png"),
    options: ["chandra", "neowise", "james webb", "spitzer"],
    coordinates: { x: 562, y: 428, z: 1, r: 270 },
  },
];

export default telescopes;
