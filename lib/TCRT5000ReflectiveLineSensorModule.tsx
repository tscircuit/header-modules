import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** TCRT5000 Reflective Line Sensor Module — analog/digital. */
export const TCRT5000ReflectiveLineSensorModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(TCRT5000 Reflective Line)" as const;

export const TCRT5000ReflectiveLineSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["AO"],
  pin4: ["DO"],
} as const;

export const TCRT5000ReflectiveLineSensorModule_PIN_ATTRIBUTES = {
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

export type TCRT5000ReflectiveLineSensorModuleProps = Omit<
  ChipProps<typeof TCRT5000ReflectiveLineSensorModule_PIN_LABELS>,
  FixedProps
>;

export const TCRT5000ReflectiveLineSensorModule = (
  props: TCRT5000ReflectiveLineSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="TCRT5000 Reflective Line Sensor Module"
    mfn="Generic"
    footprint={TCRT5000ReflectiveLineSensorModule_FOOTPRINT}
    pinLabels={TCRT5000ReflectiveLineSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "AO",
      pin4: "DO",
    }}
    pinAttributes={TCRT5000ReflectiveLineSensorModule_PIN_ATTRIBUTES}
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
