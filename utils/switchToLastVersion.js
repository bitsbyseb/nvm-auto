export function switchToLastVersion(version) {
  try {
    const command = new Deno.Command("nvm", {
      args: [
        "use",
        version,
      ],
    });
    command.spawn();
  } catch (error) {
    console.error(error);
  }
}
