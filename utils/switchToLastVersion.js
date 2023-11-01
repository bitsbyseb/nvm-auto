export function switchToLastVersion(version) {
    try {
        const command = new Deno.Command('nvm',{
            args:[
                "use",
                version
            ]
        });
    } catch (error) {
        console.error(error);
    }
}