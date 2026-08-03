import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MPM3610 5V Buck Converter Breakout — regulated output. */
export const AdafruitMPM36105VBuckConverterBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit MPM3610 5V Buck)" as const;

export const AdafruitMPM36105VBuckConverterBreakout_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const AdafruitMPM36105VBuckConverterBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitMPM36105VBuckConverterBreakoutProps = Omit<
  ChipProps<typeof AdafruitMPM36105VBuckConverterBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMPM36105VBuckConverterBreakout = (
  props: AdafruitMPM36105VBuckConverterBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MPM3610 5V Buck Converter Breakout"
    mfn="Adafruit"
    footprint={AdafruitMPM36105VBuckConverterBreakout_FOOTPRINT}
    pinLabels={AdafruitMPM36105VBuckConverterBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={AdafruitMPM36105VBuckConverterBreakout_PIN_ATTRIBUTES}
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
