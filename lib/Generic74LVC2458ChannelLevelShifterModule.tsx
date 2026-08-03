import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic 74LVC245 8-Channel Level Shifter Module — logic translation. */
export const Generic74LVC2458ChannelLevelShifterModule_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic 74LVC245 8-Channel Lev)" as const;

export const Generic74LVC2458ChannelLevelShifterModule_PIN_LABELS = {
  pin1: ["HV"],
  pin2: ["LV"],
  pin3: ["GND"],
  pin4: ["HV1"],
  pin5: ["HV2"],
  pin6: ["HV3"],
  pin7: ["HV4"],
  pin8: ["DIR"],
} as const;

export const Generic74LVC2458ChannelLevelShifterModule_PIN_ATTRIBUTES = {
  HV: { requiresPower: true, includeInBoardPinout: true },
  LV: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  HV1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  HV2: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  HV3: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  HV4: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  DIR: {
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

export type Generic74LVC2458ChannelLevelShifterModuleProps = Omit<
  ChipProps<typeof Generic74LVC2458ChannelLevelShifterModule_PIN_LABELS>,
  FixedProps
>;

export const Generic74LVC2458ChannelLevelShifterModule = (
  props: Generic74LVC2458ChannelLevelShifterModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic 74LVC245 8-Channel Level Shifter Module"
    mfn="Generic"
    footprint={Generic74LVC2458ChannelLevelShifterModule_FOOTPRINT}
    pinLabels={Generic74LVC2458ChannelLevelShifterModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "HV",
      pin2: "LV",
      pin3: "GND",
      pin4: "HV1",
      pin5: "HV2",
      pin6: "HV3",
      pin7: "HV4",
      pin8: "DIR",
    }}
    pinAttributes={Generic74LVC2458ChannelLevelShifterModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.16}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["HV", "LV", "GND", "HV1"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["HV2", "HV3", "HV4", "DIR"],
      },
    }}
  />
);
