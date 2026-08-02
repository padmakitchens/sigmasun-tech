export type ApplicationProduct = {
  title: string;
  description: string;
  images: string[];
};

export type Application = {
  slug: string;
  title: string;
  blurb: string;
  products: ApplicationProduct[];
};

export const applications: Application[] = [
  {
    slug: "aeronautic",
    title: "Aeronautical Engineering",
    blurb:
      "Test rigs and mechatronic assemblies built to aerospace tolerances, covering turbine component testing and instrumented ground-support equipment.",
    products: [
      {
        title: "75 Hp Blower With Random Velocity Programme",
        description:
          "75 HP blower with a Random Velocity programme is typically a ventilation or air-moving system where the blower speed is automatically varied over time in a non-repeating/random pattern instead of running at a single fixed RPM.",
        images: ["/Application/aeronautic/airturbine.jpeg"],
      },
    ],
  },
  {
    slug: "laboratoryequip",
    title: "Laboratory Equipments",
    blurb:
      "Specialized research and testing jigs for materials and flow characterization, including membrane casting rigs and calibrated flow measurement benches.",
    products: [
      {
        title: "Membrane Casting Machine",
        description:
          "Membrane casting machine is industrial equipment used to produce thin polymer membrane films by forming a uniform liquid coating on a moving surface and then solidifying it into a porous membrane (most often using a drying step and/or phase inversion).",
        images: [
          "/Application/laboratoryequip/membranecasting3.jpeg",
          "/Application/laboratoryequip/6143219469141086371.jpg",
          "/Application/laboratoryequip/6143219469141086373.jpg",
          "/Application/laboratoryequip/membrane-casting-machine-1.mp4",
          "/Application/laboratoryequip/membrane-casting-machine-vid-1.mp4",
        ],
      },
      {
        title: "Flow Measurement Bench",
        description:
          "Measure and monitor flow with a reliable, easy-to-integrate flow measurement machine designed for industrial process control and accurate reporting. Whether you need precise volume, mass, or rate readings, this system helps you improve efficiency, reduce waste, and maintain consistent product quality.",
        images: [
          "/Application/laboratoryequip/flow-measument-bench-1.jpeg",
          "/Application/laboratoryequip/flow-measument-bench-2.jpg",
        ],
      },
      {
        title: "Membrane Casting Knife",
        description:
          "A membrane casting knife (film casting knife) is a precision blade used in membrane manufacturing to spread a polymer dope into a uniform thin film on a moving substrate. It controls film thickness and coating width, which directly affects the membrane's pore structure, permeability, and overall performance.",
        images: [
          "/Application/laboratoryequip/membranecasting-knife-1.jpeg",
          "/Application/laboratoryequip/membranecasting-knife-2.jpeg",
        ],
      },
    ],
  },
  {
    slug: "lasermarkingsystem",
    title: "Laser Marking Systems",
    blurb:
      "Product identification and traceability systems, from inline laser marking stations to compact table-top units for mark-and-trace workflows.",
    products: [
      {
        title: "Laser Marking",
        description:
          "Laser marking is a precise, high-contrast method for permanently engraving logos, serial numbers, and barcodes directly onto products. It uses a focused laser beam with minimal material contact, enabling fast, repeatable marking across metal, plastic, glass, and more.",
        images: ["/Application/lasermarkingsystem/laser_marking.png"],
      },
      {
        title: "Table Top Laser Marking Machine",
        description:
          "A tabletop laser marking machine is a compact system designed for quick, precise engraving and marking of parts in small to medium production. It delivers permanent marks like logos, serial numbers, and barcodes on materials such as metal and many plastics.",
        images: [
          "/Application/lasermarkingsystem/table_top_laser_marking_machine-mark_and_tracebility.png",
        ],
      },
    ],
  },
  {
    slug: "industry4",
    title: "Industry 4.0",
    blurb:
      "Connected production systems with embedded telemetry, sensor fusion, and digital-twin-ready data capture for modern manufacturing lines.",
    products: [
      {
        title: "A Conveyor Belt for Industry 4.0",
        description:
          "A conveyor (recovery) belt for Industry 4.0 is an automated material-handling belt system equipped with sensors and connectivity to enable real-time monitoring, predictive maintenance, and data-driven control. It can track belt speed/load, detect misalignment or slippage, and send uptime and fault alerts to a PLC/SCADA system for optimized production flow.",
        images: ["/Application/industry4/convery-belt-1.jpg"],
      },
      {
        title: "Engine Head Laser Marking for Industry 4.0",
        description:
          "An engine head laser marking machine for Industry 4.0 automatically engraves permanent identifiers such as part numbers, serial codes, and QR data on engine head components while integrating with smart manufacturing systems. It supports traceability by capturing production data, enabling job control, and providing real-time monitoring and fault alerts through PLC/SCADA connectivity.",
        images: ["/Application/industry4/engine_head_laser_marking.jpeg"],
      },
    ],
  },
  {
    slug: "dam",
    title: "Dam Instrumentation",
    blurb:
      "Geotechnical monitoring hardware including vibrating-wire sensor test devices and calibrated PCB rigs for long-term structural monitoring.",
    products: [
      {
        title: "Vibrating Wire Sensor Testing Device",
        description:
          "A vibrating wire sensor testing device for a dam is an instrument system used to verify and calibrate vibrating wire piezometer or strain sensor performance installed in dam structures. It applies controlled signals to the sensor and measures its frequency changes to confirm correct readings for safe monitoring of water pressure and structural behavior.",
        images: ["/Application/dam/vibrating-wire-sensor-testing-device.png"],
      },
      {
        title: "Custom PCB Board",
        description:
          "A custom PCB board for a dam project is a specially designed electronic circuit made to support dam monitoring and control systems, such as sensor signal conditioning, data acquisition, communication, and power management. Built for reliability in harsh environments, it helps ensure accurate, stable performance for long-term instrumentation and telemetry.",
        images: ["/Application/dam/pcb.jpeg"],
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Health Care Devices",
    blurb:
      "Sterile, high-safety mechanisms for clinical environments, engineered for remote operation and reliable performance under regulatory scrutiny.",
    products: [
      {
        title: "Orthopedic Table",
        description:
          "An orthopedic table is a specially designed operating table used in orthopedic surgeries to support the patient's positioning and provide stability for procedures involving bones, joints, and spine. It typically includes adjustable segments, imaging compatibility, and accessories to help surgeons perform precise and safe operations.",
        images: ["/Application/healthcare/ortho1.jpg", "/Application/healthcare/ortho2.jpg"],
      },
    ],
  },
  {
    slug: "defensesystem",
    title: "Defense Systems",
    blurb:
      "Rugged enclosures, custom actuators, and PCB testing platforms built for field-deployed defense and surveillance equipment.",
    products: [
      {
        title: "Drone With Payload",
        description:
          "A drone with payload is an unmanned aerial vehicle designed to carry and deliver mission equipment such as cameras, sensors, thermal imaging, communication modules, or medical supplies. It expands operational capability by adding the specific payload required for tasks like inspection, surveying, search-and-rescue, or logistics.",
        images: ["/Application/defensesystem/drone-with-payload.png"],
      },
      {
        title: "Ground Penetration Radar",
        description:
          "Ground Penetrating Radar (GPR) for defence is an advanced subsurface detection system used to identify buried objects, underground structures, and voids without excavation. It helps support applications such as route surveying, obstacle detection, and forensic investigation by providing real-time radar imaging of what lies beneath the ground.",
        images: ["/Application/defensesystem/Ground-penetration-radar.png"],
      },
      {
        title: "Bathymetry with Echo Sounder",
        description:
          "Bathymetry with an echo sounder for defence is a naval survey solution that measures underwater depths and seafloor shape using acoustic pulses. It helps route planning, obstacle detection, and mapping of seabeds for military operations with high-resolution depth data.",
        images: ["/Application/defensesystem/Bathymetry-with-echo-sounder.png"],
      },
      {
        title: "Extendable Arm Drone",
        description:
          "An extendable-arm drone for defense is a tactical unmanned aerial platform equipped with a deployable robotic arm to support missions like inspection, standoff payload delivery, or remote handling of objects. It improves operational reach and safety by performing tasks from a distance while collecting real-time video and sensor data.",
        images: ["/Application/defensesystem/Customized-Extent-arm-drone.png"],
      },
    ],
  },
  {
    slug: "embeddedelectronic",
    title: "Embedded Electronics",
    blurb:
      "Custom circuit routing, controller programming, and sensor integration for embedded systems across every division we serve.",
    products: [
      {
        title: "Custom PCB Board",
        description:
          "Custom PCB for a dam is a tailor-made electronic circuit board used in dam monitoring systems to process sensor signals, manage power, and transmit data reliably. Designed for harsh conditions, it supports long-term operation for real-time insights into water pressure, seepage, and structural behavior.",
        images: ["/Application/embeddedelectronic/custom-pcb-board.jpg"],
      },
      {
        title: "Micro Processor for Dam Monitor",
        description:
          "A microprocessor for dam monitoring is the control and processing unit that receives data from sensors (like pressure, seepage, strain, and displacement), performs real-time calculations and filtering, and logs/transmits alerts to the monitoring system. It enables accurate, stable, long-term operation for dam safety and structural health tracking.",
        images: ["/Application/embeddedelectronic/chipboard1.jpg"],
      },
      {
        title: "Circuit Diagram for PCB",
        description:
          "A circuit diagram for a PCB for a dam project shows how all electronic parts connect and work together to collect sensor data, condition the signals, power the electronics, and communicate with the monitoring/control system. It includes connections for the microprocessor, input channels (e.g., pressure/displacement/seepage sensors), signal conditioning circuits, power regulators, surge protection, and wired or wireless communication interfaces to support reliable long-term dam safety monitoring.",
        images: [
          "/Application/embeddedelectronic/circuit-diagram.jpg",
          "/Application/embeddedelectronic/circuit-diagram-2.jpg",
        ],
      },
    ],
  },
  {
    slug: "robotswelding",
    title: "Robotic Welding",
    blurb:
      "Multi-axis robotic welding cells with integrated safety screens, built for repeatable, high-throughput industrial welding.",
    products: [
      {
        title: "Robotic Welding",
        description:
          "Robotic welding is an automated welding process where a robotic arm performs consistent welding along programmed paths. It improves weld quality, repeatability, and productivity by maintaining stable speed, positioning, and parameters with minimal variation across production.",
        images: ["/Application/robotswelding/robotic-welding-vid-1.mp4"],
      },
      {
        title: "Turn Table for Automobile",
        description:
          "A turntable for automobile is a rotating platform used to position vehicles for processes like lifting, inspection, parking, maintenance, or loading/unloading. It allows smooth, controlled turning and alignment to improve workflow and reduce manual handling.",
        images: [
          "/Application/robotswelding/turn-table-for-automobile-1.jpg",
          "/Application/robotswelding/turn-table-for-automobile-2.jpg",
          "/Application/robotswelding/turn-table-for-automobile-3.jpg",
        ],
      },
    ],
  },
  {
    slug: "robotspick",
    title: "Robot Pick",
    blurb:
      "Precision fixtures and solid-state laser welding systems built for robotic pick, place, and weld cells.",
    products: [
      {
        title: "Robotic Welding Fixtures",
        description:
          "Robotic welding fixtures are precision holding and positioning devices that secure the workpiece for automated welding. They ensure accurate alignment, repeatability, and stable clamping, improving weld quality and reducing rework in production.",
        images: [
          "/Application/robotspick/robotic-welding-fixture.jpg",
          "/Application/robotspick/robotic-welding-fixture-1.jpg",
        ],
      },
      {
        title: "Solid State Laser Welding Machines",
        description:
          "Solid state laser welding machines are advanced systems that use a solid-state laser source to join metal components with high precision and repeatable weld quality. They enable fast welding with minimal heat-affected zone, supporting clean, efficient production for industrial parts.",
        images: [
          "/Application/robotspick/robot-pick-1.mp4",
          "/Application/robotspick/robot-pick-2.mp4",
          "/Application/robotspick/robot-pick-3.mp4",
        ],
      },
    ],
  },
  {
    slug: "food-pharma",
    title: "Food & Pharma Industry",
    blurb:
      "Stainless-steel washdown-standard conveyances, sanitary checkweighing, and gas-leak detection systems built for food and pharmaceutical production floors.",
    products: [
      {
        title: "Gas Monitoring System",
        description:
          "A gas measurement and monitoring system tracks how much gas is being used and detects gas safety levels in real time. It typically measures flow/consumption (for billing and energy management) and monitors gases like natural gas/LPG (for leak prevention), sending alerts and reports to a control panel or dashboard.",
        images: ["/Application/food-pharma/gas1.jpeg"],
      },
      {
        title: "Gas Leaking Detection System",
        description:
          "A gas leaking detection system monitors indoor or outdoor areas for dangerous gas concentrations and detects leaks early. It triggers audible/visual alarms and can send alerts to control panels so safety actions are taken immediately.",
        images: ["/Application/food-pharma/gas-leak-detection-system.jpeg"],
      },
      {
        title: "Weight Checker System",
        description:
          "A weight checker machine automatically weighs products on a conveyor or platform to ensure each item meets the required target weight. It rejects underweight or overweight products and supports consistent quality control and faster production.",
        images: ["/Application/food-pharma/checkweigher-system.png"],
      },
      {
        title: "Food Production Machine",
        description:
          "A food production machine is an automated system used to process, package, or handle food products at high speed while maintaining consistent quality and hygiene. It helps reduce manual labor, improves accuracy, and supports reliable mass production with efficient control of temperature, mixing, filling, or sealing.",
        images: ["/Application/food-pharma/foodconvory.jpeg"],
      },
      {
        title: "Strapping Machine",
        description:
          "A strapping machine is an industrial packaging equipment used to wrap materials with plastic or polyester strapping for secure bundling and transportation. It tightens and seals the strap automatically to prevent shifting and improve packing strength.",
        images: [
          "/Application/food-pharma/strepping-machine.png",
          "/Application/food-pharma/strepping-machine-2.png",
        ],
      },
    ],
  },
  {
    slug: "industrial",
    title: "Industrial / General",
    blurb:
      "General-purpose industrial automation spanning leak-test rigs, laser marking, tension measurement, and thickness monitoring systems.",
    products: [
      {
        title: "Radiator Leak Test Machine",
        description:
          "A radiator leak testing machine automatically checks radiators for leaks by applying controlled pressure or vacuum to the cooling system and monitoring pressure/flow changes. It helps detect tiny defects quickly, improves product quality, and reduces manual inspection time.",
        images: [
          "/Application/industrial/radiator-leak-test-machine.jpeg",
          "/Application/industrial/Radiator-leak-test-machine-vid.mp4",
        ],
      },
      {
        title: "Spring Tension Measurement Machine",
        description:
          "A spring tension measurement machine is a testing system that measures the force or tension of a spring as it is compressed or extended. It provides accurate readings for quality control, ensuring each spring meets required specifications for strength and performance.",
        images: ["/Application/industrial/spring-tension-mesurment-system-industrial-project.png"],
      },
      {
        title: "Engine Head Laser Marking",
        description:
          "Engine head laser marking is a permanent engraving process that marks engine head components with part numbers, serial codes, and logos using a focused laser beam. It enables clear traceability on critical metal parts with high reliability and repeatable output.",
        images: ["/Application/industrial/engine-head-laser-marking2.jpeg"],
      },
      {
        title: "Headlamp Testing Device",
        description:
          "A headlamp testing device automatically checks the performance of vehicle headlights for brightness, beam pattern, alignment, and optical quality. It delivers accurate results for quality control and helps ensure compliant, safe lighting before dispatch.",
        images: ["/Application/industrial/headlamp-testing-device-1.jpg"],
      },
      {
        title: "Large Cylindrical Industrial Tank",
        description:
          "A large cylindrical industrial tank is a heavy-duty storage vessel used to hold liquids or gases in bulk for industrial processes. It's designed for strength and reliability, with features like inlet/outlet connections, safety valves, and inspection access to support long-term operations.",
        images: ["/Application/industrial/large-cylindrical-industrial-tank.jpg"],
      },
      {
        title: "Online Thickness Measurement System",
        description:
          "An online thickness measurement system automatically measures material thickness during production in real time, without stopping the line. It helps maintain product quality by detecting variations early and supporting automatic adjustments to process parameters.",
        images: [
          "/Application/industrial/online-thickness-measurment-system.jpg",
          "/Application/industrial/online-thickness-measurment-system-1.jpg",
          "/Application/industrial/online-thickness-measurment-system-2.jpg",
        ],
      },
      {
        title: "Automatic Sort Conveyor",
        description:
          "An automatic sort conveyor is a powered conveyor system that automatically separates and routes products into different lanes or stations based on sensors. It improves sorting accuracy, speeds up packaging and dispatch, and reduces manual handling while supporting high-throughput production.",
        images: ["/Application/industrial/automatic-sort-covery-vid-1.mp4"],
      },
      {
        title: "Conveyor Weight Control",
        description:
          "Conveyor weight control is a system that continuously monitors the weight of products on a conveyor to ensure correct fill or pack quantity. It compares the measured weight against set targets and automatically adjusts dosing or flags items that are under/overweight for rejection or rework.",
        images: ["/Application/industrial/convery-weight-control.mp4"],
      },
    ],
  },
  {
    slug: "machineversion",
    title: "Machine Vision",
    blurb:
      "Camera-based inspection systems for flatness, placement, and defect detection built into live production lines.",
    products: [
      {
        title: "Conveyor Belt Vision System",
        description:
          "A conveyor belt vision system uses cameras and lighting mounted on a conveyor line to inspect products automatically. It detects defects, checks labeling/printing, and verifies placement in real time, improving quality control and reducing manual inspection.",
        images: [
          "/Application/machineversion/convery-belt-vision.jpg",
          "/Application/machineversion/convery-machine-vision-1.mp4",
        ],
      },
      {
        title: "Flatness Testing Machine Vision",
        description:
          "A flatness testing machine vision system uses cameras and measurement algorithms to detect surface warpage, bending, and unevenness in parts. It provides accurate, non-contact inspection for quality control by highlighting deviations from the required flatness specifications.",
        images: ["/Application/machineversion/flatness-testing-machine-vision.png"],
      },
      {
        title: "Part Inspection System",
        description:
          "A part inspection system automatically checks manufactured components for defects and dimensional accuracy using sensors, vision cameras, and measurement tools. It ensures consistent quality by rejecting or flagging parts that do not meet required specifications.",
        images: [
          "/Application/machineversion/part-inspection-system-1.png",
          "/Application/machineversion/part-inspection-system-2.png",
        ],
      },
    ],
  },
];
