"use client";

import useFetch from "@/hooks/useFetch";
import { DiplomeForBack } from "@/types/diplomeType";
import React from "react";

export default function Review() {
  const [diplomeValue, setDiplomeValues] = React.useState<DiplomeForBack>({
    diplomeName: "",
    ecole: "",
    description: "",
  });

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const response = await useFetch.NewDiplome(diplomeValue);
  }

  return (
    <form
      style={{
        margin: "500px 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        placeholder="ecole"
        required
        onChange={(e) =>
          setDiplomeValues({
            ...diplomeValue,
            ecole: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="name"
        required
        onChange={(e) =>
          setDiplomeValues({
            ...diplomeValue,
            diplomeName: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="description"
        required
        onChange={(e) =>
          setDiplomeValues({
            ...diplomeValue,
            description: e.target.value,
          })
        }
      />

      <button type="submit" onClick={async (e) => submit(e)}>
        Push
      </button>
    </form>
  );
}
