#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  margin: 1,
  padding: 1.3,
  width: 62,
  title: "@JuditKaramazov",
  titleAlignment: "center",
  borderStyle: "bold",
  borderColor: "yellowBright",
};

const intro = chalk("Hola! Here's ")
  + chalk.black.bgYellowBright("Judit Lázaro Moyano")
  + chalk(". Developer, philologist & tight-rope walker.\n\nNo conduzco, pero Kojima me guía.\n\n");

const links = [
  {
    name: chalk.hex("#121212").bgHex("#4ab8a9")("Site"),
    url: chalk.dim("     https://") + "karamazfolio.xyz"
  },

  { name: chalk.hex("#121212").bgHex("#c3d8e0")("Blog"), 
    url: chalk.dim("     https://") + "karamablog.xyz"
  },

  {
    name: chalk.hex("#121212").bgHex("#e6b800")("Git") + chalk.hex("#e6b800").bgHex("#121212")("Hub"),
    url: chalk.dim("   https://github.com") + "/JuditKaramazov",
  },

  {
    name: chalk.hex("#0077b5").bgHex("#fffffc")("Linked") + chalk.hex("#fffffc").bgHex("#0077b5")("In"),
    url: chalk.dim(" https://linkedin.com/in") + "/juditlazaromoyano/",
  },

  {
    name: chalk.hex("#fffffc").bgHex("#121212")("Medium"),
    url: chalk.dim("   https://medium.com/") + "@JuditKaramazov",
  },

  {
    name: chalk.hex("#fffffc").bgHex("#1DA1F2")("Twitter"),
    url: chalk.dim("  https://x.com/") + "v_karamazov",
  }
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));
