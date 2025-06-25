---
twisty:
  puzzle: 3x3x3
  visualization: experimental-2D-LL
  experimentalStickering: PLL
---

# PLL

## Corners Only

### Aa

<CubingAlgorithm 
  name="Aa Perm"
  algorithm="x (R' U R') D2 (R U' R') D2 R2"
/>

### Ab

<CubingAlgorithm 
  name="Ab Perm"
  algorithm="x R2 D2 (R U R') D2 (R U' R)"
/>

<CubingAlgorithm 
  name="Ab Perm (Alternative)"
  algorithm="[y'] x (L U' L) D2 (L' U L) D2 L2"
/>

### E

<CubingAlgorithm 
  name="E Perm"
  algorithm="x' (R U') (R' D) (R U R' D') (R U R' D) (R U') (R' D')"
/>

## Edges only

### Ua
<CubingAlgorithm 
  name="Ua Perm"
  algorithm="(R U' R U) (R U) (R U') (R' U' R2)"
/>

<CubingAlgorithm 
  name="Ua Perm (Alternative)"
  algorithm="[y2] (R2 U' (R' U' R U) (R U) (R U' R)"
/>

### Ub
<CubingAlgorithm 
  name="Ub Perm"
  algorithm="(R2 U) (R U R' U') (R' U') (R' U R')"
/>

<CubingAlgorithm 
  name="Ub Perm (Alternative)"
  algorithm="[y2] (R' U R' U') (R' U') (R' U) (R U R2)"
/>

### H
<CubingAlgorithm 
  name="H Perm"
  algorithm="(M2' U) (M2' U2) (M2' U) M2'"
/>

### Z
<CubingAlgorithm 
  name="Z Perm"
  algorithm="(M2' U) (M2' U) (M' U2) (M2' U2) (M' U2)"
/>

## Swap Two Adjacent Corners & Two Edges

### Ja
<CubingAlgorithm 
  name="Ja Perm"
  algorithm="(R' U L') U2 (R U' R') U2 (L R U')"
/>

### Jb
<CubingAlgorithm 
  name="Jb Perm"
  algorithm="(R U R' F') (R U R' U') (R' F) (R2 U') (R' U')"
/>

### T
<CubingAlgorithm 
  name="T Perm"
  algorithm="(R U R' U') (R' F) (R2 U') (R' U' R U) (R' F')"
/>

### Rb
<CubingAlgorithm 
  name="Rb Perm"
  algorithm="(R' U2) (R U2) (R' F R U R' U') (R' F' R2 U')"
/>

### Ra
<CubingAlgorithm 
  name="Ra Perm"
  algorithm="R U R' F' R U2 R' U2 R' F R U R U2 R' U'"
/>

### F
<CubingAlgorithm
  name="F Perm"
  algorithm="R' U' F' (R U R' U') (R' F) (R2 U') (R' U' R U) (R' U R)"
/>

## Cycling Three Corners & Three Edges

### Ga
<CubingAlgorithm
  name="Ga PLL"
  algorithm="R2 U R' U R' U' R U' R2 (D U') R' U R D'"
/>

### Gb
<CubingAlgorithm
  name="Gb PLL"
  algorithm="R' U' R (U D') R2 U R' U R U' R U' R2 D"
/>

### Gc
<CubingAlgorithm 
  name="Gc PLL"
  algorithm="R2 U' R U' R U R' U R2 (D' U) R U' R' D"
/>

### Gd
<CubingAlgorithm 
  name="Gd PLL"
  algorithm="R U R' (U' D) R2 U' R U' R' U R' U R2 D'"
/>

## Permutation of Two Diagonal Corners & Two Edges

### V
<CubingAlgorithm
  name="V PLL"
  algorithm="(R' U R' Dw') (R' F' R2 U') (R' U R' F) (R F)"
/>

### Na
<CubingAlgorithm
  name="Na PLL"
  algorithm="R U R' U (R U R' F' R U R' U' R' F R2 U' R') U2 R U' R'"
/>

### Nb
<CubingAlgorithm
  name="Nb PLL"
  algorithm="R' (U R U' R') (F' U' F) (R U R' F) (R' F' R U' R)"
/>

### V
<CubingAlgorithm
  name="Y PLL"
  algorithm="(F R U') (R' U' R U) (R' F') (R U R' U') (R' F R F')"
/>