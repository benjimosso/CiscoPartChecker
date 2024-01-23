import { NextResponse } from "next/server"

async function getData() {
    const res = await fetch('http://localhost:4000/Cisco')
    return res.json()
}

export async function GET(request) {
    const cisco = await getData()
    return NextResponse.json(cisco)
}