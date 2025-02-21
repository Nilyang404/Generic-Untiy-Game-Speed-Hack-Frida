import "frida-il2cpp-bridge"


Il2Cpp.perform(() => {
    console.log("🔍 Modifying Time.timeScale for game speed hack...");
    const timeClass = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.classes.find(cls => cls.name === "Time");

    if (!timeClass) {
        console.error("❌ UnityEngine.Time is NOT found!");
        return;
    }

    // get time scale method
    const setTimeScaleMethod = timeClass.methods.find(m => m.name === "set_timeScale" && m.parameters.length === 1);

    if (!setTimeScaleMethod) {
        console.error("❌ set_timeScale method NOT FOUND!");
        return;
    }
    const newSpeed = 5 // 5x speed
    console.log("🚀 Setting game speed to ${newSpeed}");
    setTimeScaleMethod.invoke(newSpeed);

    console.log("✅ Game speed modified successfully!");
});  
