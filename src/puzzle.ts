let seeds = [];
const seedToSoilMap = {};

const sanitizeSeeds = (seedsString: string): number[] => {
  seeds = seedsString.split(" ");
  seeds = seeds.map((seed) => {
    return parseInt(seed);
  });
  return seeds;
};

const createSeedToSoilMap = () => {};
export { sanitizeSeeds, createSeedToSoilMap };
