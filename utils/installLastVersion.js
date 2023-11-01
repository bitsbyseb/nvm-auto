export function installLastVersion(version) {
 return new Promise((resolve,reject)=> {
    try {
    const command = new Deno.Command("nvm", {
      args: ["install", version],
    });
    resolve(true)
    return true;
  } catch (err) {
    console.error(err);
    reject(false);
  }
 }); 
}