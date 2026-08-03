import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Espressif ESP-01S Wi-Fi Module — 2x4 header. */
export const EspressifESP01SWiFiModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Espressif ESP-01S Wi-Fi)" as const;

export const EspressifESP01SWiFiModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const EspressifESP01SWiFiModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SIG1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SIG2: {
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

export type EspressifESP01SWiFiModuleProps = Omit<
  ChipProps<typeof EspressifESP01SWiFiModule_PIN_LABELS>,
  FixedProps
>;

export const EspressifESP01SWiFiModule = (
  props: EspressifESP01SWiFiModuleProps,
) => (
  <chip
    {...props}
    displayName="Espressif ESP-01S Wi-Fi Module"
    mfn="Espressif"
    footprint={EspressifESP01SWiFiModule_FOOTPRINT}
    pinLabels={EspressifESP01SWiFiModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={EspressifESP01SWiFiModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SIG1", "SIG2"],
      },
    }}
  />
);
