# PLL

## T Perm
<CustomAlgorithm 
    scramble="R U R' U' R' F R2 U' R' U' R U R' F'"
    :arrows="[[2,8,false,2], [3,5]]"
>
    TBD
</CustomAlgorithm>

## N Perm
### Na
<CustomAlgorithm 
    scramble="R U R' U2 R U R2 F' R U R U' R' F R U' R' U' R U' R'"
    :arrows="[[2,6,false,2], [3,5]]"
>
    R U R' U (R U R' F' R U R' U' R' F R2 U' R') U2 R U' R'
</CustomAlgorithm>

### Nb
<CustomAlgorithm 
    scramble="R' U R' F R F' R U' R' F' U F R U R' U' R"
    :arrows="[[2,6,false,2], [1,7]]"
>
    R' (U R U' R') (F' U' F) (R U R' F) (R'&nbsp;F'&nbsp;R&nbsp;U'&nbsp;R)
</CustomAlgorithm>

## G Perm
### Ga
<CustomAlgorithm 
    scramble="D R' U' R U D' R2 U R' U R U' R U' R2"
    :arrows="[[2,6,true,2], [6,0,true,2], [0,2,true,2], [3,5,true], [5,1,true], [1,3,true]]"
>
    R2 U R' U R' U' R U' R2 (D U') R' U R D'
</CustomAlgorithm>

### Gb
<CustomAlgorithm 
    scramble="D' R2 U R' U R' U' R U' R2 D U' R' U R"
    :arrows="[[0,6,true,2], [6,8,true,2], [8,0,true,2], [3,1,true], [1,7,true], [7,3,true]]"
>
    R' U' R (U D') R2 U R' U R U' R U' R2 D
</CustomAlgorithm>

### Gc
<CustomAlgorithm 
    scramble="D' R U R' U' D R2 U' R U' R' U R' U R2"
    :arrows="[[0,6,true,2], [6,8,true,2], [8,0,true,2], [3,5,true], [5,7,true], [7,3,true]]"
>
    R2 U' R U' R U R' U R2 (D' U) R U' R' D
</CustomAlgorithm>

### Gd
<CustomAlgorithm 
    scramble="D R2 U' R U' R U R' U R2 D' U R U' R'"
    :arrows="[[2,6,true,2], [6,0,true,2], [0,2,true,2], [7,1,true], [1,3,true], [3,7,true]]"
>
    R U R' (U' D) R2 U' R U' R' U R' U R2 D'
</CustomAlgorithm>
