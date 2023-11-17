import { getLastVersion } from "getVersion";
import { installLastVersion } from "installVersion";
import { switchToLastVersion } from "switchToCurrent";

const textEncoder = new TextEncoder();

getLastVersion()
  .then((x) =>
    installLastVersion(x)
      .then(() => switchToLastVersion(x))
      .then(() => {
        Deno.stdout.write(
          textEncoder.encode(
            "\x1b[A\r\x1b[K\x1b[1;32m\x1b[1;4;34m%s\x1b[0;1;32m Node installed succefully.\x1b[0m\n"
          )
        );
      })
      .catch(() => {
        Deno.stdout.write(
          textEncoder.encode(
            "\x1b[31;1mSomething went wrong, node installation failed, aborting, please retry\x1b[0m"
          )
        );
      })
  )
  .catch((err) => console.error(err));

// Promise.allSettled([getLastVersion,installLastVersion,switchToLastVersion])
// .then(res => console.log(res));
