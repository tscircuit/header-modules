import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic HC-06 Bluetooth Classic Module — UART. */
export const GenericHC06BluetoothClassicModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic HC-06 Bluetooth Classi)" as const;

export const GenericHC06BluetoothClassicModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
} as const;

export const GenericHC06BluetoothClassicModule_PIN_ATTRIBUTES = {
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

export type GenericHC06BluetoothClassicModuleProps = Omit<
  ChipProps<typeof GenericHC06BluetoothClassicModule_PIN_LABELS>,
  FixedProps
>;

export const GenericHC06BluetoothClassicModule = (
  props: GenericHC06BluetoothClassicModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic HC-06 Bluetooth Classic Module"
    mfn="Generic"
    footprint={GenericHC06BluetoothClassicModule_FOOTPRINT}
    pinLabels={GenericHC06BluetoothClassicModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TX",
      pin4: "RX",
    }}
    pinAttributes={GenericHC06BluetoothClassicModule_PIN_ATTRIBUTES}
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
