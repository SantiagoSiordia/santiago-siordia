import React from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t("typewriter.cybersecurity expert"),
          t("typewriter.ethical hacker"),
          t("typewriter.mobile developer"),
          t("typewriter.javascript junkie"),
          t("typewriter.react native engineer"),
          t("typewriter.tech lover"),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
