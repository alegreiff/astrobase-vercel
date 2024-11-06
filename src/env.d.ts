/// <reference path="../.astro/types.d.ts" />
declare namespace App {
  interface Locals {
    isLoggedIn: boolean;
    user: User | null;
    isAdmin: boolean
  }
}

interface User {
  email: string;
  name: string;
  image: string;
  
  //avatar: string;
  //emailVerified: boolean;
}