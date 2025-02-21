# Generic-Untiy-Game-Speed-Hack-Frida
The running speed of most Unity games is based on the timescale in UnityEngine.CoreModule. For some single-player games or games that do not have strict checks on the client side, attackers can easily hook timescale-related functions and change the running speed of the game.
frida-il2cpp-bridge provides some APIs that can more conveniently hook methods.

### How To Use:
- launch frida server 
- install frida and frida tools(For android emulator, the latest version of frida has serious compatibility issues on the x86 emulator. It is recommended to use a version before 15.2)
```shell
frida -UF  "YOUR_TARGET_TEST_APP" --realm emulated -l "frida-generic-unity-game-speed-hack.js.js" --no-pause
```
