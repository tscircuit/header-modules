import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic TP4056 USB-C Li-Ion Charger/Protection Module — charger. */
export const GenericTP4056USBCLiIonChargerProtectionModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic TP4056 USB-C Li-Ion Ch)" as const;

export const GenericTP4056USBCLiIonChargerProtectionModule_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const GenericTP4056USBCLiIonChargerProtectionModule_PIN_ATTRIBUTES = {
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

export type GenericTP4056USBCLiIonChargerProtectionModuleProps = Omit<
  ChipProps<typeof GenericTP4056USBCLiIonChargerProtectionModule_PIN_LABELS>,
  FixedProps
>;

export const GenericTP4056USBCLiIonChargerProtectionModule = (
  props: GenericTP4056USBCLiIonChargerProtectionModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic TP4056 USB-C Li-Ion Charger/Protection Module"
    mfn="Generic"
    footprint={GenericTP4056USBCLiIonChargerProtectionModule_FOOTPRINT}
    pinLabels={GenericTP4056USBCLiIonChargerProtectionModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={GenericTP4056USBCLiIonChargerProtectionModule_PIN_ATTRIBUTES}
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
