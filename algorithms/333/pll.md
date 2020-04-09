# PLL

## T Perm
<CubePicture
    scramble="R U R' U' R' F R2 U' R' U' R U R' F'"
    :arrows="[[2,8,false,2], [3,5]]"
/>

## N Perm
### Na
<CubePicture
    scramble="R U R' U2 R U R2 F' R U R U' R' F R U' R' U' R U' R'"
    :arrows="[[2,6,false,2], [3,5]]"
/>
<Algorithm>R U R' U (R U R' F' R U R' U' R' F R2 U' R') U2 R U' R'</Algorithm>

### Nb
<CubePicture 
    scramble="R' U R' F R F' R U' R' F' U F R U R' U' R"
    :arrows="[[2,6,false,2], [1,7]]"
/>
<Algorithm>R' (U R U' R') (F' U' F) (R U R' F) (R' F' R U' R)</Algorithm>

## G Perm
### Ga
<CubePicture 
    scramble="D R' U' R U D' R2 U R' U R U' R U' R2"
    :arrows="[[2,6,true,2], [6,0,true,2], [0,2,true,2], [3,5,true], [5,1,true], [1,3,true]]"
/>
<Algorithm>R2 U R' U R' U' R U' R2 (D U') R' U R D'</Algorithm>

### Gb
<CubePicture 
    scramble="D' R2 U R' U R' U' R U' R2 D U' R' U R"
    :arrows="[[0,6,true,2], [6,8,true,2], [8,0,true,2], [3,1,true], [1,7,true], [7,3,true]]"
/>
<Algorithm>R' U' R (U D') R2 U R' U R U' R U' R2 D</Algorithm>

### Gc
<CubePicture 
    scramble="D' R U R' U' D R2 U' R U' R' U R' U R2"
    :arrows="[[0,6,true,2], [6,8,true,2], [8,0,true,2], [3,5,true], [5,7,true], [7,3,true]]"
/>
<Algorithm>R2 U' R U' R U R' U R2 (D' U) R U' R' D</Algorithm>

### Gd
<CubePicture 
    scramble="D R2 U' R U' R U R' U R2 D' U R U' R'"
    :arrows="[[2,6,true,2], [6,0,true,2], [0,2,true,2], [7,1,true], [1,3,true], [3,7,true]]"
/>
<Algorithm>R U R' (U' D) R2 U' R U' R' U R' U R2 D'</Algorithm>
