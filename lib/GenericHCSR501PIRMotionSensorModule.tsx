import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic HC-SR501 PIR Motion Sensor Module — digital. */
export const GenericHCSR501PIRMotionSensorModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic HC-SR501 PIR Motion)" as const;

export const GenericHCSR501PIRMotionSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericHCSR501PIRMotionSensorModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  OUT: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
} as const satisfies Record<string, PinAttributeMap>;

type FixedProps =
  | "displayName"
  | "footprint"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth";

export type GenericHCSR501PIRMotionSensorModuleProps = Omit<
  ChipProps<typeof GenericHCSR501PIRMotionSensorModule_PIN_LABELS>,
  FixedProps
>;

export const GenericHCSR501PIRMotionSensorModule = (
  props: GenericHCSR501PIRMotionSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic HC-SR501 PIR Motion Sensor Module"
    mfn="Generic"
    footprint={GenericHCSR501PIRMotionSensorModule_FOOTPRINT}
    pinLabels={GenericHCSR501PIRMotionSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericHCSR501PIRMotionSensorModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT"],
      },
    }}
  />
);
