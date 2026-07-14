export type Application = {
  slug: string;
  title: string;
  blurb: string;
  images: string[];
};

export const applications: Application[] = [
  {
    slug: "aeronautic",
    title: "Aeronautical Engineering",
    blurb:
      "Test rigs and mechatronic assemblies built to aerospace tolerances, covering turbine component testing and instrumented ground-support equipment.",
    images: ["/Application/aeronautic/airturbine.jpeg"],
  },
  {
    slug: "laboratoryequip",
    title: "Laboratory Equipments",
    blurb:
      "Specialized research and testing jigs for materials and flow characterization, including membrane casting rigs and calibrated flow measurement benches.",
    images: [
      "/Application/laboratoryequip/membranecasting3.jpeg",
      "/Application/laboratoryequip/flow_measument_bench1.jpeg",
    ],
  },
  {
    slug: "lasermarkingsystem",
    title: "Laser Marking Systems",
    blurb:
      "Product identification and traceability systems, from inline laser marking stations to compact table-top units for mark-and-trace workflows.",
    images: [
      "/Application/lasermarkingsystem/laser_marking.png",
      "/Application/lasermarkingsystem/table_top_laser_marking_machine-mark_and_tracebility.png",
    ],
  },
  {
    slug: "industry4",
    title: "Industry 4.0",
    blurb:
      "Connected production systems with embedded telemetry, sensor fusion, and digital-twin-ready data capture for modern manufacturing lines.",
    images: [
      "/Application/industry4/industry4.0.jpeg",
      "/Application/industry4/engine_head_laser_marking.jpeg",
    ],
  },
  {
    slug: "dam",
    title: "Dam Instrumentation",
    blurb:
      "Geotechnical monitoring hardware including vibrating-wire sensor test devices and calibrated PCB rigs for long-term structural monitoring.",
    images: [
      "/Application/dam/vibrating_wire_sensor_testing_device.png",
      "/Application/dam/pcb.jpeg",
    ],
  },
  {
    slug: "healthcare",
    title: "Health Care Devices",
    blurb:
      "Sterile, high-safety mechanisms for clinical environments, engineered for remote operation and reliable performance under regulatory scrutiny.",
    images: ["/Application/healthcare/ortho1.jpg", "/Application/healthcare/ortho2.jpg"],
  },
  {
    slug: "defensesystem",
    title: "Defense Systems",
    blurb:
      "Rugged enclosures, custom actuators, and PCB testing platforms built for field-deployed defense and surveillance equipment.",
    images: [
      "/Application/defensesystem/drone_with_payload.png",
      "/Application/defensesystem/Ground_penetration_radar.png",
    ],
  },
  {
    slug: "embeddedelectronic",
    title: "Embedded Electronics",
    blurb:
      "Custom circuit routing, controller programming, and sensor integration for embedded systems across every division we serve.",
    images: [
      "/Application/embeddedelectronic/pcb_diagram.jpg",
      "/Application/embeddedelectronic/chipboard1.jpg",
    ],
  },
  {
    slug: "robotswelding",
    title: "Welding / Robots",
    blurb:
      "Multi-axis robotic welding cells with integrated safety screens, built for repeatable, high-throughput industrial welding.",
    images: [
      "/Application/robotswelding/Customized_Welding_RobotSystem.png",
      "/Application/robotswelding/photo_82_2026-07-09_19-15-13.jpg",
    ],
  },
  {
    slug: "robotspick",
    title: "Pick and Place",
    blurb:
      "Customized systems for pick-and-place automation and machine vision inspection are built on request. Reach out to our technical team to discuss requirements.",
    images: [],
  },
  {
    slug: "Food & pharma",
    title: "Food & Pharma Industry",
    blurb:
      "Stainless-steel washdown-standard conveyances, sanitary checkweighing, and gas-leak detection systems built for food and pharmaceutical production floors.",
    images: [
      "/Application/Food%20%26%20pharma/gas1.jpeg",
      "/Application/Food%20%26%20pharma/checkweigher_system.png",
      "/Application/Food%20%26%20pharma/foodconvory.jpeg",
    ],
  },
  {
    slug: "industrial",
    title: "Industrial / General",
    blurb:
      "General-purpose industrial automation spanning textile machinery, leak-test rigs, and mechanical tension measurement systems.",
    images: [
      "/Application/industrial/saree_manufacturing_machine.jpeg",
      "/Application/industrial/radiator_leak_test_machine.jpeg",
    ],
  },
  {
    slug: "machineversion",
    title: "Machine Vision",
    blurb:
      "Customized systems for pick-and-place automation and machine vision inspection are built on request. Reach out to our technical team to discuss requirements.",
    images: [],
  },
];
