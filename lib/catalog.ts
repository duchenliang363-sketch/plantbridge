export type FieldValue = string | "on_request";

export type InclusionStatus = "included" | "not_included" | "on_request";

export type EquipmentCategory =
  | "batching-plant"
  | "soil-plant"
  | "mixer";

export type EquipmentPhoto = {
  src: string;
  alt: string;
};

export type SpecRow = {
  label: string;
  value: FieldValue;
};

export type Equipment = {
  id: string;
  slug: string;
  path: string;
  category: EquipmentCategory;
  categoryLabel: string;
  categoryPath: string;
  title: string;
  cardTitle: string;
  seoTitle: string;
  seoDescription: string;
  productName: string;
  model: string;
  condition: "Used";
  location: string;
  availability: "Available";
  quickSpecs: SpecRow[];
  overview: SpecRow[];
  photos: EquipmentPhoto[];
  machineCondition: SpecRow[];
  included: { item: string; status: InclusionStatus; note?: string }[];
  whatsappInterestMessage: string;
};

const onRequest = "on_request" as const;

function publicAsset(path: `/${string}`): string {
  return `${process.env.PAGES_BASE_PATH ?? ""}${path}`;
}

export const categories = [
  {
    key: "batching-plant" as const,
    title: "Used Concrete Batching Plants",
    href: "/used-concrete-batching-plants/",
    intro:
      "Actual used concrete batching plants available from China. Details are listed only when they are known.",
  },
  {
    key: "soil-plant" as const,
    title: "Used Stabilized Soil Mixing Plants",
    href: "/used-stabilized-soil-mixing-plants/",
    intro:
      "Actual used stabilized soil mixing plants available from China. Unknown data is not invented.",
  },
  {
    key: "mixer" as const,
    title: "Used Concrete Mixers",
    href: "/used-concrete-mixers/",
    intro:
      "Used twin-shaft concrete mixers. Size classes are shown below. Only confirmed machines are listed for sale.",
  },
] as const;

export const mixerSizeLayout = ["2000", "3000", "4000", "4500"] as const;

const hzs120: Equipment = {
  id: "PB-HZS120-001",
  slug: "used-hzs120-001",
  path: "/used-concrete-batching-plants/used-hzs120-001",
  category: "batching-plant",
  categoryLabel: "Used Concrete Batching Plants",
  categoryPath: "/used-concrete-batching-plants/",
  title: "Used HZS120 Concrete Batching Plant for Sale",
  cardTitle: "Used HZS120 Concrete Batching Plant",
  seoTitle: "Used HZS120 Concrete Batching Plant for Sale | PlantBridge",
  seoDescription:
    "Used HZS120 concrete batching plant available in China. View actual machine photos and equipment details. Contact PlantBridge for price, inspection video and shipping information.",
  productName: "Used HZS120 Concrete Batching Plant",
  model: "HZS120",
  condition: "Used",
  location: "China",
  availability: "Available",
  quickSpecs: [
    { label: "Model", value: "HZS120" },
    { label: "Rated Capacity", value: "120 m³/h" },
    { label: "Year", value: "2019" },
    { label: "Mixer Brand", value: "Zoomlion" },
    { label: "Mixer Model", value: "JS2000" },
    { label: "Condition", value: "Used" },
    { label: "Location", value: "China" },
    { label: "Availability", value: "Available" },
  ],
  overview: [
    { label: "Model", value: "HZS120" },
    { label: "Rated Capacity", value: "120 m³/h" },
    { label: "Year", value: "2019" },
    { label: "Mixer Brand", value: "Zoomlion" },
    { label: "Mixer Model", value: "JS2000" },
    { label: "Aggregate Bins", value: "4" },
    { label: "Control System", value: "Zoomlion" },
    {
      label: "Cement Silos",
      value:
        "Not included. Panel-type bolted cement silos can be supplied separately.",
    },
    { label: "Screw Conveyors", value: "4" },
    { label: "Operating Status", value: "Dismantled" },
    { label: "Location", value: "China" },
    { label: "Condition", value: "Used" },
  ],
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
  machineCondition: [
    { label: "Current operating status", value: "Dismantled" },
    { label: "Known condition", value: onRequest },
    { label: "Known issues", value: onRequest },
    { label: "Recommended maintenance", value: onRequest },
    { label: "Inspection status", value: onRequest },
  ],
  included: [
    { item: "Mixer", status: "included" },
    { item: "Aggregate batching system", status: "included" },
    { item: "Aggregate conveyor", status: onRequest },
    { item: "Weighing system", status: onRequest },
    { item: "Control system", status: "included" },
    { item: "Control room", status: onRequest },
    { item: "Air system", status: onRequest },
    {
      item: "Cement silos",
      status: "not_included",
      note: "Panel-type (bolted) cement silos can be supplied separately if required.",
    },
    { item: "Screw conveyors", status: "included" },
    { item: "Water system", status: onRequest },
    { item: "Additive system", status: onRequest },
  ],
  whatsappInterestMessage: `Hello PlantBridge,
I'm interested in the used HZS120 concrete batching plant (PB-HZS120-001).
My country:
Please send me the price and more machine details.`,
};

const lutong800: Equipment = {
  id: "PB-LUTONG800-001",
  slug: "used-beifang-lutong-800-2022",
  path: "/used-stabilized-soil-mixing-plants/used-beifang-lutong-800-2022",
  category: "soil-plant",
  categoryLabel: "Used Stabilized Soil Mixing Plants",
  categoryPath: "/used-stabilized-soil-mixing-plants/",
  title: "2022 Beifang Lutong 800 Stabilized Soil Mixing Plant",
  cardTitle: "2022 Beifang Lutong 800 Stabilized Soil Mixing Plant",
  seoTitle: "Used Stabilized Soil Mixing Plant for Sale | Beifang Lutong 800",
  seoDescription:
    "Used 2022 Beifang Lutong 800 stabilized soil mixing plant, twin mixer configuration. Actual equipment photos. Contact PlantBridge for price, video and inspection.",
  productName: "2022 Beifang Lutong 800 Stabilized Soil Mixing Plant",
  model: "800",
  condition: "Used",
  location: "China",
  availability: "Available",
  quickSpecs: [
    { label: "Brand", value: "Beifang Lutong" },
    { label: "Year", value: "2022" },
    { label: "Capacity class", value: "800" },
    { label: "Configuration", value: "Twin Mixer" },
    { label: "Condition", value: "Used" },
    { label: "Location", value: "China" },
    { label: "Availability", value: "Available" },
  ],
  overview: [
    { label: "Brand", value: "Beifang Lutong" },
    { label: "Year", value: "2022" },
    { label: "Capacity class", value: "800" },
    { label: "Configuration", value: "Twin Mixer" },
    { label: "Condition", value: "Used" },
    { label: "Location", value: "China" },
    { label: "Hours", value: onRequest },
    { label: "Exact output", value: onRequest },
  ],
  photos: [
    {
      src: publicAsset("/plants/pb-lutong800-001/01-twin-mixers.jpg"),
      alt: "Actual twin mixers of used 2022 Beifang Lutong 800 stabilized soil mixing plant",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/02-mixer-interior.jpg"),
      alt: "Actual mixer interior paddles and lining of the Beifang Lutong 800 plant for sale",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/03-aggregate-bins.jpg"),
      alt: "Actual aggregate bins of used Beifang Lutong 800 stabilized soil mixing plant",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/04-conveyors-and-mixer.jpg"),
      alt: "Actual conveyors and mixer of used Beifang Lutong 800 plant",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/05-control-room.jpg"),
      alt: "Actual control room of used Beifang Lutong 800 stabilized soil mixing plant",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/06-screw-conveyors.jpg"),
      alt: "Actual screw conveyors photographed with the Beifang Lutong 800 equipment",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/07-hopper.jpg"),
      alt: "Actual hopper photographed with the Beifang Lutong 800 equipment",
    },
  ],
  machineCondition: [
    { label: "Current operating status", value: onRequest },
    { label: "Known condition", value: "Used" },
    { label: "Known issues", value: onRequest },
    { label: "Recommended maintenance", value: onRequest },
    { label: "Inspection status", value: onRequest },
  ],
  included: [
    { item: "Twin mixer", status: "included" },
    { item: "Aggregate bins", status: onRequest },
    { item: "Conveyors", status: onRequest },
    { item: "Control room", status: onRequest },
    { item: "Screw conveyors", status: onRequest },
    { item: "Hopper", status: onRequest },
    { item: "Other components", status: onRequest },
  ],
  whatsappInterestMessage: `Hello PlantBridge,
I'm interested in the 2022 Beifang Lutong 800 Stabilized Soil Mixing Plant (PB-LUTONG800-001).
My country:
Please send me the price and more machine details.`,
};

const xcmg800: Equipment = {
  id: "PB-XCMG800-001",
  slug: "used-xcmg-800-2020",
  path: "/used-stabilized-soil-mixing-plants/used-xcmg-800-2020",
  category: "soil-plant",
  categoryLabel: "Used Stabilized Soil Mixing Plants",
  categoryPath: "/used-stabilized-soil-mixing-plants/",
  title: "2020 XCMG 800 Stabilized Soil Mixing Plant",
  cardTitle: "2020 XCMG 800 Stabilized Soil Mixing Plant",
  seoTitle: "Used XCMG Stabilized Soil Mixing Plant for Sale | 800",
  seoDescription:
    "Used 2020 XCMG 800 stabilized soil mixing plant, single mixer configuration. Contact PlantBridge for actual photos, price, video and inspection.",
  productName: "2020 XCMG 800 Stabilized Soil Mixing Plant",
  model: "800",
  condition: "Used",
  location: "China",
  availability: "Available",
  quickSpecs: [
    { label: "Brand", value: "XCMG" },
    { label: "Year", value: "2020" },
    { label: "Capacity class", value: "800" },
    { label: "Configuration", value: "Single Mixer" },
    { label: "Condition", value: "Used" },
    { label: "Location", value: "China" },
    { label: "Availability", value: "Available" },
  ],
  overview: [
    { label: "Brand", value: "XCMG" },
    { label: "Year", value: "2020" },
    { label: "Capacity class", value: "800" },
    { label: "Configuration", value: "Single Mixer" },
    { label: "Condition", value: "Used" },
    { label: "Location", value: "China" },
    { label: "Hours", value: onRequest },
    { label: "Exact output", value: onRequest },
  ],
  photos: [],
  machineCondition: [
    { label: "Current operating status", value: onRequest },
    { label: "Known condition", value: "Used" },
    { label: "Known issues", value: onRequest },
    { label: "Recommended maintenance", value: onRequest },
    { label: "Inspection status", value: onRequest },
  ],
  included: [
    { item: "Single mixer", status: "included" },
    { item: "Other components", status: onRequest },
  ],
  whatsappInterestMessage: `Hello PlantBridge,
I'm interested in the 2020 XCMG 800 Stabilized Soil Mixing Plant (PB-XCMG800-001).
My country:
Please send me the price, photos and more machine details.`,
};

const sicoma3000: Equipment = {
  id: "PB-SICOMA-MAO3000-001",
  slug: "used-sicoma-mao-4500-3000-2019",
  path: "/used-concrete-mixers/used-sicoma-mao-4500-3000-2019",
  category: "mixer",
  categoryLabel: "Used Concrete Mixers",
  categoryPath: "/used-concrete-mixers/",
  title: "2019 SICOMA MAO 4500/3000 Used Twin-Shaft Concrete Mixer – 3m³",
  cardTitle: "2019 SICOMA MAO 4500/3000 Twin-Shaft Mixer – 3m³",
  seoTitle: "Used SICOMA MAO 4500/3000 Mixer | 3m³ Twin-Shaft",
  seoDescription:
    "Used 2019 SICOMA MAO 4500/3000 twin-shaft concrete mixer, 3000 L / 3 m³ class. Contact PlantBridge for price, nameplate photos, interior photos, video and inspection.",
  productName: "2019 SICOMA MAO 4500/3000 Used Twin-Shaft Concrete Mixer – 3m³",
  model: "MAO 4500/3000",
  condition: "Used",
  location: "China",
  availability: "Available",
  quickSpecs: [
    { label: "Brand", value: "SICOMA" },
    { label: "Model", value: "MAO 4500/3000" },
    { label: "Year", value: "2019/03" },
    { label: "Nominal output class", value: "3000 L / 3 m³" },
    { label: "Type", value: "Twin-Shaft Concrete Mixer" },
    { label: "Condition", value: "Used" },
    { label: "Location", value: "China" },
    { label: "Availability", value: "Available" },
  ],
  overview: [
    { label: "Brand", value: "SICOMA" },
    { label: "Model", value: "MAO 4500/3000" },
    { label: "Year", value: "2019/03" },
    { label: "Nominal output class", value: "3000 L / 3 m³" },
    { label: "Type", value: "Twin-Shaft Concrete Mixer" },
    { label: "Condition", value: "Used" },
    { label: "Hours", value: onRequest },
    { label: "Wear of liners and arms", value: onRequest },
  ],
  photos: [],
  machineCondition: [
    { label: "Current operating status", value: onRequest },
    { label: "Known condition", value: "Used" },
    { label: "Known issues", value: onRequest },
    { label: "Recommended maintenance", value: onRequest },
    { label: "Inspection status", value: onRequest },
  ],
  included: [
    { item: "Twin-shaft mixer body", status: "included" },
    { item: "Motors / gearbox", status: onRequest },
    { item: "Liners and mixing arms", status: onRequest },
    { item: "Other accessories", status: onRequest },
  ],
  whatsappInterestMessage: `Hello PlantBridge,
I'm interested in the 2019 SICOMA MAO 4500/3000 used twin-shaft concrete mixer (3m³), PB-SICOMA-MAO3000-001.
My country:
Please send me the price, nameplate photo, interior photos and more machine details.`,
};

const equipment: Equipment[] = [hzs120, lutong800, xcmg800, sicoma3000];

export function getAllEquipment(): Equipment[] {
  return equipment;
}

export function getEquipmentByCategory(category: EquipmentCategory): Equipment[] {
  return equipment.filter((item) => item.category === category);
}

export function getEquipmentBySlug(slug: string): Equipment | undefined {
  return equipment.find((item) => item.slug === slug);
}

export function getEquipmentByPathPrefix(prefix: string): Equipment[] {
  return equipment.filter((item) => item.path.startsWith(prefix));
}

export function displayField(value: FieldValue): string {
  return value === "on_request"
    ? "Available on request / Contact us for details"
    : value;
}

export function displayInclusion(status: InclusionStatus): string {
  if (status === "included") return "Included";
  if (status === "not_included") return "Not included";
  return "Available on request / Contact us for details";
}
