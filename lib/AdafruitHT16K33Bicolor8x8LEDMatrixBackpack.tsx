import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit HT16K33 Bicolor 8x8 LED Matrix Backpack — I2C. */
export const AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit HT16K33 Bicolor 8x8 L)" as const;

export const AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_PIN_ATTRIBUTES = {
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

export type AdafruitHT16K33Bicolor8x8LEDMatrixBackpackProps = Omit<
  ChipProps<typeof AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_PIN_LABELS>,
  FixedProps
>;

export const AdafruitHT16K33Bicolor8x8LEDMatrixBackpack = (
  props: AdafruitHT16K33Bicolor8x8LEDMatrixBackpackProps,
) => (
  <chip
    {...props}
    displayName="Adafruit HT16K33 Bicolor 8x8 LED Matrix Backpack"
    mfn="Adafruit"
    footprint={AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_FOOTPRINT}
    pinLabels={AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_PIN_ATTRIBUTES}
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
