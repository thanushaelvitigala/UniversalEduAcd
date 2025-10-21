# optimize-glb.ps1

# Input and output paths
$INPUT = "C:\Users\User\Desktop\tanuska\universe-md-fe\public\assets\spherical_galaxy_formation.glb"
$FINAL = "C:\Users\User\Desktop\tanuska\universe-md-fe\public\assets\spherical_galaxy_formation_final.glb"

# 1️⃣ Optimize + Draco geometry
npx @gltf-transform/cli optimize $INPUT temp_optimized.glb --draco

# 2️⃣ Compress textures to KTX2 (ETC1S, lossy)
npx @gltf-transform/cli ktx temp_optimized.glb temp_ktx.glb --format etc1s --q 128

# 3️⃣ Final optimization (dedup + quantize)
npx @gltf-transform/cli optimize temp_ktx.glb $FINAL --draco --quantize

Write-Output "Final web-optimized GLB: $FINAL"
