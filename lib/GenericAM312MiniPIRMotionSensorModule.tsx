import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic AM312 Mini PIR Motion Sensor Module — digital. */
export const GenericAM312MiniPIRMotionSensorModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic AM312 PIR Motion)" as const;

export const GenericAM312MiniPIRMotionSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericAM312MiniPIRMotionSensorModule_PIN_ATTRIBUTES = {
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

export type GenericAM312MiniPIRMotionSensorModuleProps = Omit<
  ChipProps<typeof GenericAM312MiniPIRMotionSensorModule_PIN_LABELS>,
  FixedProps
>;

export const GenericAM312MiniPIRMotionSensorModule = (
  props: GenericAM312MiniPIRMotionSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic AM312 Mini PIR Motion Sensor Module"
    mfn="Generic"
    footprint={GenericAM312MiniPIRMotionSensorModule_FOOTPRINT}
    pinLabels={GenericAM312MiniPIRMotionSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericAM312MiniPIRMotionSensorModule_PIN_ATTRIBUTES}
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
