import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** DFRobot DFPlayer Mini MP3 Module — UART/audio. */
export const DFRobotDFPlayerMiniMP3Module_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(DFRobot DFPlayer MP3)" as const;

export const DFRobotDFPlayerMiniMP3Module_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["OUT"],
  pin5: ["GAIN"],
  pin6: ["SHDN"],
} as const;

export const DFRobotDFPlayerMiniMP3Module_PIN_ATTRIBUTES = {
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
  OUT: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  GAIN: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SHDN: { includeInBoardPinout: true },
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

export type DFRobotDFPlayerMiniMP3ModuleProps = Omit<
  ChipProps<typeof DFRobotDFPlayerMiniMP3Module_PIN_LABELS>,
  FixedProps
>;

export const DFRobotDFPlayerMiniMP3Module = (
  props: DFRobotDFPlayerMiniMP3ModuleProps,
) => (
  <chip
    {...props}
    displayName="DFRobot DFPlayer Mini MP3 Module"
    mfn="DFRobot"
    footprint={DFRobotDFPlayerMiniMP3Module_FOOTPRINT}
    pinLabels={DFRobotDFPlayerMiniMP3Module_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "IN",
      pin4: "OUT",
      pin5: "GAIN",
      pin6: "SHDN",
    }}
    pinAttributes={DFRobotDFPlayerMiniMP3Module_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "IN"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT", "GAIN", "SHDN"],
      },
    }}
  />
);
