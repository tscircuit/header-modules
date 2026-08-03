import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit PowerBoost 500 Basic — 5V boost converter. */
export const AdafruitPowerBoost500Basic_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit PowerBoost 500)" as const;

export const AdafruitPowerBoost500Basic_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const AdafruitPowerBoost500Basic_PIN_ATTRIBUTES = {
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

export type AdafruitPowerBoost500BasicProps = Omit<
  ChipProps<typeof AdafruitPowerBoost500Basic_PIN_LABELS>,
  FixedProps
>;

export const AdafruitPowerBoost500Basic = (
  props: AdafruitPowerBoost500BasicProps,
) => (
  <chip
    {...props}
    displayName="Adafruit PowerBoost 500 Basic"
    mfn="Adafruit"
    footprint={AdafruitPowerBoost500Basic_FOOTPRINT}
    pinLabels={AdafruitPowerBoost500Basic_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={AdafruitPowerBoost500Basic_PIN_ATTRIBUTES}
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
