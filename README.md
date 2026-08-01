# @tscircuit/header-modules

Reusable tscircuit components for PCB modules that plug into female pin
headers.

The package currently includes:

- `Feather`: the Adafruit Feather form factor with one 12-pin row, one 16-pin
  row, 2.54 mm pin pitch, and 20.32 mm between rows.
- `Xiao`: the Seeed Studio XIAO form factor with two 7-pin rows, 2.54 mm pin
  pitch, and 15.24 mm between rows.

Both components render as a single `<chip />` backed entirely by a female
`pinrow` footprinter string.

## Usage

```tsx
import { Feather, Xiao } from "@tscircuit/header-modules"

export default () => (
  <board width="90mm" height="30mm">
    <Feather name="FEATHER1" pcbX={-20} />
    <Xiao name="XIAO1" pcbX={30} />
  </board>
)
```

The footprinter strings are also exported as `FEATHER_FOOTPRINT` and
`XIAO_FOOTPRINT`.

## Footprinter compatibility

Independent row spacing and sparse pin grids are implemented in footprinter's
main branch but are not yet present in its latest published package. This repo
temporarily carries the matching upstream patch so installs and builds use the
correct geometry immediately. The patch can be removed after those features
are included in a footprinter release consumed by tscircuit.
