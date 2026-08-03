import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit TPS61023 5V Boost Converter Breakout — regulated output. */
export const AdafruitTPS610235VBoostConverterBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit TPS61023 5V Boost)" as const;

export const AdafruitTPS610235VBoostConverterBreakout_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const AdafruitTPS610235VBoostConverterBreakout_PIN_ATTRIBUTES = {
  VIN: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  VOUT: { providesPower: true, includeInBoardPinout: true },
  EN: { includeInBoardPinout: true },
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

export type AdafruitTPS610235VBoostConverterBreakoutProps = Omit<
  ChipProps<typeof AdafruitTPS610235VBoostConverterBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitTPS610235VBoostConverterBreakout = (
  props: AdafruitTPS610235VBoostConverterBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit TPS61023 5V Boost Converter Breakout"
    mfn="Adafruit"
    footprint={AdafruitTPS610235VBoostConverterBreakout_FOOTPRINT}
    pinLabels={AdafruitTPS610235VBoostConverterBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={AdafruitTPS610235VBoostConverterBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VOUT", "EN"],
      },
    }}
  />
);
