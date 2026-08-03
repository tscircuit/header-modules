import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** HLK-LD2410C 24GHz Presence Radar Module — UART/digital. */
export const HLKLD2410C24GHzPresenceRadarModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(HLK-LD2410C 24GHz Presence Rad)" as const;

export const HLKLD2410C24GHzPresenceRadarModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
} as const;

export const HLKLD2410C24GHzPresenceRadarModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  TX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_tx"],
  },
  RX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_rx"],
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

export type HLKLD2410C24GHzPresenceRadarModuleProps = Omit<
  ChipProps<typeof HLKLD2410C24GHzPresenceRadarModule_PIN_LABELS>,
  FixedProps
>;

export const HLKLD2410C24GHzPresenceRadarModule = (
  props: HLKLD2410C24GHzPresenceRadarModuleProps,
) => (
  <chip
    {...props}
    displayName="HLK-LD2410C 24GHz Presence Radar Module"
    mfn="HLK"
    footprint={HLKLD2410C24GHzPresenceRadarModule_FOOTPRINT}
    pinLabels={HLKLD2410C24GHzPresenceRadarModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TX",
      pin4: "RX",
    }}
    pinAttributes={HLKLD2410C24GHzPresenceRadarModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["TX", "RX"],
      },
    }}
  />
);
