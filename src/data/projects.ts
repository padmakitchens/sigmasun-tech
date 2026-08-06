export type ProjectTag =
  | "Embedded Electronic"
  | "Health Care"
  | "Information Technology"
  | "Automobile"
  | "Laboratory"
  | "Industrial Development"
  | "Robotics"
  | "Defence System";

export type Project = {
  slug: string;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: ProjectTag[];
};

export const projects: Project[] = [
  {
    slug: "solenoid-coil-potting-conveyor",
    title: "Special Logistic Conveyor for Potting of Solenoid Coils",
    client: "Cummins, U.S.A.",
    description:
      "Automated conveyor system featuring integrated potting fixtures, safety sensors, and indexing to streamline solenoid production.",
    image: "/Application/industrial/radiator-leak-test-machine.jpeg",
    tags: ["Automobile", "Embedded Electronic"],
  },
  {
    slug: "pure-it-water-filter-plant",
    title: "Pure IT Water Filter Production Plant",
    client: "Hindustan Unilever Ltd., Haridwar",
    description:
      "High-capacity sanitary assembly line for filtration cartridges, integrating check-weighing and leak-testing.",
    image: "/Application/food-pharma/foodconvory.jpeg",
    tags: ["Industrial Development"],
  },
  {
    slug: "sari-fall-manufacturing-machine",
    title: "Sari Fall Manufacturing Machine",
    client: "Textile Industry Pioneer",
    description:
      "High-speed textile machine automating edge folding, stitching, and roll winding for fabric rolls.",
    image: "/Application/machineversion/convery-belt-vision.jpg",
    tags: ["Industrial Development"],
  },
  {
    slug: "riveting-head-indexing-table",
    title: "Special Riveting Head with Indexing Table",
    client: "Confidential Client",
    description:
      "Multi-axis pneumatic riveting assembly featuring an indexing table for automated component feed.",
    image: "/Application/robotswelding/turn-table-for-automobile-1.jpg",
    tags: ["Automobile", "Embedded Electronic"],
  },
  {
    slug: "orthopedic-operation-table",
    title: "Fully Remote Controlled Battery Operated Orthopedic Operation Table",
    client: "Healthcare Equipment Manufacturer",
    description:
      "Surgical operation table with fully remote actuators, high payload support, and battery backup.",
    image: "/Application/healthcare/ortho1.jpg",
    tags: ["Health Care"],
  },
  {
    slug: "capacitor-testing-machine",
    title: "Capacitor Testing Machine",
    client: "Fan Motor Capacitor Manufacturer",
    description:
      "High-voltage automated screening rig for testing motor capacitor tolerance limits and capacitance values.",
    image: "/Application/embeddedelectronic/chipboard1.jpg",
    tags: ["Embedded Electronic"],
  },
  {
    slug: "diesel-valve-testing-machine",
    title: "Diesel Valve Testing Machine",
    client: "Automotive Components Manufacturer",
    description:
      "High-precision hydro-pneumatic testing system checking valve leakage, flow rate, and pressure tolerance.",
    image: "/Application/laboratoryequip/flow-measument-bench-1.jpeg",
    tags: ["Automobile"],
  },
  {
    slug: "industry-4-conveyor-belt",
    title: "Connected Conveyor Belt for Industry 4.0 Production Line",
    client: "Confidential Client",
    description:
      "Sensor-equipped recovery belt with real-time monitoring, predictive maintenance alerts, and PLC/SCADA connectivity for smart production lines.",
    image: "/Application/industry4/convery-belt-1.jpg",
    tags: ["Information Technology"],
  },
  {
    slug: "robotic-welding-fixture-cell",
    title: "Robotic Welding Fixture for Automated Pick & Weld Cells",
    client: "Confidential Client",
    description:
      "Precision holding and positioning fixtures securing workpieces for robotic welding, improving alignment accuracy and repeatability.",
    image: "/Application/robotspick/robotic-welding-fixture.jpg",
    tags: ["Robotics"],
  },
  {
    slug: "drone-with-payload-defense",
    title: "Drone with Payload for Defense Surveillance",
    client: "Confidential Client",
    description:
      "Unmanned aerial vehicle engineered to carry mission payloads such as cameras, sensors, and communication modules for field-deployed defense operations.",
    image: "/Application/defensesystem/drone-with-payload.png",
    tags: ["Defence System"],
  },
];

export const featuredProjectSlugs = [
  "solenoid-coil-potting-conveyor",
  "pure-it-water-filter-plant",
  "sari-fall-manufacturing-machine",
];
