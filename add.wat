(module
    (import "console" "log" (func $log (param i32)))
    (func $add (param $a i32) (param $b i32)
        (result i32)
        (local $tmp i32)
        local.get $a
        local.get $b
        i32.add
        local.tee $tmp
        call $log
        local.get $tmp
        )
    (export "add" (func $add))
)
