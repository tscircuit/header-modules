import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** MQ-5 LPG/Natural Gas Sensor Module — analog/digital comparator board. */
export const MQ5LPGNaturalGasSensorModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MQ-5 LPG Natural Gas)" as const;

export const MQ5LPGNaturalGasSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["AO"],
  pin4: ["DO"],
} as const;

export const MQ5LPGNaturalGasSensorModule_PIN_ATTRIBUTES = {
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

export type MQ5LPGNaturalGasSensorModuleProps = Omit<
  ChipProps<typeof MQ5LPGNaturalGasSensorModule_PIN_LABELS>,
  FixedProps
>;

export const MQ5LPGNaturalGasSensorModule = (
  props: MQ5LPGNaturalGasSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="MQ-5 LPG/Natural Gas Sensor Module"
    mfn="Generic"
    footprint={MQ5LPGNaturalGasSensorModule_FOOTPRINT}
    pinLabels={MQ5LPGNaturalGasSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "AO",
      pin4: "DO",
    }}
    pinAttributes={MQ5LPGNaturalGasSensorModule_PIN_ATTRIBUTES}
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
