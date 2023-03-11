import React from "react";
import { useParams } from "react-router-dom";

export default function President() {
  const { name } = useParams();
  return <div>{name}</div>;
}
