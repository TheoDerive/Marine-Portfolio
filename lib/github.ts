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
      .addRemote("website", "git@github.com:TheoDerive/Marine-Portfolio.git")
      .exec(() => console.log("pass"))
      .push("website", "master", [], () => console.log("done"));
  } catch (error) {
    console.log(error);
  }
}
