import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** KY-032 IR Obstacle Avoidance Module — digital. */
export const KY032IRObstacleAvoidanceModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(KY-032 IR Obstacle Avoidance)" as const;

export const KY032IRObstacleAvoidanceModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const KY032IRObstacleAvoidanceModule_PIN_ATTRIBUTES = {
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

export type KY032IRObstacleAvoidanceModuleProps = Omit<
  ChipProps<typeof KY032IRObstacleAvoidanceModule_PIN_LABELS>,
  FixedProps
>;

export const KY032IRObstacleAvoidanceModule = (
  props: KY032IRObstacleAvoidanceModuleProps,
) => (
  <chip
    {...props}
    displayName="KY-032 IR Obstacle Avoidance Module"
    mfn="Generic"
    footprint={KY032IRObstacleAvoidanceModule_FOOTPRINT}
    pinLabels={KY032IRObstacleAvoidanceModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={KY032IRObstacleAvoidanceModule_PIN_ATTRIBUTES}
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
