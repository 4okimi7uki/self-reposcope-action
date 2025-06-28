const core = require("@actions/core");
const execSync = require("child_process").execSync;

try {
    const GITHUB_TOKEN = core.getInput("github_token");

    // 1. Set env
    process.env.GITHUB_TOKEN = GITHUB_TOKEN;

    // 2. Install Rust toolchain
    console.log("Installing Rust...");
    execSync("curl https://sh.rustup.rs -sSf | sh -s -- -y", { stdio: "inherit" });
    process.env.PATH += `:${process.env.HOME}/.cargo/bin`;

    // 3. Clone self-reposcope
    console.log("Cloning self-reposcope...");
    execSync("git clone https://github.com/4okimi7uki/self-reposcope.git", { stdio: "inherit" });

    // 4. Build
    console.log("Building self-reposcope...");
    execSync("cargo build --release", { cwd: "./self-reposcope", stdio: "inherit" });

    // 5. Run
    console.log("🚀 Running self-reposcope...");
    execSync("./target/release/self-reposcope", { cwd: "./self-reposcope", stdio: "inherit" });

    console.log("Reposcope execution complete.");
} catch (error) {
    core.setFailed(`Action failed: ${error.message}`);
}
