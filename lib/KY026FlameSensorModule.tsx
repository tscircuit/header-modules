import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** KY-026 Flame Sensor Module — analog/digital. */
export const KY026FlameSensorModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(KY-026 Flame)" as const;

export const KY026FlameSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["AO"],
  pin4: ["DO"],
} as const;

export const KY026FlameSensorModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  AO: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  DO: {
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

export type KY026FlameSensorModuleProps = Omit<
  ChipProps<typeof KY026FlameSensorModule_PIN_LABELS>,
  FixedProps
>;

export const KY026FlameSensorModule = (props: KY026FlameSensorModuleProps) => (
  <chip
    {...props}
    displayName="KY-026 Flame Sensor Module"
    mfn="Generic"
    footprint={KY026FlameSensorModule_FOOTPRINT}
    pinLabels={KY026FlameSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "AO",
      pin4: "DO",
    }}
    pinAttributes={KY026FlameSensorModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["AO", "DO"],
      },
    }}
  />
);
