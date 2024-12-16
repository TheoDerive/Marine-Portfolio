import * as Git from "simple-git";

export async function Test() {
  try {
    Git.simpleGit()
      .init()
      .exec(() => console.log("padd"))
      .add("./*")
      .commit("first commit!")
      .addRemote("origin", "git@github.com:TheoDerive/Marine-Portfolio.git")
      .push("origin", "master", [], () => console.log("done"));
  } catch (error) {
    console.log(error);
  }
}
