# EAMJ UI

## Table of contents

- [Getting Started 🚀](#getting-started-)
- [📦 How to publish new changes on packages](#how-to-publish-new-changes-on-packages-)
  - [✨ Create a new version after some changes](#create-a-new-version-after-some-changes-)
  - [💾 Commit this changelog to the package you change](#commit-this-changelog-to-the-package-you-change-)
  - [🔒 Now is just git commit changes and push, and the CI will do the rest](#now-is-just-git-commit-changes-and-push-and-the-ci-will-do-the-rest-)
- [⚙️ How to install a new lib in some package](#how-to-install-a-new-lib-in-some-package-)

<br />
<br />

## Getting Started 🚀

Clone the project and install the dependencies

```bash
npm i
```

## 📦 How to publish the packages

<br />

### ✨ Create a new version

```bash
npm run changeset
```

This will create a new version and a new tag in the repository based on the things you will answer and the log you will write, also will create a new .md file on .changeset folder with the content.

<br />

### 💾 Commit the changelog

```bash
npm run version-packages
```

This will commit the changelog to the package you changed and will push it to all the packages you change.

<br />

### 🔒 Now is just git commit changes and push, and the CI will do the rest

```bash
git add .
git commit -m "what my changes do"
git push
```

---

## ⚙️ How to install a new lib in some package

Go to the package folder and install the library normally
