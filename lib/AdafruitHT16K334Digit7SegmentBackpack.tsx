import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit HT16K33 4-Digit 7-Segment Backpack — I2C. */
export const AdafruitHT16K334Digit7SegmentBackpack_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit HT16K33 4-Digit 7-Seg)" as const;

export const AdafruitHT16K334Digit7SegmentBackpack_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitHT16K334Digit7SegmentBackpack_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SDA: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_sda"],
  },
  SCL: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_scl"],
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

export type AdafruitHT16K334Digit7SegmentBackpackProps = Omit<
  ChipProps<typeof AdafruitHT16K334Digit7SegmentBackpack_PIN_LABELS>,
  FixedProps
>;

export const AdafruitHT16K334Digit7SegmentBackpack = (
  props: AdafruitHT16K334Digit7SegmentBackpackProps,
) => (
  <chip
    {...props}
    displayName="Adafruit HT16K33 4-Digit 7-Segment Backpack"
    mfn="Adafruit"
    footprint={AdafruitHT16K334Digit7SegmentBackpack_FOOTPRINT}
    pinLabels={AdafruitHT16K334Digit7SegmentBackpack_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitHT16K334Digit7SegmentBackpack_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "SCL"],
      },
    }}
  />
);
