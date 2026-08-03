import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** MQ-9 CO/Combustible Gas Sensor Module — analog/digital comparator board. */
export const MQ9COCombustibleGasSensorModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MQ-9 CO Combustible Gas)" as const;

export const MQ9COCombustibleGasSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["AO"],
  pin4: ["DO"],
} as const;

export const MQ9COCombustibleGasSensorModule_PIN_ATTRIBUTES = {
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

export type MQ9COCombustibleGasSensorModuleProps = Omit<
  ChipProps<typeof MQ9COCombustibleGasSensorModule_PIN_LABELS>,
  FixedProps
>;

export const MQ9COCombustibleGasSensorModule = (
  props: MQ9COCombustibleGasSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="MQ-9 CO/Combustible Gas Sensor Module"
    mfn="Generic"
    footprint={MQ9COCombustibleGasSensorModule_FOOTPRINT}
    pinLabels={MQ9COCombustibleGasSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "AO",
      pin4: "DO",
    }}
    pinAttributes={MQ9COCombustibleGasSensorModule_PIN_ATTRIBUTES}
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
