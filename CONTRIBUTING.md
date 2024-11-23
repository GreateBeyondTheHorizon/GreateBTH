# ⚙️ Contributing to Greate: Beyond The Horizon 🌌


💫 First off, **thank you** for considering contributing to _Greate: Beyond The Horizon_! It's people like you that make this project such a great modpack.

## Greate? GBTH? Where do I start?

There are a few repositories that are part of GBTH. The one that you currently are in is the modpack itself, which mainly contains mods / resource packs (defined with [Packwiz](https://packwiz.infra.link/) TOML files), config files for those mods, [KubeJS](https://wiki.latvian.dev/books/kubejs) scripts, [Heracles](https://modrinth.com/mod/heracles) quests, and [FancyMenu](https://docs.fancymenu.net/) screens.

[Greate](https://github.com/GreateBeyondTheHorizon/Greate) is a mod that is being developed alongside the modpack. It is published on Modrinth [here](https://modrinth.com/mod/greate). It introduces tiered Create machines that match the GregTech tiers. Greate is designed to be used in any modpack, wheras in GBTH you may find that recipes for Greate machines have been changed, or that the config is different from the default config.

[GBTHCore](https://github.com/GreateBeyondTheHorizon/GBTHCore) is a mod specifically made for this modpack. In general, it contains anything that can't be added or changed via KubeJS. Like Greate, GBTHCore is a GT Addon, meaning we can add new GT material properties (e.g. Blooms!) among many other things.

Now that you're more familiar with the projects, check out the next section for how to contribute!

## How Can I Contribute?

1. **Reporting Bugs** 🐞: If you've discovered a bug, please create a new issue on our GitHub repo describing the problem and where it occurred.

2. **Suggesting Enhancements** 💡: If you have a new idea for the modpack, we'd love to hear about it! Please create a new issue on our GitHub repo describing your suggestion and use the "enahncement" label.

3. **Pull Requests** 📤: If you've developed a bug fix or improvement for the modpack, please submit a pull request! Before making a pull request, please ensure the modpack still works with your changes.

## Setting up your local environment

### Using [Packwiz Installer](https://packwiz.infra.link/tutorials/installing/packwiz-installer/) (highly recommended)

1. Download the latest build of the pack from [latest-dev](https://github.com/GreateBeyondTheHorizon/GreateBTH/releases/tag/latest-dev).
2. Create an instance of the pack by loading the ZIP file you just downloaded into [Prism Launcher](https://prismlauncher.org/) (or your launcher of choice, but it *must* have the ability to specify a pre-launch command for modpacks).
3. In Prism Launcher, click on your instance, then click "Edit" on the right, then go to the "Settings" section, then go to the "Custom Commands" tab. Here you need to enable Custom Commands, and add `"$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://GreateBeyondTheHorizon.github.io/GreateBTH/pack.toml` as the pre-launch command. This will run Packwiz Installer whenever you launch the pack, which will automatically download the newest versions of files from this repository. If you ever don't want this behaviour (such as when updating a mod, as Packwiz Installer will download the old version of the mod if it is no longer there), you can simply turn the pre-launch command off. Unfortunately, Prism Launcher [forgets the command](https://github.com/PrismLauncher/PrismLauncher/issues/704) when you turn this setting off, so you will need to paste it again.
4. Clone this repository into the `/minecraft` folder of the newly created instance.
5. Open the local repository in your editor of choice. You can now start editing! Changes that you make will take effect in your Minecraft instance.

### Not using Packwiz Installer

1. Clone the repository.
2. Download the latest build of the pack from [latest-dev](https://github.com/GreateBeyondTheHorizon/GreateBTH/releases/tag/latest-dev).
3. Import the pack into your Minecraft launcher of choice.
4. You're now free to change files or add mods in the instance folder that was created in step 3 after importing.
5. To commit your changes, copy your edits in the instance folder to the folder in which you cloned this repository.

**NOTE for not using Packwiz Installer:** Whenever you update your local repo from `master`, make sure to also update your local instance by downloading the newest version of the pack from `latest-dev` and deleting your old instance (you can move your worlds to the new instance if desired). This avoids "but it works on my machine!" issues due to your changes working on your old instance, but not necessarily working on the newest version of the pack. This is why using Packwiz Installer is recommended, but this workflow can still be used if Packwiz Installer doesn't work for you for some reason.

## 💬 Contact Us

📬 If you have any questions, comments, or concerns, you can reach us on [our Discord](https://discord.gg/FpwgKtavyG).

💖 Thank you again for your interest in contributing. We appreciate your help in making _Greate: Beyond The Horizon_ the best it can be!
