import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic 1-Channel Solid-State Relay Module — digital input. */
export const Generic1ChannelSolidStateRelayModule_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic 1-Channel Solid-State)" as const;

export const Generic1ChannelSolidStateRelayModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["NO"],
  pin5: ["COM"],
  pin6: ["NC"],
} as const;

export const Generic1ChannelSolidStateRelayModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  IN: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  NO: { mustBeConnected: true, includeInBoardPinout: true },
  COM: { mustBeConnected: true, includeInBoardPinout: true },
  NC: { mustBeConnected: true, includeInBoardPinout: true },
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

export type Generic1ChannelSolidStateRelayModuleProps = Omit<
  ChipProps<typeof Generic1ChannelSolidStateRelayModule_PIN_LABELS>,
  FixedProps
>;

export const Generic1ChannelSolidStateRelayModule = (
  props: Generic1ChannelSolidStateRelayModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic 1-Channel Solid-State Relay Module"
    mfn="Generic"
    footprint={Generic1ChannelSolidStateRelayModule_FOOTPRINT}
    pinLabels={Generic1ChannelSolidStateRelayModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "IN",
      pin4: "NO",
      pin5: "COM",
      pin6: "NC",
    }}
    pinAttributes={Generic1ChannelSolidStateRelayModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "IN"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["NO", "COM", "NC"],
      },
    }}
  />
);
