import React from "react";
import SystemAccess from "../../../components/SystemAccess";
import { Link } from "react-router-dom";

export default function CardContainer() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="border rounded-sm p-4">
        <span>General</span>
      </div>
      <div className="border rounded-sm p-4">
        <span>Securtity</span>
        <div className="flex flex-col">
          <span>
            <Link to={"administrator"}>Profiles</Link>
          </span>
          <span>Roles and Sharing</span>
        </div>
      </div>
    </div>
  );
}
