import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit NAU7802 24-Bit Load Cell ADC Breakout — I2C. */
export const AdafruitNAU780224BitLoadCellADCBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit NAU7802 24-Bit Load C)" as const;

export const AdafruitNAU780224BitLoadCellADCBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DOUT"],
  pin4: ["SCK"],
} as const;

export const AdafruitNAU780224BitLoadCellADCBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  DOUT: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SCK: {
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

export type AdafruitNAU780224BitLoadCellADCBreakoutProps = Omit<
  ChipProps<typeof AdafruitNAU780224BitLoadCellADCBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitNAU780224BitLoadCellADCBreakout = (
  props: AdafruitNAU780224BitLoadCellADCBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit NAU7802 24-Bit Load Cell ADC Breakout"
    mfn="Adafruit"
    footprint={AdafruitNAU780224BitLoadCellADCBreakout_FOOTPRINT}
    pinLabels={AdafruitNAU780224BitLoadCellADCBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "DOUT",
      pin4: "SCK",
    }}
    pinAttributes={AdafruitNAU780224BitLoadCellADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["DOUT", "SCK"],
      },
    }}
  />
);
