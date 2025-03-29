(module
 (type $0 (func (param f32 f32) (result f32)))
 (memory $0 0)
 (export "simdAdd" (func $assembly/simd-math/simdAdd))
 (export "memory" (memory $0))
 (func $assembly/simd-math/simdAdd (param $0 f32) (param $1 f32) (result f32)
  local.get $0
  local.get $1
  f32.add
 )
)
