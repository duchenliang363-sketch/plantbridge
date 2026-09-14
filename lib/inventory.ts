export type FieldValue = string | "to_be_confirmed";

export type InclusionStatus = "included" | "not_included" | "to_be_confirmed";

export type PlantPhoto = {
  src: string;
  alt: string;
};

export type Plant = {
  id: string;
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  model: string;
  ratedCapacity: string;
  condition: "Used";
  location: string;
  availability: "Available";
  overview: {
    model: string;
    ratedCapacity: string;
    year: FieldValue;
    mixerBrand: FieldValue;
    mixerModel: FieldValue;
    aggregateBins: FieldValue;
    controlSystem: FieldValue;
    cementSilos: FieldValue;
    screwConveyors: FieldValue;
    operatingStatus: FieldValue;
    location: string;
    condition: "Used";
  };
  photos: PlantPhoto[];
  machineCondition: {
    currentOperatingStatus: FieldValue;
    knownCondition: FieldValue;
    knownIssues: FieldValue;
    recommendedMaintenance: FieldValue;
    inspectionStatus: FieldValue;
  };
  included: { item: string; status: InclusionStatus; note?: string }[];
  whatsappInterestMessage: string;
};

const tbc = "to_be_confirmed" as const;

function publicAsset(path: `/${string}`): string {
  return `${process.env.PAGES_BASE_PATH ?? ""}${path}`;
}

const hzs120: Plant = {
  id: "PB-HZS120-001",
  slug: "used-hzs120-001",
  path: "/used-concrete-batching-plants/used-hzs120-001",
  title: "Used HZS120 Concrete Batching Plant for Sale",
  seoTitle: "Used HZS120 Concrete Batching Plant for Sale | PlantBridge",
  seoDescription:
    "Used HZS120 concrete batching plant available in China. View actual machine photos and equipment details. Contact PlantBridge for price, inspection video and shipping information.",
  model: "HZS120",
  ratedCapacity: "120 m³/h",
  condition: "Used",
  location: "China",
  availability: "Available",
  overview: {
    model: "HZS120",
    ratedCapacity: "120 m³/h",
    year: "2019",
    mixerBrand: "Zoomlion",
    mixerModel: "JS2000",
    aggregateBins: "4",
    controlSystem: "Zoomlion",
    cementSilos:
      "Not included. Panel-type bolted cement silos can be supplied separately.",
    screwConveyors: "4",
    operatingStatus: "Dismantled",
    location: "China",
    condition: "Used",
  },
  photos: [
    {
      src: publicAsset("/plants/pb-hzs120-001/01-mixer.jpg"),
      alt: "Actual Zoomlion mixer of used HZS120 concrete batching plant PB-HZS120-001",
    },
    {
      src: publicAsset("/plants/pb-hzs120-001/02-weigh-hopper.jpg"),
      alt: "Actual weighing hopper area of used HZS120 plant PB-HZS120-001",
    },
    {
      src: publicAsset("/plants/pb-hzs120-001/03-aggregate-conveyor.jpg"),
      alt: "Actual aggregate conveyor of used HZS120 plant PB-HZS120-001",
    },
    {
      src: publicAsset("/plants/pb-hzs120-001/04-aggregate-batcher.jpg"),
      alt: "Actual aggregate batching bins of used HZS120 plant PB-HZS120-001",
    },
    {
      src: publicAsset("/plants/pb-hzs120-001/05-mixer-discharge.jpg"),
      alt: "Actual mixer discharge side of used HZS120 plant PB-HZS120-001",
    },
    {
      src: publicAsset("/plants/pb-hzs120-001/06-mixer-side.jpg"),
      alt: "Actual Zoomlion mixer side view of used HZS120 plant PB-HZS120-001",
    },
    {
      src: publicAsset("/plants/pb-hzs120-001/07-batcher-site.jpg"),
      alt: "Actual site photo of aggregate batcher for used HZS120 plant PB-HZS120-001",
    },
  ],
  machineCondition: {
    currentOperatingStatus: "Dismantled",
    knownCondition: tbc,
    knownIssues: tbc,
    recommendedMaintenance: tbc,
    inspectionStatus: tbc,
  },
  included: [
    { item: "Mixer", status: "included" },
    { item: "Aggregate batching system", status: "included" },
    { item: "Aggregate conveyor", status: tbc },
    { item: "Weighing system", status: tbc },
    { item: "Control system", status: "included" },
    { item: "Control room", status: tbc },
    { item: "Air system", status: tbc },
    {
      item: "Cement silos",
      status: "not_included",
      note: "Panel-type (bolted) cement silos can be supplied separately if required.",
    },
    { item: "Screw conveyors", status: "included" },
    { item: "Water system", status: tbc },
    { item: "Additive system", status: tbc },
  ],
  whatsappInterestMessage: `Hello PlantBridge,
I'm interested in the used HZS120 concrete batching plant (PB-HZS120-001).
My country:
Destination port:
Please send me the price and more machine details.`,
};

const plants: Plant[] = [hzs120];

export function getAvailablePlants(): Plant[] {
  return plants;
}

export function getPlantBySlug(slug: string): Plant | undefined {
  return plants.find((plant) => plant.slug === slug);
}

export function displayField(value: FieldValue): string {
  return value === "to_be_confirmed" ? "To be confirmed" : value;
}

export function displayInclusion(status: InclusionStatus): string {
  if (status === "included") return "Included";
  if (status === "not_included") return "Not included";
  return "To be confirmed";
}

export function displayCondition(value: FieldValue): string {
  return value === "to_be_confirmed"
    ? "To be confirmed during inspection."
    : value;
}
