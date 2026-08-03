import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** A3144 Hall-Effect Sensor Module — digital. */
export const A3144HallEffectSensorModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(A3144 Hall-Effect)" as const;

export const A3144HallEffectSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const A3144HallEffectSensorModule_PIN_ATTRIBUTES = {
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

export type A3144HallEffectSensorModuleProps = Omit<
  ChipProps<typeof A3144HallEffectSensorModule_PIN_LABELS>,
  FixedProps
>;

export const A3144HallEffectSensorModule = (
  props: A3144HallEffectSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="A3144 Hall-Effect Sensor Module"
    mfn="Generic"
    footprint={A3144HallEffectSensorModule_FOOTPRINT}
    pinLabels={A3144HallEffectSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={A3144HallEffectSensorModule_PIN_ATTRIBUTES}
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
