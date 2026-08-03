import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit NeoPixel Stick, 8 x WS2812B — single-wire. */
export const AdafruitNeoPixelStick8XWS2812B_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit NeoPixel 8 x WS2812B)" as const;

export const AdafruitNeoPixelStick8XWS2812B_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DQ"],
} as const;

export const AdafruitNeoPixelStick8XWS2812B_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  DQ: {
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

export type AdafruitNeoPixelStick8XWS2812BProps = Omit<
  ChipProps<typeof AdafruitNeoPixelStick8XWS2812B_PIN_LABELS>,
  FixedProps
>;

export const AdafruitNeoPixelStick8XWS2812B = (
  props: AdafruitNeoPixelStick8XWS2812BProps,
) => (
  <chip
    {...props}
    displayName="Adafruit NeoPixel Stick, 8 x WS2812B"
    mfn="Adafruit"
    footprint={AdafruitNeoPixelStick8XWS2812B_FOOTPRINT}
    pinLabels={AdafruitNeoPixelStick8XWS2812B_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "DQ",
    }}
    pinAttributes={AdafruitNeoPixelStick8XWS2812B_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["DQ"],
      },
    }}
  />
);
