import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit PowerBoost 1000 Basic — 5V boost converter. */
export const AdafruitPowerBoost1000Basic_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit PowerBoost 1000)" as const;

export const AdafruitPowerBoost1000Basic_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const AdafruitPowerBoost1000Basic_PIN_ATTRIBUTES = {
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

export type AdafruitPowerBoost1000BasicProps = Omit<
  ChipProps<typeof AdafruitPowerBoost1000Basic_PIN_LABELS>,
  FixedProps
>;

export const AdafruitPowerBoost1000Basic = (
  props: AdafruitPowerBoost1000BasicProps,
) => (
  <chip
    {...props}
    displayName="Adafruit PowerBoost 1000 Basic"
    mfn="Adafruit"
    footprint={AdafruitPowerBoost1000Basic_FOOTPRINT}
    pinLabels={AdafruitPowerBoost1000Basic_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={AdafruitPowerBoost1000Basic_PIN_ATTRIBUTES}
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
