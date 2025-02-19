"use client"

import { EventResult } from './fetchEventResultTypes'

export default  async function fetchEventResult(
  params: { [key: string]: string },
): Promise<EventResult> {

  const URLParams = new URLSearchParams(params)

  const response = await fetch(`${process.env.API}/events?${URLParams}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const jsonResponse = response.json()
  return jsonResponse
}