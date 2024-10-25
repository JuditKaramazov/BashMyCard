# BashMyCard

<p align="center">
  <a href="https://www.npmjs.com/package/bash-my-card">
    <img src="https://github.com/user-attachments/assets/f673b7ca-eac1-4e33-9dce-fa9f3c5772ac" width="700" alt="Judit's terminal business card screenshot."
        style="filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, .7));">
  </a>
</p>
<p align="center">
  <strong><span style="font-size: larger;">B*tch, I'm stylish</span></strong>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" title="JavaScript" />
  <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" title="Node.js" />
</div>

<p align="center">
  <a href="https:/github.com/JuditKaramazov">🐱 /JuditKaramazov</a>
</p>
<p align="center">
  <a href="https://karamazfolio.xyz/">📍 Portfolio</a>
</p>
<p align="center">
  <a href="https://karamablog.xyz">☕ Blog</a>
</p>

---

Table of Contents
-----------------

* [🔧 Getting started](#-getting-started)
  * [🧞 Summon me!](#-summon-me)
  * [🚀 DIY](#-diy)
* [🚪 Introduction](#-introduction)
* [🧪 Script](#-script)
  * [📦 Boxen](#-boxen)
  * [🖍️ Chalk](#-chalk)
* [🙌 Immense thanks to them awesome Sponsors](#-immense-thanks-to-them-awesome-sponsors)
* [🏛 License & Copyright](#-license--copyright)

---

## 🔧 Getting started

Wouldn't life be easier without the overcomplication of the insanely-high amount of frameworks, links, and layers we usually apply to our way of interacting with software? _No, right?_ My thoughts exactly! Independently of that, this time I'm bringing a simple [Node.js](https://nodejs.org/en) project - a free, open-source, cross-platform JavaScript runtime environment letting developers create servers, web apps, command line tools, and scripts. Are you feeling curious about it? If you _are_, allow me to share some great news: you can interact with this project in two different ways!

### 🧞 Summon me!

Since [BashMyCard](https://www.npmjs.com/package/bash-my-card) is available on [npm](https://www.npmjs.com/) (the default and sexiest package manager for the JavaScript runtime environment), there are plenty of options you can choose from:

- Access the package and get to know more about it through its [dedicated npm site](https://www.npmjs.com/package/bash-my-card).

- Summon my **custom business card** by running the following command:

```bash
npx juditlazaro-vcard
```

- Download the **original package**, which you'll find in this project:

```bash
npm install bash-my-card
```

Are you more into taking action, exploring, and adding some tweaks until the results truly satisfy your needs and preferences? Fear not, dear stranger! As usual, and since this is an open-source project, there's also room for that.

### 🚀 DIY

As stated before, if you are interested in playing with `BashMyCard`, remember that you can always clone the repository:

```bash
$ git clone https://github.com/JuditKaramazov/BashMyCard.git
```

In this case, the structure that you will find is extremely simple:

```
/
├── CODE_OF_CONDUCT.md
├── index.js
├── LICENSE
└── package.json
```

And what truly matters here, besides some minor changes to the [package.json information](/package.json), is the content inside our [index.js](/index.js), which we can easily display in our terminal by running:

```
node index.js
```

Easy, right? Feel free to let me know if you enjoyed this little script, as you'll definitely find some ways to contact me thanks to this project! _Ha, ha... God..._

> [!TIP]
> Whatever you decide to do, please remember to respect the [Code of Conduct](CODE_OF_CONDUCT.md) while interacting with the project and the platform itself. Thank you kindly!

---

## 🚪 Introduction

No matter how many times I wondered _why_ I keep adding links to my list of already-way-too-many links, I do believe I reached a point of no return where I simply can't find a way to stop myself from sharing [portfolios](https://karamazfolio.xyz/), one [blog](https://karamablog.xyz/), and this [other blog](https://nowhylogs.vercel.app/), and social media I'm not even paying that much attention to, and business accounts I should (perhaps) be more responsive to...

Undoubtedly, all of them will vary in content. Our type of business and growth plans might determine where we should put our focus, and while social media isn't a digital billboard for our brand, it is supposed to be a portal to direct connection with our ideal customers and peers, and a pathway to powerful insights - or so I heard. But when is too much truly _too much_? Between you and I, are you using a `link in bio tool` like [Linktree](https://linktr.ee/JuditKaramazov), too? 

Well, guess what: some days, I'm tired of the interwebz mayhem, and when days like such hit me, I stare at the void and wonder: _"What if I generate something capable of delivering my contact details, like a card, which keeps people wondering if I am sending them a virus or a nice 'whatever' that I just programmed?"_

And that's _exactly_ what happened when I created [BashMyCard](https://www.npmjs.com/package/bash-my-card), my dear and invisible reader.

---

## 🧪 Script

![Warp screenshot of my own business card.](https://github.com/user-attachments/assets/8fcbe697-62b6-4610-ad70-fd25289fd4a7)

While simple, this script provides what is supposed to:

- **My name** (¡hola, mamá! ¡Salgo por la tele!)
- A **brief introduction**.
- The **most relevant contact information and links** that came to mind.

As for the main file itself ([index.js](/index.js)), even though most of it is focused on the styles:

- the `links array` contains multiple objects, each representing a social link (blog, GitHub, LinkedIn...), 

- `linkList` joins all the links together into one string, with each link on a new line,

- `console.log()` outputs the formatted card by combining the **intro** and **linkList** inside a box:

```js
const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));
```

_"Why are you even mentioning this, Judit?"_

Because as you just saw, there is _no_ need to make things complicated to achieve satisfying results. 

### 📦 Boxen

In order to achieve these stylistic results, I kept it _simple all the way long_, and [Boxen](https://github.com/sindresorhus/boxen), a simple yet extremely efficient package allowing you to **create customizable boxes in the terminal**, played a huge part in it. Useful for highlighting information or framing important messages, `Boxen` allows you to style borders, padding, margins...

```js
import boxen from "boxen";

const boxenOptions = {
  margin: 1,
  padding: 1.3,
  width: 62,
  title: "@JuditKaramazov",
  titleAlignment: "center",
  borderStyle: "bold",
  borderColor: "yellowBright",
};
```

### 🖍️ Chalk

As for [Chalk](https://github.com/chalk/chalk), aka "terminal string styling done right", I couldn't have found better words to explain its usage. Chalk comes with an easy-to-use composable API where you just chain and nest the styles you want, easily define your own themes, and take advantage of console.log [string substitution](https://nodejs.org/docs/latest/api/console.html#console_console_log_data_args). Sounds tempting? As if allowing you to use different colors, backgrounds, boldness, and underlines for more vibrant output wasn't enough, together, `Boxen` and `Chalk` are powerful for building **CLI applications where readability and visual design matter**.

```js
const intro = chalk("Hola! Here's ")
  + chalk.black.bgYellowBright("Judit Lázaro Moyano")
  + chalk(". Developer, philologist & tight-rope walker.\n\nNo conduzco, pero Kojima me guía.\n\n");
```

Now, try it yourself! 🔥

---

## 🙌 Immense thanks to them awesome Sponsors

¿Hay esperanza? **Hay esperanza**. It feels like most of us are running out of energy at this point, but independently of that, `huge thanks ❤️ to @Entreprises LEMRHALI`, our amazing, incredible, and underserved Sponsor who kept supporting this crazyness both through the bad and good moments. 

Do you remember when we could look at ourselves in the mirror in Undertale? `Despite everything, it's still you.` That's always been one of my favorite gaming moments, for whatever reason - and yes, indeed: despite everything, we are still here. It's still you. From the bottom of my heart, thank you kindly. And courage. Tons of it!

<p align="center">
  <img src="https://raw.githubusercontent.com/JuditKaramazov/InsightsFromJuniorToFutureSeniors/main/images/lemrhali-logo.png" width="250" alt="Visual asset of a pixel-art weapon rack."
    style="filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, .7));">
</p>

---

## 🏛 License & Copyright

This work lives under the robust, solid, beautiful, and definitely scripted roof of the [MIT License](/LICENSE). That said, and only if you enjoyed what you found here, remember that you can make the Dinosaur extremely happy if you...
<br />

---

<h1 align="center">
  <a href="https://karamazfolio.xyz/"><img src="https://raw.githubusercontent.com/JuditKaramazov/JuditKaramazfolio/a7b1825e33711948f51e53e249751761e1779f56/public/karamaBrand.png" width="100" height="100" alt="Original Karama logo asset.">
</h1>
<h2 align="center">
  <a href="https://www.buymeacoffee.com/JuditKaramazov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 207px !important;" ></a>
</h2>
