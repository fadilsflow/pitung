"use client";

import { Button } from "../ui/button";

import { logout } from "./action";

export default function LogoutButton() {
  return <Button onClick={() => logout()}>Logout</Button>;
}
