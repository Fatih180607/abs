/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { User } from "@supabase/supabase-js";

declare namespace App {
  interface Locals {
    user: User;
  }
}
