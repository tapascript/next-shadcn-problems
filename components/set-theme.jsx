"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export const SetTheme = () => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme("dark")
  }, [])
  return (
    <></>
  )
}