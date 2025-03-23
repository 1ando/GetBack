"use server";

import { cookies } from "next/headers";

export async function setCookie(name: string, value: string) {
    (await cookies()).set(name, value);
}

export async function getCookie(name: string) {
    return (await cookies()).get(name);
}

export async function deleteCookie(name: string) {
    (await cookies()).delete(name);
}