import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit TPS62827 3.3V Buck Converter Breakout — regulated output. */
export const AdafruitTPS6282733VBuckConverterBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit TPS62827 3.3V Buck)" as const;

export const AdafruitTPS6282733VBuckConverterBreakout_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const AdafruitTPS6282733VBuckConverterBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitTPS6282733VBuckConverterBreakoutProps = Omit<
  ChipProps<typeof AdafruitTPS6282733VBuckConverterBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitTPS6282733VBuckConverterBreakout = (
  props: AdafruitTPS6282733VBuckConverterBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit TPS62827 3.3V Buck Converter Breakout"
    mfn="Adafruit"
    footprint={AdafruitTPS6282733VBuckConverterBreakout_FOOTPRINT}
    pinLabels={AdafruitTPS6282733VBuckConverterBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={AdafruitTPS6282733VBuckConverterBreakout_PIN_ATTRIBUTES}
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
