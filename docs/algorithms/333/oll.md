---
twisty:
  puzzle: 3x3x3
  visualization: experimental-2D-LL
  experimentalStickering: OLL
---

# OLL
I'm currently learning 3LLL, so I'm doing 2-look OLL, followed by a single PLL.

## Edges
### Bar
<CubingAlgorithm
  :config="{ alg: `F R' F' U2 R U R' U R2 U2 R' U` }"
  algorithm="F (R U R' U') F'"
/>

### L
<CubingAlgorithm
  :config="{ alg: `R' F R F' U2 R2 B' R' B R'` }"
  algorithm="Fw (R U R' U') Fw'"
/>

### All Edges
<CubingAlgorithm
  :config="{ alg: `R U2 R2 F R F' U2 R' F R F'` }"
  algorithm="F (R U R' U') F' Fw (R U R' U') Fw'"
/>

## Corners
<CubingAlgorithm
  algorithm="(R2' D) (R' U2) (R D') (R' U2 R')"
  show-inverse
/>

<CubingAlgorithm
  algorithm="(Rw U) (R' U') (Rw' F) (R F')"
  show-inverse
/>

<CubingAlgorithm
  algorithm="(R' F) (R B') (R' F') (R B)"
  show-inverse
/>

<CubingAlgorithm
  name="Sune"
  algorithm="(R U R' U) (R U2 R')"
  show-inverse
/>

<CubingAlgorithm
  name="Anti-Sune"
  algorithm="(R U2) (R' U' R U' R')"
  show-inverse
/>

<CubingAlgorithm
  algorithm="(R U2') (R2' U') (R2 U') (R2' U2' R)"
  show-inverse
/>

<CubingAlgorithm
  algorithm="F (R U R' U') (R U R' U') (R U R' U') F'"
  show-inverse
/>
