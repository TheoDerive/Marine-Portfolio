import * as Git from "simple-git";

export async function Test() {
  try {
    Git.simpleGit({
      baseDir: "/home/thyo/Marine-Portfolio/",
      binary: "git",
    })
      .init()
      .add("./*")
      .commit("first commit!")
      .addRemote("origin", "git@github.com:TheoDerive/Marine-Portfolio.git")

      .exec(() => console.log("padd"))
      .push("origin", "master", [], () => console.log("done"));
  } catch (error) {
    console.log(error);
  }
}
