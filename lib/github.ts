import * as Git from "simple-git";

export async function Test() {
  try {
    Git.simpleGit()
      .init()
      .add("./*")
      .commit("first commit!")
      .addRemote("origin", "https://github.com/user/repo.git")
      .push("origin", "master");
    console.log("passed");
  } catch (error) {
    console.log(error);
  }
}
