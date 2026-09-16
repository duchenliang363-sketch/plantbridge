export type FieldValue = string | "on_request";

export type InclusionStatus = "included" | "not_included" | "on_request";

export type EquipmentCategory =
  | "batching-plant"
  | "soil-plant"
  | "mixer";

export type EquipmentPhoto = {
  src: string;
  alt: string;
  caption?: string;
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
  mixerSize?: "2000" | "3000" | "4000" | "4500";
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
      src: publicAsset("/plants/pb-lutong800-001/lutong-800-2022-twin-mixers.jpg"),
      alt: "Actual twin mixers of used 2022 Beifang Lutong 800 stabilized soil mixing plant",
      caption: "Actual Machine Photos",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/lutong-800-2022-aggregate-bins-01.jpg"),
      alt: "Actual aggregate bins of used Beifang Lutong 800 stabilized soil mixing plant",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/lutong-800-2022-aggregate-bins-02.jpg"),
      alt: "Actual aggregate bins, second view, of used Beifang Lutong 800 plant",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/lutong-800-2022-belt-conveyor.jpg"),
      alt: "Actual belt conveyor of used Beifang Lutong 800 plant",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/lutong-800-2022-screw-conveyors.jpg"),
      alt: "Actual screw conveyors photographed with the Beifang Lutong 800 equipment",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/lutong-800-2022-hopper.jpg"),
      alt: "Actual hopper photographed with the Beifang Lutong 800 equipment",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-lutong800-001/lutong-800-2022-mixer-interior.jpg"),
      alt: "Actual mixer interior paddles and lining of the Beifang Lutong 800 plant for sale",
      caption: "Mixer Interior",
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
  photos: [
    {
      src: publicAsset("/plants/pb-xcmg800-001/xcmg-800-2020-aggregate-bin.jpg"),
      alt: "Actual aggregate bins of used 2020 XCMG 800 stabilized soil mixing plant",
      caption: "Actual Machine Photos",
    },
    {
      src: publicAsset("/plants/pb-xcmg800-001/xcmg-800-2020-feeding-system.jpg"),
      alt: "Actual feeding and bin system of used 2020 XCMG 800 plant",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-xcmg800-001/xcmg-800-2020-conveyor.jpg"),
      alt: "Actual conveyor of used 2020 XCMG 800 stabilized soil mixing plant",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-xcmg800-001/xcmg-800-2020-drive-system.jpg"),
      alt: "Actual mixer drive system of used 2020 XCMG 800 plant",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-xcmg800-001/xcmg-800-2020-feeder-drive.jpg"),
      alt: "Actual feeder drive of used 2020 XCMG 800 plant",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-xcmg800-001/xcmg-800-2020-control-panel.jpg"),
      alt: "Actual XCMG XCM series stabilized soil plant control panel",
      caption: "Machine Details",
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
    {
      label: "Made / assembled by",
      value: "SICOMA Zhuhai",
    },
    { label: "Machine no.", value: "190107230 MYCR" },
    { label: "Condition", value: "Used" },
    { label: "Hours", value: onRequest },
    { label: "Wear of liners and arms", value: onRequest },
  ],
  photos: [
    {
      src: publicAsset("/plants/pb-sicoma-mao3000-001/sicoma-mao-4500-3000-2019-front.jpg"),
      alt: "Actual SICOMA MAO 4500/3000 twin-shaft mixer body, serial 190107230 MYCR",
      caption: "Actual Machine Photos",
    },
    {
      src: publicAsset("/plants/pb-sicoma-mao3000-001/sicoma-mao-4500-3000-2019-side-02.jpg"),
      alt: "Actual SICOMA MAO 4500/3000 mixer three-quarter view, serial 190107230 MYCR",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma-mao3000-001/sicoma-mao-4500-3000-2019-side-01.jpg"),
      alt: "Actual side structure and lubrication system of SICOMA MAO 4500/3000 mixer 190107230 MYCR",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma-mao3000-001/sicoma-mao-4500-3000-2019-mixing-chamber.jpg"),
      alt: "Actual mixer interior shafts, arms and liners of SICOMA MAO 4500/3000 190107230 MYCR",
      caption: "Mixer Interior",
    },
    {
      src: publicAsset("/plants/pb-sicoma-mao3000-001/sicoma-mao-4500-3000-2019-nameplate.jpg"),
      alt: "Nameplate of SICOMA MAO 4500/3000 mixer, 2019/03, machine no. 190107230 MYCR",
      caption: "Nameplate",
    },
  ],
  mixerSize: "3000",
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

const mixerLabel = "Used Concrete Mixers";
const mixerPath = "/used-concrete-mixers/";

const sicoma2000y2020: Equipment = {
  id: "PB-SICOMA2000-2020-01",
  slug: "used-sicoma-mao-3000-2000-2020",
  path: "/used-concrete-mixers/used-sicoma-mao-3000-2000-2020",
  category: "mixer",
  categoryLabel: mixerLabel,
  categoryPath: mixerPath,
  title: "Used SICOMA MAO 3000/2000 Concrete Mixer – 2000L – 2020",
  cardTitle: "Used SICOMA MAO 3000/2000 Concrete Mixer – 2000L – 2020",
  seoTitle: "Used SICOMA MAO 3000/2000 Mixer | 2000L | 2020",
  seoDescription:
    "Used 2020 SICOMA MAO 3000/2000 twin-shaft concrete mixer, 2000 L. Actual machine and nameplate photos. Contact PlantBridge for price, video and inspection.",
  productName: "Used SICOMA MAO 3000/2000 Concrete Mixer – 2000L – 2020",
  model: "MAO 3000/2000",
  condition: "Used",
  location: "China",
  availability: "Available",
  mixerSize: "2000",
  quickSpecs: [
    { label: "Brand", value: "SICOMA" },
    { label: "Model", value: "MAO 3000/2000 SDYCO" },
    { label: "Year", value: "2020/03" },
    { label: "Output capacity", value: "2000 L" },
    { label: "Type", value: "Twin-Shaft Concrete Mixer" },
    { label: "Condition", value: "Used" },
    { label: "Location", value: "China" },
    { label: "Availability", value: "Available" },
  ],
  overview: [
    { label: "Brand", value: "SICOMA" },
    { label: "Model", value: "MAO 3000/2000 SDYCO" },
    { label: "Year", value: "2020/03" },
    { label: "Output capacity", value: "2000 L" },
    { label: "Machine no.", value: "200201520 MYCR" },
    { label: "Type", value: "Twin-Shaft Concrete Mixer" },
    { label: "Hours", value: onRequest },
    { label: "Wear of liners and arms", value: onRequest },
  ],
  photos: [
    {
      src: publicAsset("/plants/pb-sicoma2000-2020-01/sicoma-mao-3000-2000-2020-front.jpg"),
      alt: "Actual 2020 SICOMA MAO 3000/2000 mixer, machine no. 200201520 MYCR",
      caption: "Actual Machine Photos",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2020-01/sicoma-mao-3000-2000-2020-side-01.jpg"),
      alt: "Actual 2020 SICOMA MAO 3000/2000 mixer side view",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2020-01/sicoma-mao-3000-2000-2020-side-02.jpg"),
      alt: "Actual 2020 SICOMA MAO 3000/2000 mixer additional side view",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2020-01/sicoma-mao-3000-2000-2020-drive.jpg"),
      alt: "Actual drive of 2020 SICOMA MAO 3000/2000 mixer",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2020-01/sicoma-mao-3000-2000-2020-detail-01.jpg"),
      alt: "Actual detail of 2020 SICOMA MAO 3000/2000 mixer",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2020-01/sicoma-mao-3000-2000-2020-detail-02.jpg"),
      alt: "Actual additional detail of 2020 SICOMA MAO 3000/2000 mixer",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2020-01/sicoma-mao-3000-2000-2020-mixing-chamber.jpg"),
      alt: "Actual mixing chamber of 2020 SICOMA MAO 3000/2000 mixer",
      caption: "Mixer Interior",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2020-01/sicoma-mao-3000-2000-2020-detail-03.jpg"),
      alt: "Actual additional machine detail of 2020 SICOMA MAO 3000/2000 mixer",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2020-01/sicoma-mao-3000-2000-2020-nameplate.jpg"),
      alt: "Nameplate of SICOMA MAO 3000/2000 mixer, 2020/03, machine no. 200201520 MYCR",
      caption: "Nameplate",
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
    { item: "Twin-shaft mixer body", status: "included" },
    { item: "Other accessories", status: onRequest },
  ],
  whatsappInterestMessage: `Hello PlantBridge,
I'm interested in the 2020 SICOMA MAO 3000/2000 used concrete mixer (2000L), PB-SICOMA2000-2020-01.
My country:
Please send me the price and more machine details.`,
};

const sicoma2000y2024: Equipment = {
  id: "PB-SICOMA2000-2024-01",
  slug: "used-sicoma-mao-3000-2000-2024",
  path: "/used-concrete-mixers/used-sicoma-mao-3000-2000-2024",
  category: "mixer",
  categoryLabel: mixerLabel,
  categoryPath: mixerPath,
  title: "Used SICOMA MAO 3000/2000 Concrete Mixer – 2000L – 2024",
  cardTitle: "Used SICOMA MAO 3000/2000 Concrete Mixer – 2000L – 2024",
  seoTitle: "Used SICOMA MAO 3000/2000 Mixer | 2000L | 2024",
  seoDescription:
    "Used 2024 SICOMA MAO 3000/2000 twin-shaft concrete mixer, 2000 L. Actual machine and nameplate photos. Contact PlantBridge for price, video and inspection.",
  productName: "Used SICOMA MAO 3000/2000 Concrete Mixer – 2000L – 2024",
  model: "MAO 3000/2000",
  condition: "Used",
  location: "China",
  availability: "Available",
  mixerSize: "2000",
  quickSpecs: [
    { label: "Brand", value: "SICOMA" },
    { label: "Model", value: "MAO 3000/2000 SDYCO" },
    { label: "Year", value: "2024/05" },
    { label: "Output capacity", value: "2000 L" },
    { label: "Type", value: "Twin-Shaft Concrete Mixer" },
    { label: "Condition", value: "Used" },
    { label: "Location", value: "China" },
    { label: "Availability", value: "Available" },
  ],
  overview: [
    { label: "Brand", value: "SICOMA" },
    { label: "Model", value: "MAO 3000/2000 SDYCO" },
    { label: "Year", value: "2024/05" },
    { label: "Output capacity", value: "2000 L" },
    { label: "Machine no.", value: "240105200 MYCR" },
    { label: "Type", value: "Twin-Shaft Concrete Mixer" },
    { label: "Hours", value: onRequest },
    { label: "Wear of liners and arms", value: onRequest },
  ],
  photos: [
    {
      src: publicAsset("/plants/pb-sicoma2000-2024-01/sicoma-mao-3000-2000-2024-front.jpg"),
      alt: "Actual 2024 SICOMA MAO 3000/2000 mixer, machine no. 240105200 MYCR",
      caption: "Actual Machine Photos",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2024-01/sicoma-mao-3000-2000-2024-side-01.jpg"),
      alt: "Actual 2024 SICOMA MAO 3000/2000 mixer side view",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2024-01/sicoma-mao-3000-2000-2024-side-02.jpg"),
      alt: "Actual 2024 SICOMA MAO 3000/2000 mixer additional side view",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2024-01/sicoma-mao-3000-2000-2024-detail.jpg"),
      alt: "Actual detail of 2024 SICOMA MAO 3000/2000 mixer",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma2000-2024-01/sicoma-mao-3000-2000-2024-nameplate.jpg"),
      alt: "Nameplate of SICOMA MAO 3000/2000 mixer, 2024/05, machine no. 240105200 MYCR",
      caption: "Nameplate",
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
    { item: "Twin-shaft mixer body", status: "included" },
    { item: "Other accessories", status: onRequest },
  ],
  whatsappInterestMessage: `Hello PlantBridge,
I'm interested in the 2024 SICOMA MAO 3000/2000 used concrete mixer (2000L), PB-SICOMA2000-2024-01.
My country:
Please send me the price and more machine details.`,
};

const sicoma4500y2018: Equipment = {
  id: "PB-SICOMA4500-2018-01",
  slug: "used-sicoma-mao-6000-4500-2018",
  path: "/used-concrete-mixers/used-sicoma-mao-6000-4500-2018",
  category: "mixer",
  categoryLabel: mixerLabel,
  categoryPath: mixerPath,
  title: "Used SICOMA MAO 6000/4500 Concrete Mixer – 4500L – 2018",
  cardTitle: "Used SICOMA MAO 6000/4500 Concrete Mixer – 4500L – 2018",
  seoTitle: "Used SICOMA MAO 6000/4500 Mixer | 4500L | 2018",
  seoDescription:
    "Used 2018 SICOMA MAO 6000/4500 twin-shaft concrete mixer, 4500 L. Actual machine and nameplate photos. Contact PlantBridge for price, video and inspection.",
  productName: "Used SICOMA MAO 6000/4500 Concrete Mixer – 4500L – 2018",
  model: "MAO 6000/4500",
  condition: "Used",
  location: "China",
  availability: "Available",
  mixerSize: "4500",
  quickSpecs: [
    { label: "Brand", value: "SICOMA" },
    { label: "Model", value: "MAO 6000/4500 SDYCO" },
    { label: "Year", value: "2018/01" },
    { label: "Output capacity", value: "4500 L" },
    { label: "Type", value: "Twin-Shaft Concrete Mixer" },
    { label: "Condition", value: "Used" },
    { label: "Location", value: "China" },
    { label: "Availability", value: "Available" },
  ],
  overview: [
    { label: "Brand", value: "SICOMA" },
    { label: "Model", value: "MAO 6000/4500 SDYCO" },
    { label: "Year", value: "2018/01" },
    { label: "Output capacity", value: "4500 L" },
    { label: "Machine no.", value: "180100245Y" },
    { label: "Type", value: "Twin-Shaft Concrete Mixer" },
    { label: "Hours", value: onRequest },
    { label: "Wear of liners and arms", value: onRequest },
  ],
  photos: [
    {
      src: publicAsset("/plants/pb-sicoma4500-2018-01/sicoma-mao-6000-4500-2018-front.jpg"),
      alt: "Actual 2018 SICOMA MAO 6000/4500 mixer, machine no. 180100245Y",
      caption: "Actual Machine Photos",
    },
    {
      src: publicAsset("/plants/pb-sicoma4500-2018-01/sicoma-mao-6000-4500-2018-side-01.jpg"),
      alt: "Actual 2018 SICOMA MAO 6000/4500 mixer side view",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma4500-2018-01/sicoma-mao-6000-4500-2018-side-02.jpg"),
      alt: "Actual 2018 SICOMA MAO 6000/4500 mixer additional side view",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma4500-2018-01/sicoma-mao-6000-4500-2018-detail.jpg"),
      alt: "Actual detail of 2018 SICOMA MAO 6000/4500 mixer",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma4500-2018-01/sicoma-mao-6000-4500-2018-mixing-chamber.jpg"),
      alt: "Actual mixing chamber of 2018 SICOMA MAO 6000/4500 mixer",
      caption: "Mixer Interior",
    },
    {
      src: publicAsset("/plants/pb-sicoma4500-2018-01/sicoma-mao-6000-4500-2018-nameplate.jpg"),
      alt: "Nameplate of SICOMA MAO 6000/4500 mixer, 2018/01, machine no. 180100245Y",
      caption: "Nameplate",
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
    { item: "Twin-shaft mixer body", status: "included" },
    { item: "Other accessories", status: onRequest },
  ],
  whatsappInterestMessage: `Hello PlantBridge,
I'm interested in the 2018 SICOMA MAO 6000/4500 used concrete mixer (4500L), PB-SICOMA4500-2018-01.
My country:
Please send me the price and more machine details.`,
};

const js4000c: Equipment = {
  id: "PB-JS4000C-2026-01",
  slug: "used-js4000c-2026",
  path: "/used-concrete-mixers/used-js4000c-2026",
  category: "mixer",
  categoryLabel: mixerLabel,
  categoryPath: mixerPath,
  title: "Used JS4000C Twin-Shaft Concrete Mixer – 4000L",
  cardTitle: "Used JS4000C Twin-Shaft Concrete Mixer – 4000L",
  seoTitle: "Used JS4000C Twin-Shaft Concrete Mixer | 4000L",
  seoDescription:
    "Used JS4000C twin-shaft concrete mixer, 4000 L discharge, 2026/02. Actual machine and nameplate photos. Contact PlantBridge for price, video and inspection.",
  productName: "Used JS4000C Twin-Shaft Concrete Mixer – 4000L",
  model: "JS4000C",
  condition: "Used",
  location: "China",
  availability: "Available",
  mixerSize: "4000",
  quickSpecs: [
    { label: "Model", value: "JS4000C" },
    { label: "Year", value: "2026/02" },
    { label: "Output capacity", value: "4000 L" },
    { label: "Charging capacity", value: "6000 L" },
    { label: "Mixing rated power", value: "65 × 2 kW" },
    { label: "Max aggregate size", value: "80 mm" },
    { label: "Machine mass", value: "9656 kg" },
    { label: "Condition", value: "Used" },
  ],
  overview: [
    { label: "Model", value: "JS4000C" },
    { label: "Year", value: "2026/02" },
    { label: "Output capacity", value: "4000 L" },
    { label: "Charging capacity", value: "6000 L" },
    { label: "Mixing rated power", value: "65 × 2 kW" },
    { label: "Max aggregate size", value: "80 mm" },
    { label: "Machine mass", value: "9656 kg" },
    { label: "Brand", value: onRequest },
    { label: "Hours", value: onRequest },
  ],
  photos: [
    {
      src: publicAsset("/plants/pb-js4000c-2026-01/js4000c-2026-front.jpg"),
      alt: "Actual JS4000C twin-shaft concrete mixer, 4000 L, 2026/02",
      caption: "Actual Machine Photos",
    },
    {
      src: publicAsset("/plants/pb-js4000c-2026-01/js4000c-2026-side-01.jpg"),
      alt: "Actual JS4000C mixer side view",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-js4000c-2026-01/js4000c-2026-side-02.jpg"),
      alt: "Actual JS4000C mixer additional side view",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-js4000c-2026-01/js4000c-2026-detail.jpg"),
      alt: "Actual JS4000C mixer detail",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-js4000c-2026-01/js4000c-2026-mixing-chamber.jpg"),
      alt: "Actual JS4000C mixing chamber",
      caption: "Mixer Interior",
    },
    {
      src: publicAsset("/plants/pb-js4000c-2026-01/js4000c-2026-nameplate.jpg"),
      alt: "Nameplate of JS4000C mixer, 4000 L, 2026/02",
      caption: "Nameplate",
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
    { item: "Twin-shaft mixer body", status: "included" },
    { item: "Other accessories", status: onRequest },
  ],
  whatsappInterestMessage: `Hello PlantBridge,
I'm interested in the used JS4000C twin-shaft concrete mixer (4000L), PB-JS4000C-2026-01.
My country:
Please send me the price and more machine details.`,
};

const sicoma3000y2020: Equipment = {
  id: "PB-SICOMA3000-2020-01",
  slug: "used-sicoma-mao-4500-3000-2020",
  path: "/used-concrete-mixers/used-sicoma-mao-4500-3000-2020",
  category: "mixer",
  categoryLabel: mixerLabel,
  categoryPath: mixerPath,
  title: "Used SICOMA MAO 4500/3000 Concrete Mixer – 3000L – 2020",
  cardTitle: "Used SICOMA MAO 4500/3000 Concrete Mixer – 3000L – 2020",
  seoTitle: "Used SICOMA MAO 4500/3000 Mixer | 3000L | 2020",
  seoDescription:
    "Used 2020 SICOMA MAO 4500/3000 twin-shaft concrete mixer, 3000 L. Actual machine and nameplate photos. Contact PlantBridge for price, video and inspection.",
  productName: "Used SICOMA MAO 4500/3000 Concrete Mixer – 3000L – 2020",
  model: "MAO 4500/3000",
  condition: "Used",
  location: "China",
  availability: "Available",
  mixerSize: "3000",
  quickSpecs: [
    { label: "Brand", value: "SICOMA" },
    { label: "Model", value: "MAO 4500/3000 SDYCO" },
    { label: "Year", value: "2020/06" },
    { label: "Output capacity", value: "3000 L" },
    { label: "Type", value: "Twin-Shaft Concrete Mixer" },
    { label: "Condition", value: "Used" },
    { label: "Location", value: "China" },
    { label: "Availability", value: "Available" },
  ],
  overview: [
    { label: "Brand", value: "SICOMA" },
    { label: "Model", value: "MAO 4500/3000 SDYCO" },
    { label: "Year", value: "2020/06" },
    { label: "Output capacity", value: "3000 L" },
    { label: "Machine no.", value: "200601330 MYCR" },
    { label: "Type", value: "Twin-Shaft Concrete Mixer" },
    { label: "Hours", value: onRequest },
    { label: "Wear of liners and arms", value: onRequest },
  ],
  photos: [
    {
      src: publicAsset("/plants/pb-sicoma3000-2020-01/sicoma-mao-4500-3000-2020-front.jpg"),
      alt: "Actual 2020 SICOMA MAO 4500/3000 mixer, machine no. 200601330 MYCR",
      caption: "Actual Machine Photos",
    },
    {
      src: publicAsset("/plants/pb-sicoma3000-2020-01/sicoma-mao-4500-3000-2020-side-01.jpg"),
      alt: "Actual 2020 SICOMA MAO 4500/3000 mixer side view",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma3000-2020-01/sicoma-mao-4500-3000-2020-side-02.jpg"),
      alt: "Actual 2020 SICOMA MAO 4500/3000 mixer additional side view",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma3000-2020-01/sicoma-mao-4500-3000-2020-detail-01.jpg"),
      alt: "Actual related site photo with 2020 SICOMA MAO 4500/3000 mixer group",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma3000-2020-01/sicoma-mao-4500-3000-2020-detail-02.jpg"),
      alt: "Actual additional site photo in 2020 SICOMA MAO 4500/3000 mixer group",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma3000-2020-01/sicoma-mao-4500-3000-2020-detail-03.jpg"),
      alt: "Actual additional site photo in 2020 SICOMA MAO 4500/3000 mixer group",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma3000-2020-01/sicoma-mao-4500-3000-2020-detail-04.jpg"),
      alt: "Actual additional site photo in 2020 SICOMA MAO 4500/3000 mixer group",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-sicoma3000-2020-01/sicoma-mao-4500-3000-2020-nameplate.jpg"),
      alt: "Nameplate of SICOMA MAO 4500/3000 mixer, 2020/06, machine no. 200601330 MYCR",
      caption: "Nameplate",
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
    { item: "Twin-shaft mixer body", status: "included" },
    { item: "Other accessories", status: onRequest },
  ],
  whatsappInterestMessage: `Hello PlantBridge,
I'm interested in the 2020 SICOMA MAO 4500/3000 used concrete mixer (3000L), PB-SICOMA3000-2020-01.
My country:
Please send me the price and more machine details.`,
};

const zoomlionEquipment: Equipment = {
  id: "PB-ZOOMLION-01",
  slug: "used-zoomlion-concrete-equipment-01",
  path: "/used-concrete-batching-plants/used-zoomlion-concrete-equipment-01",
  category: "batching-plant",
  categoryLabel: "Used Concrete Batching Plants",
  categoryPath: "/used-concrete-batching-plants/",
  title: "ZOOMLION Used Concrete Equipment",
  cardTitle: "ZOOMLION Used Concrete Equipment",
  seoTitle: "ZOOMLION Used Concrete Equipment | PlantBridge",
  seoDescription:
    "ZOOMLION used concrete equipment with actual machine photos. Model, year and capacity available on request. Contact PlantBridge for details.",
  productName: "ZOOMLION Used Concrete Equipment",
  model: "Available on request",
  condition: "Used",
  location: "China",
  availability: "Available",
  quickSpecs: [
    { label: "Brand", value: "ZOOMLION" },
    { label: "Model", value: onRequest },
    { label: "Year", value: onRequest },
    { label: "Capacity", value: onRequest },
    { label: "Condition", value: "Used" },
    { label: "Location", value: "China" },
    { label: "Availability", value: "Available" },
  ],
  overview: [
    { label: "Brand", value: "ZOOMLION" },
    { label: "Model", value: onRequest },
    { label: "Year", value: onRequest },
    { label: "Capacity", value: onRequest },
    { label: "Hours", value: onRequest },
    { label: "Condition", value: "Used" },
  ],
  photos: [
    {
      src: publicAsset("/plants/pb-zoomlion-01/zoomlion-equipment-01.jpg"),
      alt: "Actual ZOOMLION used concrete equipment photo 1",
      caption: "Actual Machine Photos",
    },
    {
      src: publicAsset("/plants/pb-zoomlion-01/zoomlion-equipment-02.jpg"),
      alt: "Actual ZOOMLION used concrete equipment photo 2",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-zoomlion-01/zoomlion-equipment-03.jpg"),
      alt: "Actual ZOOMLION used concrete equipment photo 3",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-zoomlion-01/zoomlion-equipment-04.jpg"),
      alt: "Actual ZOOMLION used concrete equipment photo 4",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-zoomlion-01/zoomlion-equipment-05.jpg"),
      alt: "Actual ZOOMLION used concrete equipment photo 5",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-zoomlion-01/zoomlion-equipment-06.jpg"),
      alt: "Actual ZOOMLION used concrete equipment photo 6",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-zoomlion-01/zoomlion-equipment-07.jpg"),
      alt: "Actual ZOOMLION used concrete equipment photo 7",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-zoomlion-01/zoomlion-equipment-08.jpg"),
      alt: "Actual ZOOMLION used concrete equipment photo 8",
      caption: "Machine Details",
    },
    {
      src: publicAsset("/plants/pb-zoomlion-01/zoomlion-equipment-09.jpg"),
      alt: "Actual ZOOMLION used concrete equipment photo 9",
      caption: "Machine Details",
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
    { item: "Equipment shown in photos", status: "included" },
    { item: "Other components", status: onRequest },
  ],
  whatsappInterestMessage: `Hello PlantBridge,
I'm interested in the ZOOMLION used concrete equipment (PB-ZOOMLION-01).
My country:
Please send me the price and more machine details.`,
};

const equipment: Equipment[] = [
  hzs120,
  lutong800,
  xcmg800,
  sicoma3000,
  sicoma2000y2020,
  sicoma2000y2024,
  sicoma4500y2018,
  js4000c,
  sicoma3000y2020,
  zoomlionEquipment,
];

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
