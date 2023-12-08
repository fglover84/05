import { sanitizeSeeds, createSeedToSoilMap } from "../src/puzzle";

test("sanitize seed string ", () => {
  const seeds = "79 14 55 13";
  expect(sanitizeSeeds(seeds)).toEqual([79, 14, 55, 13]);
});

test("seedToSoilMap", () => {
  const seeds = "79 14 55 13";
  const seedToSoilInput = [["50 98 2"], ["52 50 48"]];
  const seedToSoilMap = { 
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15
    16
    17
    18
    19
    20
    21
    22
    23
    24
    25
    26
    27
    28
    29
    30
    31
    32
    33
    34
    35
    36
    37
    38
    39
    40
    41
    42
    43
    44
    45
    46
    47
    48    48
    49    49
    50    52
    51    53
    ...   ...
    96    98
    97    99
    98    50
    99    51
  }
  
  expect(createSeedToSoilMap(seedToSoilInput)).toEqual([
    79, 14, 55, 13,
  ]);
});
