import * as Git from "simple-git";

export async function Test() {
  try {
    await Git.simpleGit({
      baseDir: "/home/thyo/Marine-Portfolio/",
      binary: "git",
    })
      .init()
      .add("./*")
      .commit("first commit!")
      .addRemote(
        "website",
        "https://github.com/TheoDerive/Marine-Portfolio.git",
      )
      .exec(() => console.log("pass"))
      .push("website", "dev", [], () => console.log("done"));
  } catch (error) {
    console.log(error);
  }
}
