import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic RCWL-0516 Microwave Motion Sensor Module — digital. */
export const GenericRCWL0516MicrowaveMotionSensorModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic RCWL-0516 Microwave Mo)" as const;

export const GenericRCWL0516MicrowaveMotionSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericRCWL0516MicrowaveMotionSensorModule_PIN_ATTRIBUTES = {
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

export type GenericRCWL0516MicrowaveMotionSensorModuleProps = Omit<
  ChipProps<typeof GenericRCWL0516MicrowaveMotionSensorModule_PIN_LABELS>,
  FixedProps
>;

export const GenericRCWL0516MicrowaveMotionSensorModule = (
  props: GenericRCWL0516MicrowaveMotionSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic RCWL-0516 Microwave Motion Sensor Module"
    mfn="Generic"
    footprint={GenericRCWL0516MicrowaveMotionSensorModule_FOOTPRINT}
    pinLabels={GenericRCWL0516MicrowaveMotionSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericRCWL0516MicrowaveMotionSensorModule_PIN_ATTRIBUTES}
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
